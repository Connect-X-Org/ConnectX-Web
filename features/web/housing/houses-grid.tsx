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
import { cn } from "@/lib/utils";
import type { THouse } from "@/types";
import { CarouselDots } from "../_shared/carousel-dots";

export default function HousesGrid({
  houses,
  limit,
  className,
}: {
  houses: THouse[];
  limit?: number;
  className?: string;
}) {
  const slicedHouses = limit ? houses.slice(0, limit) : houses;
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-4 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {slicedHouses.map((house, i) => (
        <div
          className={cn(
            "col-span-2 lg:col-span-1",
            i === 0 && "lg:col-span-2",
            i === 1 && "lg:col-span-2"
          )}
          key={i}
        >
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
              {/* Previous and Next buttons on center of the carousel */}
              <div className="absolute top-1/2 hidden w-full justify-between group-hover:flex">
                <CarouselPrevious className="absolute left-2" />
                <CarouselNext className="absolute right-2" />
              </div>
              {/* Dots under carousel */}
              <div className="-translate-x-1/2 absolute bottom-2 left-1/2">
                <CarouselDots />
              </div>
            </Carousel>
          </div>
          <Link href={`/housing/${house.slug}`}>
            <div className="mt-2 flex flex-col gap-1">
              <p className="text-muted-foreground text-xs uppercase">
                {house.place.join(", ")}
              </p>
              <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
                <span className="font-medium text-xl">{house.title}</span>
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4 font-medium text-sm">
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
      ))}
    </div>
  );
}
