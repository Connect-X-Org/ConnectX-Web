"use client";

import { IconMoon, IconSun, IconUserCircle } from "@tabler/icons-react";
import {
  BellDotIcon,
  BellIcon,
  LayoutPanelTopIcon,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
export default function SignInTop() {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const { theme, setTheme } = useTheme();
  function handleToggleTheme(event: React.MouseEvent<HTMLDivElement>) {
    // i do not want dropdropwn to close when i toggle theme
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    // Only run on client
    const signedIn = localStorage.getItem("isSignedIn") === "true";
    setIsSignedIn(signedIn);
  }, []);

  // While checking, don’t render anything to avoid flicker
  if (isSignedIn === null) return null;
  const handleLogout = () => {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
  };
  return (
    <div>
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Button className="rounded-full" size={"icon"} variant={"outline"}>
            <BellIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar className="size-9 rounded-full">
                <AvatarImage alt={"user"} src={"/profile.svg"} />
                <AvatarFallback className="rounded-full">CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-4 w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg dark:bg-black"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8 rounded-full">
                    <AvatarImage alt={"user"} src={"/profile.svg"} />
                    <AvatarFallback className="rounded-full">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">User name</span>
                    <span className="truncate text-muted-foreground text-xs">
                      email@example.com
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <IconUserCircle />
                  My profile
                </DropdownMenuItem>
                <Link href="/dashboard">
                  <DropdownMenuItem>
                    <LayoutPanelTopIcon />
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <BellDotIcon />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(event) => handleToggleTheme(event)}>
                  {theme === "dark" ? <IconSun /> : <IconMoon />}
                  Toogle theme
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button asChild className="rounded-full">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      )}
    </div>
  );
}
