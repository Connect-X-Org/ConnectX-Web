import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
};
export default function ServicesPage() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => {
          return (
            <Link
              className={cn(
                "group col-span-1 flex aspect-video min-h-[150px] w-full items-center justify-center rounded-md bg-background shadow-2xs transition-all duration-300 ease-in-out hover:bg-white/90 hover:text-black"
              )}
              href={item.href}
              key={item.name}
            >
              <div className="flex cursor-pointer flex-col items-center justify-center gap-2 p-6 text-center">
                <item.icon className="size-5 group-hover:animate-bounce" />
                <span className="font-medium text-lg">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
