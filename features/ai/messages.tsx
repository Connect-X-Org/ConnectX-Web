"use client";

import type { ChatStatus, UIDataTypes, UIMessage, UITools } from "ai";
import { ArrowDownIcon } from "lucide-react";
import { useEffect } from "react";
// import { useChat } from "@ai-sdk/react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { useMessages } from "@/hooks/use-messages";
import { Greeting } from "./greeting";
import { PreviewMessage, ThinkingMessage } from "./message";

export default function Messages({
  messages,
  status,
  chatId,
}: {
  chatId: string;
  messages: UIMessage<unknown, UIDataTypes, UITools>[];
  status: ChatStatus;
}) {
  const {
    containerRef: messagesContainerRef,
    endRef: messagesEndRef,
    isAtBottom,
    scrollToBottom,
    hasSentMessage,
  } = useMessages({
    chatId,
    status,
  });
  useEffect(() => {
    if (status === "submitted") {
      requestAnimationFrame(() => {
        const container = messagesContainerRef.current;
        if (container) {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
          });
        }
      });
    }
  }, [status, messagesContainerRef]);

  return (
    <div
      className="overscroll-behavior-contain -webkit-overflow-scrolling-touch flex-1 touch-pan-y overflow-y-scroll"
      ref={messagesContainerRef}
      style={{ overflowAnchor: "none" }}
    >
      <Conversation className="mx-auto flex min-w-0 max-w-4xl flex-col gap-4 md:gap-6">
        <ConversationContent className="flex flex-col gap-4 px-2 py-4 md:gap-6 md:px-4">
          {messages.length === 0 && <Greeting />}

          {messages.length > 0 &&
            messages.map((message, index) => (
              <PreviewMessage
                chatId={chatId}
                isLoading={
                  status === "streaming" && messages.length - 1 === index
                }
                isReadonly={false}
                key={message.id}
                message={message}
                requiresScrollPadding={
                  hasSentMessage && index === messages.length - 1
                }
              />
            ))}
          {status === "submitted" && <ThinkingMessage />}
          <div
            className="min-h-[24px] min-w-[24px] shrink-0"
            ref={messagesEndRef}
          />
          <ConversationScrollButton />
        </ConversationContent>
      </Conversation>
      {!isAtBottom && (
        <button
          aria-label="Scroll to bottom"
          className="-translate-x-1/2 absolute bottom-40 left-1/2 z-10 rounded-full border bg-background p-2 shadow-lg transition-colors hover:bg-muted"
          onClick={() => scrollToBottom("smooth")}
          type="button"
        >
          <ArrowDownIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
