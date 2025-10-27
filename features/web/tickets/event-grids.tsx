"use client";
import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { TEvent } from "@/types";
import { CarouselDots } from "../_shared/carousel-dots";

export default function EventsGrid({
  events,
  limit,
  className,
}: {
  events: TEvent[];
  limit?: number;
  className?: string;
}) {
  const slicedEvents = limit ? events.slice(0, limit) : events;
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-4 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {slicedEvents.map((event, i) => (
        <div className={cn("group col-span-2 lg:col-span-1")} key={i}>
          <div className="group relative overflow-hidden">
            <Carousel
              opts={{
                loop: true,
                dragFree: true,
              }}
            >
              <CarouselContent>
                {[event.src, ...event.otherImages].map((image, index) => (
                  <CarouselItem className="bg-muted" key={index}>
                    <Link href={`/housing/${event.slug}`}>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          alt={event.title}
                          className="h-full w-full object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          src={image}
                        />
                      </AspectRatio>
                    </Link>
                    <Button
                      className="absolute top-1 right-1 hidden group-hover:flex"
                      size="icon-sm"
                    >
                      <BookmarkIcon />
                    </Button>
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
          <Link
            className="mt-2 flex flex-col gap-2"
            href={`/housing/${event.slug}`}
          >
            <div className="flex flex-col gap-1">
              <p className="text-muted-foreground text-xs uppercase">
                {event.place.join(", ")}
              </p>
              <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
                <span className="font-medium text-xl">{event.title}</span>
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
              </div>
            </div>
            <div className="flex items-center gap-4 font-medium text-sm">
              <p>
                <span className="text-muted-foreground">From</span>{" "}
                <span className="font-medium">$40/person</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
