import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Cart } from "./cart";
import { CommandMenu } from "./command-menu";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import SearchTop from "./search-top";
import SignInTop from "./sign-in-top";

export default function SiteHeader() {
  return (
    <div className="dark z-50 h-14 w-full lg:h-auto">
      <header className="dark fixed top-0 z-50 flex h-14 w-full items-center justify-between border-muted/50 border-b bg-black text-white shadow-xs lg:relative lg:h-auto dark:bg-black">
        <div className="flex w-full items-center gap-x-10 px-4 pt-4 pb-4 xl:px-6">
          <MobileNav className="flex xl:hidden" />
          <Link
            className="relative hidden font-nunito font-semibold text-2xl capitalize tracking-tighter lg:text-4xl xl:flex"
            href={"/"}
          >
            {siteConfig.name}
          </Link>
          <MainNav className="hidden xl:flex" />
          <div className="ml-auto flex items-center gap-2">
            <CommandMenu className="hidden" />
            <SearchTop />
            <Cart />
            <SignInTop />
          </div>
        </div>
      </header>
    </div>
  );
}
