import type { Metadata } from "next";
import { Suspense } from "react";
import Chat from "@/features/ai/chat";
export const metadata: Metadata = {
  title: "Ai",
};
export default function AiPage() {
  return (
    <Suspense>
      <Chat />
    </Suspense>
  );
}
