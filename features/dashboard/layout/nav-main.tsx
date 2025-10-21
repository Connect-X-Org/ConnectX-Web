"use client";

import type { UrlObject } from "node:url";
import type { Icon } from "@tabler/icons-react";
import type { LucideProps } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
  pathname,
}: {
  items: {
    title: string;
    url: string | URL | UrlObject | Route<string>;
    icon?:
      | Icon
      | React.ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >;
  }[];
  pathname: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link
                className={
                  pathname === item.url
                    ? "bg-sidebar text-primary"
                    : "text-muted-foreground"
                }
                href={item.url as Route<string>}
              >
                <SidebarMenuButton
                  className="[&>svg]:size-[18px]"
                  tooltip={item.title}
                >
                  {item.icon && (
                    <item.icon
                      className={cn(
                        pathname === item.url
                          ? "text-blue-600"
                          : "text-muted-foreground"
                      )}
                    />
                  )}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
