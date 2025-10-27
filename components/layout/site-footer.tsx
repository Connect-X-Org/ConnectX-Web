import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { footerLinks } from "@/config/data";
import { TextLoop } from "../custom/text-loop";
import FooterDate from "./footer-date";
import SubscribeForm from "./subscribe-form";
import { ThemeSwitcher } from "./theme-switcher";

export default function SiteFooter() {
  return (
    <footer>
      <div className="h-full w-full border-t bg-background dark:bg-black">
        <div className="sm:px-6 lg:px-2">
          <div className="container flex flex-col items-center gap-2 py-8 pb-20 md:py-16 lg:py-20 xl:gap-4">
            <div className="grid w-full grid-cols-2 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-16">
              {footerLinks.map((link) => (
                <div
                  className="space-y-4 text-sm lg:col-span-2"
                  key={link.title}
                >
                  <span className="block font-medium">{link.title}</span>
                  <ul className="space-y-3">
                    {link.links.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          {...(item.external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                          className="group relative flex w-fit items-center gap-0.5 text-muted-foreground text-sm leading-5 duration-150 hover:text-primary"
                        >
                          {item.name}
                          {item.external && (
                            <ArrowUpRightIcon className="size-4" />
                          )}
                          <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="col-span-2 space-y-4 text-sm lg:col-span-3">
                <span className="block font-medium">
                  Subscribe to our newsletter
                </span>
                <div>
                  <p className="text-balance text-muted-foreground text-sm leading-5">
                    Stay updated on new releases and features, guides, and case
                    studies.
                  </p>
                </div>
                <SubscribeForm />
              </div>
            </div>
            <div className="mt-12 flex w-full items-center justify-between gap-5">
              <TextLoop
                className="text-xs text-zinc-500 lg:min-w-[200px]"
                interval={3}
              >
                <Suspense>
                  <FooterDate />
                </Suspense>
                <span className="text-balance text-muted-foreground text-sm leading-5">
                  Built By{" "}
                  <a
                    href="https://www.rathon-rw.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    Rathon
                  </a>
                  .
                </span>
              </TextLoop>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
