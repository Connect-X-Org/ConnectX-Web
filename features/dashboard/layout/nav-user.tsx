"use client";

import {
  IconDotsVertical,
  IconLogout,
  IconMoon,
  IconSun,
  IconUserCircle,
} from "@tabler/icons-react";
import { BellDotIcon, LinkIcon, ListCheckIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  function handleToggleTheme(event: React.MouseEvent<HTMLDivElement>) {
    // i do not want dropdropwn to close when i toggle theme
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const handleSignOut = () => {
    try {
      toast.success("You have been logged out.");
      router.push("/");
    } catch {
      toast.error("Failed to log out.");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <Avatar className="size-8 rounded-full">
                <AvatarImage alt={"caleb ndugire"} src={"/profile.svg"} />
                <AvatarFallback className="rounded-full">{"CN"}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{"caleb ndugire"}</span>
                <span className="truncate text-muted-foreground text-xs">
                  {"caleb@ndugire.com"}
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg dark:border dark:border-[#2e2e2e] dark:bg-black"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <Link href="/profile">
                <DropdownMenuItem>
                  <IconUserCircle />
                  My Profile
                </DropdownMenuItem>
              </Link>
              <Link href="/notifications">
                <DropdownMenuItem>
                  <BellDotIcon />
                  Notifications
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem onClick={(event) => handleToggleTheme(event)}>
                {theme === "dark" ? <IconSun /> : <IconMoon />}
                Toogle theme
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <Link href="/">
              <DropdownMenuItem>
                <LinkIcon />
                Home page
              </DropdownMenuItem>
            </Link>
            <Link href="/onboarding">
              <DropdownMenuItem>
                <ListCheckIcon />
                Onboarding
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleSignOut}>
              <IconLogout />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function NavUserSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="size-8 rounded-full" />
      <div className="space-y-1">
        <Skeleton className="h-3 w-[100px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
      <IconDotsVertical className="ml-auto size-4" />
    </div>
  );
}
