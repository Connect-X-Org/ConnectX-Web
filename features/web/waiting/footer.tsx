import { TextLoop } from "@/components/custom/text-loop";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { siteConfig } from "@/config/site";

export default function WaitingFooter() {
  return (
    <div className="container mt-12 flex w-full items-center justify-between gap-5">
      <TextLoop className="text-xs text-zinc-500 lg:min-w-[200px]" interval={3}>
        <p className="text-balance text-muted-foreground text-sm leading-5">
          © {new Date().getFullYear()} {siteConfig.name}.
        </p>
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
