import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/auth-context";

interface CreateCampaignFormProps {
  onSubmit: (formData: any) => void;
  templates: any[];
  selectedTemplate: any;
  setSelectedTemplate: (template: any) => void;
  variableMapping: Record<string, string>;
  setVariableMapping: (mapping: Record<string, string>) => void;
  extractTemplateVariables: (template: any) => string[];
  scheduledTime: string;
  setScheduledTime: (time: string) => void;
  autoRetry: boolean;
  setAutoRetry: (retry: boolean) => void;
  isCreating: boolean;
  onCancel?: () => void;
  children: ReactNode;
  requiresHeaderImage: boolean;
  setRequiresHeaderImage: (v: boolean) => void;
  uploadedMediaId: string | null;
  setUploadedMediaId: (id: string | null) => void;
  channelId?: string;
}

export function CreateCampaignForm({
  onSubmit,
  templates,
  selectedTemplate,
  setSelectedTemplate,
  variableMapping,
  setVariableMapping,
  extractTemplateVariables,
  scheduledTime,
  setScheduledTime,
  autoRetry,
  setAutoRetry,
  isCreating,
  onCancel,
  children,
  requiresHeaderImage,
  setRequiresHeaderImage,
  uploadedMediaId,
  setUploadedMediaId,
  channelId,
}: CreateCampaignFormProps) {
  // console.log(templates)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const campaignData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      variableMapping: variableMapping,
    };
    onSubmit(campaignData);
  };

  const activeTemplates = Array.isArray(templates)
    ? templates.filter((t: any) => t.status?.toLowerCase() === "approved")
    : [];

  const fetchTemplateMeta = async (templateWhatsappId: string) => {
    const res = await fetch(
      `/api/whatsapp/templates/${templateWhatsappId}/meta?channelId=${channelId}`
    );
    return res.json();
  };

  const templateSampleMap: Record<string, string> = {};

  if (Array.isArray(selectedTemplate?.variables)) {
    selectedTemplate.variables.forEach((sample: string, index: number) => {
      templateSampleMap[String(index + 1)] = sample;
    });
  }

  const { user } = useAuth();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <Label htmlFor="name">Campaign Name</Label>
        <Input id="name" name="name" required placeholder="Name" />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Campaign objectives and notes..."
        />
      </div>

      <div>
        <Label>Template</Label>
        <Select
          value={selectedTemplate?.id ?? ""}
          onValueChange={async (value) => {
            const template = templates.find((t) => t.id === value);
            setSelectedTemplate(template);
            setVariableMapping({});

            setUploadedMediaId(null);
            setRequiresHeaderImage(false);

            // 🔥 FETCH META FROM WHATSAPP
            if (template?.whatsappTemplateId) {
              const meta = await fetchTemplateMeta(template.whatsappTemplateId);

              setRequiresHeaderImage(meta.headerType === "IMAGE");
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>
          <SelectContent>
            {/* {templates.map((template: any) => (
              <SelectItem key={template.id} value={template.id}>
                {template.name} ({template.language})
              </SelectItem>
            ))} */}

            {activeTemplates.map((template: any) => (
              <SelectItem key={template.id} value={template.id}>
                {template.name} ({template.language})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Show template preview */}
      {selectedTemplate && (
        <div className="bg-gray-50 p-4 rounded-md space-y-2">
          <Label>Template Preview</Label>
          {selectedTemplate.headerType === "text" &&
            selectedTemplate.headerText && (
              <div className="font-semibold">{selectedTemplate.headerText}</div>
            )}
          <div className="whitespace-pre-wrap">{selectedTemplate.body}</div>
          {selectedTemplate.footerText && (
            <div className="text-sm text-gray-600">
              {selectedTemplate.footerText}
            </div>
          )}
        </div>
      )}

      {requiresHeaderImage && (
        <div className="space-y-2">
          <Label className="text-red-600">Header Image (Required)</Label>

          <Input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file || !channelId) return;

              const formData = new FormData();
              formData.append("mediaFile", file);
              formData.append("templateId", selectedTemplate?.id);

              const res = await fetch(
                `/api/whatsapp/channels/${channelId}/upload-image`,
                {
                  method: "POST",
                  body: formData,
                }
              );

              const data = await res.json();
              setUploadedMediaId(data.mediaId);
            }}
          />

          {uploadedMediaId && (
            <p className="text-xs text-green-600">
              ✅ Image uploaded (mediaId: {uploadedMediaId})
            </p>
          )}
        </div>
      )}

      {/* Variable mapping */}

      {extractTemplateVariables(selectedTemplate).map((variable: string) => {
        const sampleValue = templateSampleMap[variable];

        console.log("Sample value for", variable, "is", sampleValue);

        return (
          <div key={variable} className="space-y-1">
            <Label className="text-sm font-normal">
              Choose value for <strong>{"{{" + variable + "}}"}</strong>
            </Label>

            <Select
              value={variableMapping[variable]?.type || ""}
              onValueChange={(type) => {
                setVariableMapping({
                  ...variableMapping,
                  [variable]: { type, value: "" },
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullName">Full Name</SelectItem>
                <SelectItem value="phone">Phone Number</SelectItem>
                <SelectItem value="custom">Custom Value</SelectItem>
              </SelectContent>
            </Select>

            {variableMapping[variable]?.type === "custom" && (
              <Input
                placeholder="Type custom value"
                value={variableMapping[variable]?.value || ""}
                onChange={(e) =>
                  setVariableMapping({
                    ...variableMapping,
                    [variable]: {
                      ...variableMapping[variable],
                      value: e.target.value,
                    },
                  })
                }
              />
            )}

            {/* 👀 SAMPLE VALUE */}
            {sampleValue && (
              <p className="text-xs text-gray-500">
                Sample: <span className="font-medium">{sampleValue}</span>
              </p>
            )}
          </div>
        );
      })}

      <div>
        <Label htmlFor="scheduledTime">Schedule Campaign (Optional)</Label>
        <Input
          id="scheduledTime"
          type="datetime-local"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="autoRetry"
          checked={autoRetry}
          onCheckedChange={(checked) => setAutoRetry(!!checked)}
        />
        <Label htmlFor="autoRetry" className="font-normal">
          Enable auto-retry for failed messages
        </Label>
      </div>

      {children}

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          {scheduledTime ? "Schedule Campaign" : "Start Campaign"}
        </Button>
      </div>
    </form>
  );
}
