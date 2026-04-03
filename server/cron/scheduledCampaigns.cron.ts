/**
 * ============================================================
 * © 2025 Diploy — a brand of Bisht Technologies Private Limited
 * Original Author: BTPL Engineering Team
 * Website: https://diploy.in
 * Contact: cs@diploy.in
 *
 * Distributed under the Envato / CodeCanyon License Agreement.
 * Licensed to the purchaser for use as defined by the
 * Envato Market (CodeCanyon) Regular or Extended License.
 *
 * You are NOT permitted to redistribute, resell, sublicense,
 * or share this source code, in whole or in part.
 * Respect the author's rights and Envato licensing terms.
 * ============================================================
 */

import cron from "node-cron";
import { diployLogger, HTTP_STATUS, DIPLOY_BRAND } from "@diploy/core";
import { storage } from "../storage";
import { startCampaignExecution } from "../controllers/campaigns.controller";
import { db } from "../db";
import { campaigns as campaignsTable, messageQueue } from "@shared/schema";
import { sql } from "drizzle-orm";

// ⏰ Runs every minute
export function startScheduledCampaignCron() {
  cron.schedule("* * * * *", async () => {
    try {
      console.log("⏳ Cron: checking scheduled campaigns");

      const now = new Date();

      // 🟡 Sirf scheduled campaigns jinka time aa chuka hai
      const campaigns = await storage.getScheduledCampaigns(now);

      for (const campaign of campaigns) {
        try {
          console.log("Starting scheduled campaign:", campaign.id);

          await storage.updateCampaign(campaign.id, { status: "active" });

          const updated = await storage.getCampaign(campaign.id);
          if (!updated || updated.status !== "active") {
            console.error(`Scheduled campaign ${campaign.id} failed to transition to active`);
            continue;
          }

          void startCampaignExecution(campaign.id).catch((err) => {
            console.error(`❌ Error in detached startCampaignExecution for campaign ${campaign.id}:`, err);
          });
        } catch (campaignError) {
          console.error(`❌ Error starting scheduled campaign ${campaign.id}:`, campaignError);
        }
      }

      // Safety net: recover campaigns stuck in "queued" with no messages in the queue
      // for more than 3 minutes (queue population lost mid-flight or post-crash)
      try {
        const orphanedQueued = await db
          .select()
          .from(campaignsTable)
          .where(
            sql`
              ${campaignsTable.status} = 'queued'
              AND ${campaignsTable.updatedAt} < NOW() - INTERVAL '3 minutes'
              AND NOT EXISTS (
                SELECT 1 FROM ${messageQueue}
                WHERE ${messageQueue.campaignId} = ${campaignsTable.id}
              )
            `
          );

        for (const campaign of orphanedQueued) {
          try {
            console.log(`⚠️ Cron: recovering orphaned queued campaign: ${campaign.id} (${campaign.name})`);
            await storage.updateCampaign(campaign.id, { status: "active" });
            void startCampaignExecution(campaign.id).catch((err) => {
              console.error(`❌ Error recovering orphaned campaign ${campaign.id}:`, err);
              storage.updateCampaign(campaign.id, { status: "failed" }).catch(() => {});
            });
          } catch (err) {
            console.error(`❌ Error during orphan recovery for campaign ${campaign.id}:`, err);
          }
        }
      } catch (err) {
        console.error("❌ Cron: error during orphan campaign safety net:", err);
      }
    } catch (error) {
      console.error("❌ Cron error (scheduled campaigns):", error);
    }
  });
}
