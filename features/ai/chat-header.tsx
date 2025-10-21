"use client";

import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarToggle } from "./sidebar/sidebar-toggle";
import { VisibilitySelector } from "./visibility-selector";

function PureChatHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 flex items-center gap-2 px-2 py-1.5 md:px-2">
      <SidebarToggle />

      <Button
        className="order-2 ml-auto h-8 px-2 md:order-1 md:ml-0 md:h-fit md:px-2 dark:bg-black"
        onClick={() => {
          router.push("/ai");
          router.refresh();
        }}
        variant="outline"
      >
        <PlusIcon />
        <span className="md:sr-only">New Chat</span>
      </Button>

      <VisibilitySelector className="order-1 md:order-2" />
    </header>
  );
}

export function ChatHeader() {
  return <PureChatHeader />;
}
