import type { ChatStatus, UIDataTypes, UIMessage, UITools } from "ai";
import { generateUUID } from "@/lib/utils";
import Messages from "./messages";

export default function DynamicMessages({
  messages,
  status,
}: {
  messages: UIMessage<unknown, UIDataTypes, UITools>[];
  status: ChatStatus;
}) {
  const id = generateUUID();
  return <Messages chatId={id} messages={messages} status={status} />;
}
