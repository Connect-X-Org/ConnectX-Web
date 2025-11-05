import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import type { TPlace } from "@/types";

export default function ChatPlaceCard({
  place,
  className,
}: {
  place: TPlace;
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
              alt={place.title}
              className="h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={place.src}
            />
          </AspectRatio>

          <div className="mt-1 flex flex-col gap-1">
            <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
              <span>{place.title}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Located at : {place.place}
            </p>
            <p>
              <span className="text-muted-foreground">From</span>{" "}
              <span className="font-medium">$640/day</span>
            </p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2">
        <SheetHeader className="pb-0">
          <SheetTitle>{place.title}</SheetTitle>
          <SheetDescription>Located at : {place.place}</SheetDescription>
        </SheetHeader>
        <div>
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              alt={place.title}
              className="h-full w-full object-cover"
              fill
              src={place.src}
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-2 px-2 py-4">
            <p className="text-muted-foreground text-sm">{place.description}</p>
            <Link
              className="text-blue-600 text-sm"
              href={`/tourism/${place.slug}`}
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
