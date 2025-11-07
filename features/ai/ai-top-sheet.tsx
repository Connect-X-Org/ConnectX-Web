import { BotMessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ChatSection from "./chat-section";
export default function AiTopSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon-sm" variant={"ghost"}>
          <BotMessageSquareIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-full max-w-full border border-muted backdrop-blur-2xl sm:max-w-full lg:w-1/2 lg:max-w-1/2 dark:bg-black"
        side="left"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Chat</SheetTitle>
          <SheetDescription className="sr-only">
            Study with Ai assistance
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col px-4">
          <ChatSection className="h-screen" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
