import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { Cart } from "./cart";
import { CommandMenu } from "./command-menu";
import HeaderNavs from "./header-navs";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import SearchTop from "./search-top";
import SignInTop from "./sign-in-top";

export default function SiteHeader() {
  return (
    <div className="z-50 h-auto w-full">
      <header className="fixed top-0 z-50 flex h-auto w-full flex-col items-center justify-between border-muted/50 border-b shadow-xs lg:relative dark:bg-black">
        <div className="flex w-full items-center gap-x-10 px-4 pt-4 pb-4 xl:px-6">
          <MobileNav className="flex xl:hidden" />
          <Link
            className="relative hidden font-nunito font-semibold text-2xl capitalize tracking-tighter lg:text-4xl xl:flex"
            href={"/"}
          >
            {siteConfig.name}
          </Link>
          <MainNav className="hidden xl:hidden" />
          <SearchTop />

          <div className="ml-auto flex items-center gap-2">
            <CommandMenu className="hidden" />
            <Button className="rounded-full" variant={"ghost"}>
              <div className="flex items-center gap-2">
                <PlusIcon />
                <span className="hidden xl:block">Add your business</span>
              </div>
            </Button>
            <Cart />
            <SignInTop />
          </div>
        </div>
        <HeaderNavs />
      </header>
    </div>
  );
}
