import { SearchIcon } from "lucide-react";
import { CommandMenu } from "@/components/layout/command-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
export default function NotFound() {
  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center">
      <Empty className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <EmptyMedia variant="icon">
            <SearchIcon />
          </EmptyMedia>
          <EmptyTitle className="text-center font-bold text-2xl lg:text-4xl">
            404 - Not Found
          </EmptyTitle>
          <EmptyDescription className="text-center text-xl">
            The page you&apos;re looking for doesn&apos;t exist. Try searching
            for what you need below.
          </EmptyDescription>
        </div>
        <EmptyContent className="flex flex-col items-center justify-center text-center">
          <CommandMenu />
          <EmptyDescription className="text-center">
            Need help? <a href="/">Contact support</a>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  );
}
