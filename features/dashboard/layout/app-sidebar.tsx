"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboardNavs } from "@/config/dashboard";
import { siteConfig } from "@/config/site";
import { NavMain } from "@/features/dashboard/layout/nav-main";
import { NavSecondary } from "@/features/dashboard/layout/nav-secondary";
import { NavUser } from "@/features/dashboard/layout/nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <Image alt="logo" height={20} src="/logo.png" width={20} />
                <span className="font-semibold text-xl capitalize">
                  {siteConfig.name}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dashboardNavs.navMain} pathname={pathname} />
        <NavSecondary
          className="mt-auto"
          items={dashboardNavs.navSecondary}
          pathname={pathname}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
