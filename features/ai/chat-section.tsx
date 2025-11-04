"use client";

import { useChat } from "@ai-sdk/react";
import {
  CopyIcon,
  GlobeIcon,
  RefreshCcwIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { Fragment, useState } from "react";
import type { ChatMessage } from "@/app/api/chat/route";
import { Action, Actions } from "@/components/ai-elements/actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";
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
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Response } from "@/components/ai-elements/response";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { mockRestaurants } from "@/config/ai-data";
import { restaurants } from "@/config/data";
import { cn } from "@/lib/utils";
import { Greeting } from "./greeting";
import { suggestions } from "./suggestions";
import ChatPlaceCards from "./tools/chat-place-cards";
import ChatRestCards from "./tools/chat-rest-cards";
import SingleRestaurant from "./tools/single-restaurant";

const models = [
  {
    name: "GPT 4o",
    value: "openai/gpt-4o",
  },
  {
    name: "Deepseek R1",
    value: "deepseek/deepseek-r1",
  },
];

export default function ChatSection({ className }: { className?: string }) {
  const [input, setInput] = useState("");
  const [model, setModel] = useState<string>(models[0].value);
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status, regenerate } = useChat<ChatMessage>();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

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
          model,
          webSearch,
        },
      }
    );
    setInput("");
  };
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };
  return (
    <div
      className={cn(
        "relative mx-auto size-full h-screen max-w-4xl p-2 md:p-4 lg:px-6",
        className
      )}
    >
      <div className="flex h-full flex-col">
        <Conversation className="h-full">
          <ConversationContent>
            {/* {messages.length === 0 && <Greeting />} */}
            {/* <SingleRestaurant restaurant={mockRestaurants[0]} /> */}

            {messages.map((message) => (
              <div key={message.id}>
                {message.role === "assistant" &&
                  message.parts.filter((part) => part.type === "source-url")
                    .length > 0 && (
                    <Sources>
                      <SourcesTrigger
                        count={
                          message.parts.filter(
                            (part) => part.type === "source-url"
                          ).length
                        }
                      />
                      {message.parts
                        .filter((part) => part.type === "source-url")
                        .map((part, i) => (
                          <SourcesContent key={`${message.id}-${i}`}>
                            <Source
                              href={part.url}
                              key={`${message.id}-${i}`}
                              title={part.url}
                            />
                          </SourcesContent>
                        ))}
                    </Sources>
                  )}
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent variant={"flat"}>
                              <Response>{part.text}</Response>
                            </MessageContent>
                          </Message>
                          {message.role === "assistant" && (
                            <Actions>
                              <Action
                                label="Retry"
                                onClick={() => regenerate()}
                              >
                                <RefreshCcwIcon className="size-4" />
                              </Action>
                              <Action label="Like">
                                <ThumbsUpIcon className="size-4" />
                              </Action>
                              <Action label="Dislike">
                                <ThumbsDownIcon className="size-4" />
                              </Action>
                              <Action label="Share">
                                <ShareIcon className="size-4" />
                              </Action>
                              <Action
                                label="Copy"
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
                                }
                              >
                                <CopyIcon className="size-4" />
                              </Action>
                            </Actions>
                          )}
                        </Fragment>
                      );
                    case "tool-showRestaurants":
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message
                            className="flex flex-col"
                            from={message.role}
                          >
                            <Response>{part.output?.message}</Response>
                            {part.output?.restaurants && (
                              <ChatRestCards
                                restaurants={part.output.restaurants}
                              />
                            )}
                          </Message>
                        </Fragment>
                      );
                    case "tool-showRestaurant":
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message
                            className="flex flex-col"
                            from={message.role}
                          >
                            <Response>{part.output?.message}</Response>
                            {part.output?.restaurant && (
                              <SingleRestaurant
                                restaurant={part.output.restaurant}
                              />
                            )}
                          </Message>
                        </Fragment>
                      );
                    case "tool-showPlaces":
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message
                            className="flex flex-col"
                            from={message.role}
                          >
                            <Response>{part.output?.message}</Response>
                            {part.output?.places && (
                              <ChatPlaceCards places={part.output.places} />
                            )}
                          </Message>
                        </Fragment>
                      );
                    case "reasoning":
                      return (
                        <Reasoning
                          className="w-full"
                          isStreaming={
                            status === "streaming" &&
                            i === message.parts.length - 1 &&
                            message.id === messages.at(-1)?.id
                          }
                          key={`${message.id}-${i}`}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}
            {/* <AiRestaurantsGrid restaurants={restaurants} /> */}
            {status === "submitted" && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        {messages.length === 0 && (
          <Suggestions>
            {suggestions.map((suggestion) => (
              <Suggestion
                key={suggestion}
                onClick={handleSuggestionClick}
                suggestion={suggestion}
              />
            ))}
          </Suggestions>
        )}

        <div className="sticky bottom-0 z-1 mx-auto flex w-full max-w-4xl gap-2 border-t-0 bg-background px-2 pb-3 md:px-4 md:pb-4 dark:bg-black">
          <PromptInput
            className="mt-4"
            globalDrop
            multiple
            onSubmit={handleSubmit}
          >
            <PromptInputHeader>
              <PromptInputAttachments>
                {(attachment) => <PromptInputAttachment data={attachment} />}
              </PromptInputAttachments>
            </PromptInputHeader>
            <PromptInputBody>
              <PromptInputTextarea
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can we make your day great ?"
                value={input}
              />
            </PromptInputBody>
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
                <PromptInputButton
                  onClick={() => setWebSearch(!webSearch)}
                  variant={webSearch ? "default" : "ghost"}
                >
                  <GlobeIcon size={16} />
                  <span>Search</span>
                </PromptInputButton>
                <PromptInputModelSelect
                  onValueChange={(value) => {
                    setModel(value);
                  }}
                  value={model}
                >
                  <PromptInputModelSelectTrigger>
                    <PromptInputModelSelectValue />
                  </PromptInputModelSelectTrigger>
                  <PromptInputModelSelectContent>
                    {models.map((modl) => (
                      <PromptInputModelSelectItem
                        key={modl.value}
                        value={modl.value}
                      >
                        {modl.name}
                      </PromptInputModelSelectItem>
                    ))}
                  </PromptInputModelSelectContent>
                </PromptInputModelSelect>
              </PromptInputTools>
              <PromptInputSubmit
                disabled={!(input || status)}
                status={status}
              />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}
