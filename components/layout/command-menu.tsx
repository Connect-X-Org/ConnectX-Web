"use client";

import type { DialogProps } from "@radix-ui/react-dialog";
import { FileIcon, LaptopIcon, Moon, SearchIcon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { menuSections } from "@/config/data";
import { useIsMac } from "@/hooks/use-is-mac";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

const placeholders = [
  "Search places...",
  "Find services...",
  "Toogle theme...",
];
function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}
export function CommandMenu({
  className,
  ...props
}: DialogProps & {
  className?: string;
}) {
  const router = useRouter();
  const isMac = useIsMac();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");
  const { setTheme } = useTheme();
  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);

  // Cycle placeholder every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((op) => !op);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {" "}
      <button
        className={cn("relative", className)}
        onClick={() => setOpen(true)}
        type="button"
        {...props}
      >
        <Input
          className="peer min-h-10 ps-9 lg:min-w-xs lg:pe-9"
          disabled
          placeholder="Search services or pages..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>

        <div className="absolute top-2.5 right-1.5 hidden gap-1 sm:flex">
          <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
          <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
        </div>
      </button>
      <CommandDialog
        className="z-50 rounded-xl border-none ring-1 ring-muted lg:min-w-2xl dark:bg-transparent"
        commandClassName=" dark:bg-background/20 dark:backdrop-blur-md dark:supports-backdrop-blur:bg-background/90"
        onOpenChange={setOpen}
        open={open}
      >
        <CommandInput
          className="justify-start text-lg"
          onValueChange={(value) => setSearchText(value)}
          placeholder={placeholders[placeholderIndex]}
        />

        <CommandList className="max-h-[65vh] dark:bg-transparent">
          <CommandEmpty>
            No results found for{" "}
            <span className="font-medium">"{searchText}"</span>.
          </CommandEmpty>
          {menuSections.map((section) => (
            <CommandGroup heading={section.label} key={section.label}>
              {section.items.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    router.push(`/${slugify(item.name)}`);
                  }}
                  value={item.name}
                >
                  <FileIcon className="mr-2 h-4 w-4" />
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export function CommandMenuKbd({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 select-none items-center justify-center gap-1 rounded border bg-background px-1 font-medium font-sans text-[0.7rem] text-muted-foreground [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
