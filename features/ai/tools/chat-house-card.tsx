"use client";
import { BedDoubleIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { THouse } from "@/types";

export default function ChatHouseCard({
  house,
  className,
}: {
  house: THouse;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "group col-span-2 transition-all duration-300 ease-in hover:scale-105 lg:col-span-1",
        className
      )}
      href={`/housing/${house.slug}`}
      target="_blank"
    >
      <AspectRatio
        className="overflow-hidden rounded-sm bg-muted"
        ratio={16 / 9}
      >
        <Image
          alt={house.title}
          className="h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={house.src}
        />
      </AspectRatio>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-xs uppercase">
            {house.place.join(", ")}
          </p>
          <div className="relative w-fit">
            <span className="line-clamp-1 font-medium text-xl tracking-tight">
              {house.title}
            </span>
          </div>
        </div>
        <div className="mt-auto flex items-center gap-4 font-medium text-sm">
          <p>
            <span className="text-muted-foreground">From</span>{" "}
            <span className="font-medium">$640/night</span>
          </p>
          <Separator
            className="border-r after:border-r-muted-foreground"
            orientation="vertical"
          />
          <div className="flex items-center gap-1">
            <BedDoubleIcon className="size-4 text-muted-foreground" />
            <span>5</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon className="size-4 text-muted-foreground" />
            <span>14</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
