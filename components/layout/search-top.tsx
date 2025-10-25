"use client";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useIsMac } from "@/hooks/use-is-mac";
import { CommandMenuKbd } from "./command-menu";
export default function SearchTop() {
  const isMac = useIsMac();
  return (
    <div className="mx-auto hidden w-full max-w-xl items-center gap-x-4 rounded-full md:flex lg:gap-x-6">
      <div className="relative w-full">
        <Input
          className="peer min-h-10 rounded-full border-0 bg-muted ps-9 lg:min-w-xs lg:pe-9 dark:border"
          placeholder="Search places, services or products..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>

        <div className="absolute inset-y-0 end-2 hidden items-center justify-center gap-1 lg:flex">
          <CommandMenuKbd className="aspect-square bg-muted">
            {isMac ? "⌘" : "Ctrl"}
          </CommandMenuKbd>
          <CommandMenuKbd className="aspect-square bg-muted">K</CommandMenuKbd>
        </div>
      </div>
    </div>
  );
}
