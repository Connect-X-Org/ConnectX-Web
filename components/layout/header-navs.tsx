"use client";

import { usePathname } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { navItems } from "@/config/data";
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

export default function HeaderNavs() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 flex w-full items-center justify-center gap-4 border-muted border-b bg-background dark:bg-black"
      )}
    >
      <ScrollArea className="w-[100vw] overflow-hidden lg:w-full">
        <div className="mx-auto flex w-full items-center justify-center">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.link || pathname.startsWith(`${item.link}/`);

            return (
              <NavItem
                active={isActive}
                id={index}
                item={item}
                key={item.label}
              />
            );
          })}
        </div>
        <ScrollBar className="h-0 w-0" orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
}

export function ServicesHeaderNavs() {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex w-full items-center justify-center">
      {navItems.map((item, index) => {
        const isActive =
          pathname === item.link || pathname.startsWith(`${item.link}/`);

        return (
          <NavItem active={isActive} id={index} item={item} key={item.label} />
        );
      })}
    </div>
  );
}
