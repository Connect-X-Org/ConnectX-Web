"use client";
import { BedDoubleIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { CarouselDots } from "@/features/web/_shared/carousel-dots";
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
    <div className={cn("group col-span-2 lg:col-span-1", className)}>
      <div className="group relative overflow-hidden">
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {[house.src, ...house.otherImages].map((image) => (
              <CarouselItem className="bg-muted" key={image}>
                <Link href={`/housing/${house.slug}`}>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      alt={house.title}
                      className="h-full w-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={image}
                    />
                  </AspectRatio>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots under carousel */}
          <div className="-translate-x-1/2 absolute bottom-2 left-1/2">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
      <Link
        className="mt-2 flex flex-col gap-2"
        href={`/housing/${house.slug}`}
      >
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
      </Link>
    </div>
  );
}
