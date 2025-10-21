import type { Metadata } from "next";
import Chat from "@/features/ai/chat";
export const metadata: Metadata = {
  title: "Ai",
};
export default function AiPage() {
  return <Chat />;
}
