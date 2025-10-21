"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuSections } from "@/config/data";
import { cn } from "@/lib/utils";

export default function MainNav({ className }: React.ComponentProps<"nav">) {
  const pathname = usePathname();
  return (
    <NavigationMenu className={className} viewport={true}>
      <NavigationMenuList>
        {menuSections.map((section) => {
          return (
            <NavigationMenuItem key={section.label}>
              <NavigationMenuTrigger
                className="cursor-pointer text-lg dark:data-[state=open]:text-brand dark:hover:bg-transparent dark:hover:text-brand dark:data-[state=open]:hover:bg-transparent"
                iconClassName="size-5"
              >
                {section.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute top-0 left-0 w-full bg-muted/30 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <ul className="grid min-w-[60vw] max-w-[70vw] place-items-center items-center justify-center gap-3 lg:grid-cols-[1fr_1fr_1fr]">
                  {section.items.map((item) => {
                    const isActive =
                      pathname === item.href || pathname.includes(item.href);
                    return (
                      <Link
                        className={cn(
                          "group col-span-1 flex aspect-video min-h-[150px] w-full items-center justify-center rounded-md bg-background shadow-2xs transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black",
                          isActive &&
                            "bg-black text-white dark:bg-white dark:text-black"
                        )}
                        href={item.href}
                        key={item.name}
                      >
                        <div className="flex cursor-pointer flex-col items-center justify-center gap-2 p-6 text-center">
                          <item.icon className="size-5 group-hover:animate-bounce" />
                          <span className="font-medium text-lg">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="cursor-pointer text-lg dark:data-[state=open]:text-brand dark:hover:bg-transparent dark:hover:text-brand dark:data-[state=open]:hover:bg-transparent"
          >
            <Link href="/map">Map</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
