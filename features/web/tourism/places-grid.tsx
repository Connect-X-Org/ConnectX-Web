import { BookmarkIcon, StarIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { TPlace } from "@/types";

export default function PlacesGrid({
  places,
  limit,
  className,
  onHomepage = true,
}: {
  places: TPlace[];
  limit?: number;
  className?: string;
  onHomepage?: boolean;
}) {
  const slicedPlaces = limit ? places.slice(0, limit) : places;
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-4 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {slicedPlaces.map((place, i) => (
        <Link
          className={cn(
            "group col-span-2 lg:col-span-1",
            i === 0 && onHomepage && "lg:col-span-2",
            i === 1 && onHomepage && "lg:col-span-2"
          )}
          href={`/tourism/${place.slug}`}
          key={place.id}
        >
          <div className="relative overflow-hidden">
            <AspectRatio className="rounded-none bg-muted" ratio={16 / 9}>
              <Image
                alt={place.title}
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={place.src}
              />
            </AspectRatio>
            <Button
              className="absolute top-1 right-1 hidden group-hover:flex"
              size="icon-sm"
            >
              <BookmarkIcon />
            </Button>
          </div>

          <div className="mt-1 flex flex-col gap-1">
            <p className="text-muted-foreground text-xs uppercase">
              {place.place}
            </p>

            <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
              <span>{place.title}</span>
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
            </div>
          </div>
          <div className="mt-2">
            <p className="line-clamp-2 text-[16px] text-primary/90 text-sm leading-6">
              {place.description}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-4 font-medium text-sm">
            <p>
              <span className="text-muted-foreground">From</span>{" "}
              <span className="font-medium">$640/day</span>
            </p>
            <Separator
              className="border-r after:border-r-muted-foreground"
              orientation="vertical"
            />
            <div className="flex items-center gap-1">
              <StarIcon className="size-4 text-muted-foreground" />
              <span>5</span>
            </div>
            <div className="flex items-center gap-1">
              <UsersIcon className="size-4 text-muted-foreground" />
              <span>540 Reviews</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
