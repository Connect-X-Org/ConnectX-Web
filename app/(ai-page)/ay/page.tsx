import type { Metadata } from "next";
import ChatSection from "@/features/ay/chat-section";
export const metadata: Metadata = {
  title: "Ai",
};
export default function AiPage() {
  return <ChatSection />;
}
