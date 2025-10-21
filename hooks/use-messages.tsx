import type { ChatStatus } from "ai";
import { useEffect, useState } from "react";
import { useScrollToBottom } from "./use-scroll-to-bottom";

export function useMessages({
  chatId,
  status,
}: {
  chatId: string;
  status: ChatStatus;
}) {
  const {
    containerRef,
    endRef,
    isAtBottom,
    scrollToBottom,
    onViewportEnter,
    onViewportLeave,
  } = useScrollToBottom();

  const [hasSentMessage, setHasSentMessage] = useState(false);

  useEffect(() => {
    if (status === "submitted") {
      setHasSentMessage(true);
    }
  }, [status]);

  return {
    containerRef,
    endRef,
    isAtBottom,
    scrollToBottom,
    onViewportEnter,
    onViewportLeave,
    hasSentMessage,
  };
}
