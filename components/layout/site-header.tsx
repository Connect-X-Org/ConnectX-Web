import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import AiTopSheet from "@/features/ai/ai-top-sheet";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
// import { Cart } from "./cart";
import { CommandMenu } from "./command-menu";
import HeaderNavs, { ServicesHeaderNavs } from "./header-navs";
import MobileNav from "./mobile-nav";
import SearchTop from "./search-top";
import SignInTop from "./sign-in-top";

export default function SiteHeader({
  isRootHeader = true,
}: {
  isRootHeader?: boolean;
}) {
  return (
    <>
      <header className="relative top-0 z-10 flex h-auto w-full flex-col items-center justify-between lg:relative dark:bg-black">
        <div
          className={cn(
            "container flex w-full items-center gap-x-10 pt-4 pb-4",
            !isRootHeader && "border-muted border-b"
          )}
        >
          <MobileNav className="flex xl:hidden" />
          <Link
            className="relative hidden font-nunito font-semibold text-2xl capitalize tracking-tighter lg:text-4xl xl:flex"
            href={"/"}
          >
            {siteConfig.name}
          </Link>
          {isRootHeader ? <SearchTop /> : <ServicesHeaderNavs />}

          <div className="ml-auto flex items-center gap-2">
            <CommandMenu className="hidden" />
            <AiTopSheet />
            <Button className="hidden rounded-full lg:flex" variant={"ghost"}>
              <div className="flex items-center gap-2">
                <PlusIcon />
                <span>Add your business</span>
              </div>
            </Button>
            <Button
              className="rounded-full lg:hidden"
              size={"icon-sm"}
              variant={"secondary"}
            >
              <PlusIcon />
            </Button>
            {/* <Cart /> */}
            <SignInTop />
          </div>
        </div>
      </header>
      {isRootHeader ? <HeaderNavs /> : null}
    </>
  );
}
