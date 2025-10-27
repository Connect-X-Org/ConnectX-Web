import { Suspense } from "react";
import { TextLoop } from "@/components/custom/text-loop";
import FooterDate from "@/components/layout/footer-date";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";

export default function WaitingFooter() {
  return (
    <div className="container mt-12 flex w-full items-center justify-between gap-5">
      <TextLoop className="text-xs text-zinc-500 lg:min-w-[200px]" interval={3}>
        <Suspense>
          <FooterDate />
        </Suspense>
        <span className="text-balance text-muted-foreground text-sm leading-5">
          Built By{" "}
          <a href="https://www.rathon-rw.com/" rel="noopener" target="_blank">
            Rathon
          </a>
          .
        </span>
      </TextLoop>
      <ThemeSwitcher />
    </div>
  );
}
