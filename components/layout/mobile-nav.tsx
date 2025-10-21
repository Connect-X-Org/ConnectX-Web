"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { menuSections } from "@/config/data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "extend-touch-target !p-0 h-8 touch-manipulation items-center justify-start gap-2.5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
          variant="ghost"
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  open ? "-rotate-45 top-[0.4rem]" : "top-1"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>

          <span className="relative font-nunito font-semibold text-2xl tracking-tighter lg:text-4xl">
            Connect
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        alignOffset={-16}
        className="no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100 xl:hidden"
        side="bottom"
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="font-medium text-muted-foreground text-sm">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              <Accordion
                className="flex w-full flex-col gap-3"
                collapsible
                defaultValue="section-0"
                type="single"
              >
                {menuSections.map((section, sectionIndex) => (
                  <AccordionItem
                    className="border-none"
                    key={section.label}
                    value={`section-${sectionIndex}`}
                  >
                    <AccordionTrigger className="px-0 py-3 text-left font-semibold text-xl hover:no-underline">
                      {section.label}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 pb-2">
                      {section.items.map((item) => (
                        <div key={item.name}>
                          <Link
                            className="px-0 py-2 text-left font-medium text-lg text-primary/80 hover:text-primary hover:no-underline"
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="px-0 py-3 text-left font-semibold text-xl hover:no-underline">
                <Link href={"/map"}>Map</Link>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
