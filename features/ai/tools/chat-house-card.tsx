"use client";
import { BedDoubleIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { amenities } from "@/config/data";
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
    <Sheet>
      <SheetTrigger asChild>
        <div className={cn(className)}>
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
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2">
        <SheetHeader className="pb-0">
          <SheetTitle>{house.title}</SheetTitle>
          <SheetDescription>Located at : {house.place}</SheetDescription>
        </SheetHeader>
        <div>
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              alt={house.title}
              className="h-full w-full object-cover"
              fill
              src={house.src}
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-2 px-2 py-4">
            <p className="line-clamp-4 text-muted-foreground text-sm">
              {house.description}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1 text-muted-foreground">
                <BedDoubleIcon className="size-4" />
                <span className="text-primary">5 </span>
                Bedrooms
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <UsersIcon className="size-4" />
                <span className="text-primary">14 </span>
                people
              </div>
            </div>
            <Link
              className="text-blue-600 text-sm"
              href={`/housing/${house.slug}`}
              target="_blank"
            >
              Learn more
            </Link>
            <p>AMENITIES</p>
            <ScrollArea className="w-full">
              <div className="flex gap-3 pb-2">
                {amenities.map((amenity) => (
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-xl bg-muted px-2 py-1"
                    )}
                    key={amenity.title}
                  >
                    <amenity.icon className="size-4 text-muted-foreground" />
                    <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap text-sm capitalize">
                      {amenity.title}
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <p className="font-medium text-xl">
              <span className="text-muted-foreground text-sm">Price:</span>{" "}
              <span> $640/day</span>
            </p>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Add to Cart</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
