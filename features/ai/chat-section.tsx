"use client";

import { useChat } from "@ai-sdk/react";
import {
  ArrowUpIcon,
  CopyIcon,
  GlobeIcon,
  RefreshCcwIcon,
  ShareIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrashIcon,
} from "lucide-react";
import { Fragment, useState } from "react";
import type { ChatMessage } from "@/app/api/chat/route";
import { Action, Actions } from "@/components/ai-elements/actions";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
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
  PromptInputSpeechButton,
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
import { cn } from "@/lib/utils";
import { Greeting } from "./greeting";
import { suggestions } from "./suggestions";
import { ThinkingIndicator } from "./thinking";
import ChatHouseCards from "./tools/chat-house-cards";
import ChatPlaceCards from "./tools/chat-place-cards";
import ChatRestCards from "./tools/chat-rest-cards";
import SingleRestaurant from "./tools/single-restaurant";

export default function ChatSection({ className }: { className?: string }) {
  const [input, setInput] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const { messages, setMessages, sendMessage, status, regenerate } =
    useChat<ChatMessage>();

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
          webSearch,
        },
      }
    );
    setInput("");
  };
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };
  const handleClear = () => {
    setMessages([]);
    setInput("");
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
            {messages.length === 0 && <Greeting />}

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
                    case "tool-showHouses":
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message
                            className="flex flex-col"
                            from={message.role}
                          >
                            <Response>{part.output?.message}</Response>
                            {part.output?.houses && (
                              <ChatHouseCards houses={part.output.houses} />
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
            {status === "submitted" && <ThinkingIndicator />}
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
                placeholder="Looking for a place to eat, stay, or visit?"
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

                <PromptInputSpeechButton />
                {messages.length > 1 && (
                  <PromptInputButton onClick={handleClear} variant={"ghost"}>
                    <TrashIcon size={16} />
                    <span>Clear</span>
                  </PromptInputButton>
                )}
              </PromptInputTools>
              <PromptInputSubmit
                className="size-8 rounded-full bg-primary text-primary-foreground transition-colors duration-200 hover:bg-primary/90 hover:text-primary-foreground/90 disabled:bg-muted disabled:text-muted-foreground"
                disabled={!input.trim()}
                status={status}
                variant={"ghost"}
              >
                <ArrowUpIcon size={14} />
              </PromptInputSubmit>
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}
