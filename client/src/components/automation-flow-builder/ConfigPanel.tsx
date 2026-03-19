import { Node } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Trash2,
  Plus,
  X,
  UserPlus,
  ImageIcon,
  Video,
  FileAudio,
  FileIcon,
} from "lucide-react";
import { BuilderNodeData, Template, Member } from "./types";
import { FileUploadButton } from "./FileUploadButton";
import { uid } from "./utils";
import { useState } from "react";

interface ConfigPanelProps {
  selected: Node<BuilderNodeData> | null;
  onChange: (patch: Partial<BuilderNodeData>) => void;
  onDelete: () => void;
  templates: Template[];
  members: Member[];
  channelId?: string;
  
}

export function ConfigPanel({
  selected,
  onChange,
  onDelete,
  templates,
  members,
  channelId
}: ConfigPanelProps) {
  const [templateMeta, setTemplateMeta] = useState<any>(null);

  // ✅ Normalize template body variables (number → array)
const bodyVarsArray: string[] = (() => {
  if (!templateMeta) return [];

  // Already array (future safe)
  if (Array.isArray(templateMeta.bodyVariables)) {
    return templateMeta.bodyVariables;
  }

  // If backend sends a number, convert like: 2 → ["{{1}}", "{{2}}"]
  if (typeof templateMeta.bodyVariables === "number" && templateMeta.bodyVariables > 0) {
    return Array.from({ length: templateMeta.bodyVariables }, (_, i) => `{{${i + 1}}}`);
  }

  return [];
})();


  console.log("CHECK TEAMPLATE META IN CONFIG PANEL:", templates);

  if (!selected || selected.data.kind === "start") {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a node to configure
      </div>
    );
  }

  const d = selected.data;

  const handleFileUpload =
    (type: "image" | "video" | "audio" | "document") => (file: File) => {
      const previewUrl = URL.createObjectURL(file);
      onChange({
        [`${type}File`]: file,
        [`${type}Preview`]: previewUrl,
      } as any);
    };

  const removeFile = (type: "image" | "video" | "audio" | "document") => () => {
    onChange({
      [`${type}File`]: null,
      [`${type}Preview`]: null,
    } as any);
  };

  const addButton = () => {
    const newButton = {
      id: uid(),
      text: "New Button",
      action: "next" as const,
    };
    onChange({
      buttons: [...(d.buttons || []), newButton],
    });
  };



  const selectedTemplate = templates.find(
  (t) => t.id === selected?.data?.templateId
);

const sampleVars: string[] = Array.isArray(selectedTemplate?.variables)
  ? selectedTemplate.variables
  : [];



const templateSampleMap: Record<string, string> = {};

if (Array.isArray(selected?.data?.variables)) {
  selected?.data?.variables.forEach((sample: string, index: number) => {
    templateSampleMap[String(index + 1)] = sample;
  });
}




  const updateButton = (
    buttonId: string,
    updates: Partial<NonNullable<typeof d.buttons>[0]>
  ) => {
    onChange({
      buttons: (d.buttons || []).map((btn) =>
        btn.id === buttonId ? { ...btn, ...updates } : btn
      ),
    });
  };

  const removeButton = (buttonId: string) => {
    onChange({
      buttons: (d.buttons || []).filter((btn) => btn.id !== buttonId),
    });
  };

  const addKeyword = () => {
    const keywords = d.keywords || [];
    onChange({
      keywords: [...keywords, ""],
    });
  };

  const updateKeyword = (index: number, value: string) => {
    const keywords = d.keywords || [];
    const updated = [...keywords];
    updated[index] = value;
    onChange({ keywords: updated });
  };

  const removeKeyword = (index: number) => {
    const keywords = d.keywords || [];
    onChange({ keywords: keywords.filter((_, i) => i !== index) });
  };

  const handleButtonClick = (url: string | undefined) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col h-screen mt-4">
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-4 space-y-4">

          {/* CONDITIONS PANEL */}
          {d.kind === "conditions" && (
            <Card className="p-3 space-y-4">
              <div>
                <Label>Condition Type</Label>
                <Select
                  value={d.conditionType || "keyword"}
                  onValueChange={(value) =>
                    onChange({ conditionType: value as any })
                  }
                >
                  <SelectTrigger className="w-full h-9 px-2 text-sm">
                    <SelectValue placeholder="Select condition type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="keyword">Contains Keywords</SelectItem>
                    <SelectItem value="equals">Equals</SelectItem>
                    <SelectItem value="starts_with">Starts With</SelectItem>
                    <SelectItem value="contains">Contains Text</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Match Type</Label>
                <Select
                  value={d.matchType || "any"}
                  onValueChange={(value) =>
                    onChange({ matchType: value as any })
                  }
                >
                  <SelectTrigger className="w-full h-9 px-2 text-sm">
                    <SelectValue placeholder="Select match type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Match Any</SelectItem>
                    <SelectItem value="all">Match All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Keywords</Label>
                  <Button size="sm" variant="outline" onClick={addKeyword}>
                    <Plus className="w-3 h-3 mr-1" />
                    Add Keyword
                  </Button>
                </div>

                {(d.keywords || []).map((keyword, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={keyword}
                      onChange={(e) => updateKeyword(index, e.target.value)}
                      placeholder={`Keyword ${index + 1}`}
                      className="flex-1"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeKeyword(index)}
                      className="text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

                {(!d.keywords || d.keywords.length === 0) && (
                  <div className="text-sm text-gray-500 italic">
                    No keywords added yet. Click "Add Keyword" to start.
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* CUSTOM REPLY PANEL */}
          {d.kind === "custom_reply" && (
            <Card className="p-3 space-y-4">
              <div>
                <Label>Message</Label>
                <Textarea
                  rows={4}
                  value={d.message || ""}
                  onChange={(e) => onChange({ message: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <Label>Attachments</Label>
                <div className="grid grid-cols-2 gap-2">
                  <FileUploadButton
                    accept="image/*"
                    onUpload={handleFileUpload("image")}
                  >
                    <ImageIcon className="w-4 h-4" />
                    Image
                  </FileUploadButton>
                  <FileUploadButton
                    accept="video/*"
                    onUpload={handleFileUpload("video")}
                  >
                    <Video className="w-4 h-4" />
                    Video
                  </FileUploadButton>
                  <FileUploadButton
                    accept="audio/*"
                    onUpload={handleFileUpload("audio")}
                  >
                    <FileAudio className="w-4 h-4" />
                    Audio
                  </FileUploadButton>
                  <FileUploadButton
                    accept=".pdf,.doc,.docx,.txt"
                    onUpload={handleFileUpload("document")}
                  >
                    <FileIcon className="w-4 h-4" />
                    Document
                  </FileUploadButton>
                </div>

                {d.imagePreview && (
                  <div className="relative border rounded-lg p-2">
                    <img
                      src={d.imagePreview}
                      alt="preview"
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      onClick={removeFile("image")}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                {d.videoPreview && (
                  <div className="relative border rounded-lg p-2 flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Video attached</span>
                    <button
                      onClick={removeFile("video")}
                      className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                {d.audioPreview && (
                  <div className="relative border rounded-lg p-2 flex items-center gap-2">
                    <FileAudio className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">Audio attached</span>
                    <button
                      onClick={removeFile("audio")}
                      className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                                {d.documentPreview && (
                  <div className="relative border rounded-lg p-2 flex items-center gap-2">
                    <FileIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">Document attached</span>
                    <button
                      onClick={removeFile("document")}
                      className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Buttons (Optional)</Label>
                  <Button size="sm" variant="outline" onClick={addButton}>
                    <Plus className="w-3 h-3 mr-1" />
                    Add Button
                  </Button>
                </div>

                {d.buttons?.map((button) => (
                  <div key={button.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        value={button.text}
                        onChange={(e) =>
                          updateButton(button.id, { text: e.target.value })
                        }
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeButton(button.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* TIME GAP PANEL */}
          {d.kind === "time_gap" && (
            <Card className="p-3 space-y-3">
              <div>
                <Label>Delay (seconds)</Label>
                <Input
                  type="number"
                  min={10}
                  value={d.delay ?? 60}
                  onChange={(e) =>
                    onChange({ delay: parseInt(e.target.value, 10) })
                  }
                />
              </div>
            </Card>
          )}

          {/* SEND TEMPLATE PANEL */}
          {d.kind === "send_template" && (
            <Card className="p-3 space-y-3">
              {/* Template selector */}
              <div>
                <Label>Choose Template</Label>
                <select
                  className="w-full border rounded-md h-9 px-2"
                  value={d.templateId || ""}
                 onChange={async (e) => {
    const templateId = e.target.value;
    const template = templates.find((t) => t.id === templateId);

    onChange({ templateId });

    if (template?.whatsappTemplateId && channelId) {
      try {
        const res = await fetch(
          `/api/whatsapp/templates/${template.whatsappTemplateId}/meta?channelId=${channelId}`
        );
        const meta = await res.json();
        setTemplateMeta(meta);

        onChange({ headerImageId: null, variableMapping: {} });
      } catch (err) {
        console.error("Failed to fetch template meta:", err);
      }
    }
  }}

                >
                  <option value="">Select template</option>
                  {templates.map((t: Template) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Required header image for IMAGE templates */}
              {templateMeta?.headerType === "IMAGE" && (
                <div className="space-y-2">
                  <Label className="text-red-600">
                    Header Image (Required)
                  </Label>

                  <Input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const formData = new FormData();
                      formData.append("mediaFile", file);
                      formData.append("templateId", d.templateId || "");

                      const res = await fetch(
                        `/api/whatsapp/channels/${channelId}/upload-image`,
                        { method: "POST", body: formData }
                      );
                      const data = await res.json();
                      onChange({ headerImageId: data.mediaId });
                    }}
                  />

                  {!d.headerImageId && (
                    <div className="text-sm text-red-500">
                      Header image is required for this template
                    </div>
                  )}
                </div>
              )}

              {/* Body variable mapping */}
{bodyVarsArray.length > 0 && (
  <div className="space-y-2">
    <Label className="text-sm font-medium">Map Template Variables</Label>

    {bodyVarsArray.map((varText: string) => {
      const index = varText.replace(/\D/g, "");
      const sampleValue = sampleVars[index - 1]; 


      return (
        <div key={index}>
          <Label className="text-sm font-normal">Value for {varText}</Label>

          <Select
            value={d.variableMapping?.[index]?.type || ""}
            onValueChange={(type) =>
              onChange({
                variableMapping: {
                  ...d.variableMapping,
                  [index]: { type, value: "" },
                },
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="firstName">First Name</SelectItem>
              <SelectItem value="lastName">Last Name</SelectItem> */}
              <SelectItem value="fullName">Full Name</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="custom">Custom Value</SelectItem>
            </SelectContent>
          </Select>

          {d.variableMapping?.[index]?.type === "custom" && (
            <Input
              className="mt-1"
              value={d.variableMapping[index]?.value || ""}
              onChange={(e) =>
                onChange({
                  variableMapping: {
                    ...d.variableMapping,
                    [index]: {
                      ...d.variableMapping[index],
                      value: e.target.value,
                    },
                  },
                })
              }
              placeholder={`Custom value for ${varText}`}
            />
          )}
           {/* 👀 SAMPLE VALUE (UI HINT) */}
      {sampleValue && (
        <p className="text-xs text-gray-500">
          Sample: <span className="font-medium">{sampleValue}</span>
        </p>
      )}
        </div>
      );
    })}
  </div>
)}

            </Card>
          )}

          {/* ASSIGN USER PANEL */}
          {d.kind === "assign_user" && (
            <Card className="p-3 space-y-3">
              <div>
                <Label className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" /> Assign to Member
                </Label>
                <select
                  className="w-full border rounded-md h-9 px-2"
                  value={d.assigneeId || ""}
                  onChange={(e) => onChange({ assigneeId: e.target.value })}
                >
                  <option value="">Select member</option>
                  {members.map((m: Member) => (
                    <option key={m.id} value={m.id}>
                      {m.name || `${m.firstName || ""} ${m.lastName || ""}`}
                    </option>
                  ))}
                </select>
              </div>
            </Card>
          )}

          {/* USER REPLY PANEL */}
          {d.kind === "user_reply" && (
            <Card className="p-3 space-y-4">
              <div>
                <Label>Question Text</Label>
                <Textarea
                  rows={4}
                  value={d.question || ""}
                  onChange={(e) => onChange({ question: e.target.value })}
                  placeholder="What would you like to ask the user?"
                />
              </div>

              <div>
                <Label>Save Answer As (Variable Name)</Label>
                <Input
                  value={d.saveAs || ""}
                  onChange={(e) => onChange({ saveAs: e.target.value })}
                  placeholder="e.g., user_name"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Answer Options</Label>
                  <Button size="sm" variant="outline" onClick={addButton}>
                    <Plus className="w-3 h-3 mr-1" />
                    Add Option
                  </Button>
                </div>

                {d.buttons?.map((button) => (
                  <div key={button.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        value={button.text}
                        onChange={(e) =>
                          updateButton(button.id, { text: e.target.value })
                        }
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeButton(button.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

