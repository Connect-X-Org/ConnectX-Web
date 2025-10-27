import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/config/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Company",
};
export default function CompanyPage() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {company.map((item) => {
          return (
            <div key={item.name}>
              {item.isComingSoon ? (
                <div
                  className={cn(
                    "group col-span-1 flex aspect-video min-h-[150px] w-full cursor-not-allowed items-center justify-center rounded-md bg-muted shadow-2xs transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white/90 dark:hover:text-black"
                  )}
                >
                  <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                    <item.icon className="size-5 group-hover:animate-bounce" />
                    <span className="font-medium text-lg">{item.name}</span>
                  </div>
                </div>
              ) : (
                <Link
                  className={cn(
                    "group col-span-1 flex aspect-video min-h-[150px] w-full items-center justify-center rounded-md bg-muted shadow-2xs transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white/90 dark:hover:text-black"
                  )}
                  href={item.href}
                  key={item.name}
                >
                  <div className="flex flex-col items-center justify-center gap-2 p-6 text-center">
                    <item.icon className="size-5 group-hover:animate-bounce" />
                    <span className="font-medium text-lg">{item.name}</span>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
