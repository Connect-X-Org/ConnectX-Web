import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ChatBtn() {
  return (
    <div className="-translate-x-1/2 fixed bottom-6 left-1/2 z-30">
      <Button
        asChild
        className="group flex w-36 items-center gap-4 rounded-2xl px-6 text-muted-foreground hover:text-primary/90"
        variant={"secondary"}
      >
        <Link className="flex items-center" href={"/ai"}>
          <SearchIcon className="mr-auto" />
          <span className="pr-6">Ask AI</span>
        </Link>
      </Button>
    </div>
  );
}
