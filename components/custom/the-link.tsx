import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TheLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  props?: React.ComponentProps<"a">;
}) {
  return (
    <Link
      className={cn("group relative flex w-fit", className)}
      href={href}
      {...props}
    >
      {children}
      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
    </Link>
  );
}
