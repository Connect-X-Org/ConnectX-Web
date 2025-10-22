"use client";

import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { adminNavItems } from "@/config/data";
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";
export type UserRole = "admin" | "author" | "media-manager" | "viewer";

export default function HeaderNavs() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex w-full items-center justify-center gap-4 border-border border-b bg-transparent"
      )}
    >
      <div className="flex items-center gap-4 px-4 transition-all duration-1000 ease-in sm:px-6">
        <ScrollArea className="w-[100vw] overflow-hidden lg:w-full">
          <div className="mx-auto flex w-full items-center">
            {adminNavItems.map((item, index) => (
              <NavItem
                active={pathname === item.link}
                id={index}
                item={item}
                key={item.label}
              />
            ))}
          </div>
          <ScrollBar className="h-0 w-0" orientation="horizontal" />
        </ScrollArea>
      </div>
    </nav>
  );
}
