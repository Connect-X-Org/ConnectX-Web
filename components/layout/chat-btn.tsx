import { MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ChatBtn() {
  return (
    <div className="fixed right-8 bottom-3 z-[51]">
      <Button asChild className="group size-12 rounded-full">
        <Link href={"/ai"}>
          <MessageCircleIcon className="size-6" />
        </Link>
      </Button>
    </div>
  );
}
