import type { Metadata } from "next";
import { Suspense } from "react";
import ChatSection from "@/features/ai/chat-section";
export const metadata: Metadata = {
  title: "Ai",
};
export default function AiPage() {
  return (
    <Suspense>
      <ChatSection />
    </Suspense>
  );
}
