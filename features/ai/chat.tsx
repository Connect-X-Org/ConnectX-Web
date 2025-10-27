"use client";
import { useChat } from "@ai-sdk/react";
import { Suspense } from "react";
import { ChatHeader } from "./chat-header";
import DynamicMessages from "./dynamic-messages";
import SuggestionsChat from "./suggestions-chat";

export default function Chat() {
  const { messages, status, sendMessage, stop } = useChat();

  return (
    <div className="overscroll-behavior-contain flex h-dvh min-w-0 touch-pan-y flex-col bg-background dark:bg-black">
      <ChatHeader />
      <Suspense>
        <DynamicMessages messages={messages} status={status} />
      </Suspense>
      <div className="sticky bottom-0 z-1 mx-auto flex w-full max-w-4xl gap-2 border-t-0 bg-background px-2 pb-3 md:px-4 md:pb-4 dark:bg-black">
        <SuggestionsChat
          messages={messages}
          sendMessage={sendMessage}
          status={status}
          stop={stop}
        />
      </div>
    </div>
  );
}
