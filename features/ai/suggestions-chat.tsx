"use client";

import type { useChat } from "@ai-sdk/react";
import type { ChatStatus, UIDataTypes, UIMessage, UITools } from "ai";
import { GlobeIcon, MicIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpIcon, StopIcon } from "./icons";

const suggestions = [
  "Find the first ten places I can visit in the country",
  "Book my hotel room",
  "Show popular restaurants nearby",
  "Find local guided tours",
  "Check the weather forecast",
  "Get a taxi or ride-hailing service",
  "Find local events and festivals",
  "Get tips for cultural etiquette",
  "Find nearby pharmacies or hospitals",
  "Rent a car or bike for sightseeing",
];
const models = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "claude-opus-4-20250514", name: "Claude 4 Opus" },
];
type SuggestionsChatProps = {
  messages: UIMessage<unknown, UIDataTypes, UITools>[];
  status: ChatStatus;
  sendMessage: ReturnType<typeof useChat>["sendMessage"];
  stop: () => Promise<void>;
};
const SuggestionsChat = ({
  messages,
  status,
  sendMessage,
  stop,
}: SuggestionsChatProps) => {
  const [text, setText] = useState<string>("");
  const [model] = useState<string>(models[0].id);
  const [useMicrophone, setUseMicrophone] = useState<boolean>(false);
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);

  // const { messages, status, sendMessage } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);
    if (status !== "ready") {
      toast.error("Please wait for the model to finish its response!");
      return;
    }
    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      {
        text: message.text || "Sent with attachments",
        files: message.files,
      },
      {
        body: {
          // model,
          webSearch: useWebSearch,
        },
      }
    );
    setText("");
    // console.log(messages);
  };

  return (
    <div className="relative mx-auto size-full">
      <div className="flex flex-col gap-4">
        <Suggestions className={cn(messages.length > 0 && "hidden")}>
          {suggestions.map((suggestion) => (
            <Suggestion
              key={suggestion}
              size={"lg"}
              // onClick={handleSuggestionClick}
              suggestion={suggestion}
            />
          ))}
        </Suggestions>
        <PromptInput
          className="rounded-xl border border-border bg-background p-3 shadow-xs transition-all duration-200 focus-within:border-border hover:border-muted-foreground/50"
          globalDrop
          multiple
          onSubmit={handleSubmit}
        >
          <PromptInputBody>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
            <PromptInputTextarea
              autoFocus
              className="grow resize-none border-0! border-none! bg-transparent p-2 text-sm outline-none ring-0 [-ms-overflow-style:none] [scrollbar-width:none] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-[16px] [&::-webkit-scrollbar]:hidden"
              disableAutoResize={true}
              maxHeight={200}
              minHeight={44}
              onChange={(e) => setText(e.currentTarget.value)}
              placeholder="Ask CX Assistant"
              rows={1}
              value={text}
            />
          </PromptInputBody>
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputButton
                className="hidden md:inline-flex"
                onClick={() => setUseMicrophone(!useMicrophone)}
                variant={useMicrophone ? "default" : "ghost"}
              >
                <MicIcon size={16} />
                <span className="sr-only">Microphone</span>
              </PromptInputButton>
              <PromptInputButton
                onClick={() => setUseWebSearch(!useWebSearch)}
                variant={useWebSearch ? "default" : "ghost"}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <PromptInputModelSelect value={model}>
                <PromptInputModelSelectTrigger>
                  <PromptInputModelSelectValue />
                </PromptInputModelSelectTrigger>
                <PromptInputModelSelectContent>
                  {models.map((modl) => (
                    <PromptInputModelSelectItem key={modl.id} value={modl.id}>
                      {modl.name}
                    </PromptInputModelSelectItem>
                  ))}
                </PromptInputModelSelectContent>
              </PromptInputModelSelect>
            </PromptInputTools>
            {/* <PromptInputSubmit disabled={!(text || status)} status={status} /> */}
            {status === "submitted" ? (
              <StopButton stop={stop} />
            ) : (
              <PromptInputSubmit
                className="size-8 rounded-full bg-primary text-primary-foreground transition-colors duration-200 hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground"
                disabled={!text.trim()}
                status={status}
              >
                <ArrowUpIcon size={14} />
              </PromptInputSubmit>
            )}
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};

export default SuggestionsChat;

function StopButton({ stop }: { stop: () => void }) {
  return (
    <Button
      className="size-7 rounded-full bg-foreground p-1 text-background transition-colors duration-200 hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground"
      data-testid="stop-button"
      onClick={(event) => {
        event.preventDefault();
        stop();
      }}
    >
      <StopIcon size={14} />
    </Button>
  );
}
