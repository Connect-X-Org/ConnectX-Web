import Link from "next/link";
import { VideoHoverCard } from "@/components/custom/video-hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { TPlace } from "@/types";

export default function PlacesGrid({
  places,
  limit,
  className,
}: {
  places: TPlace[];
  limit?: number;
  className?: string;
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
            "col-span-2 lg:col-span-1",
            i === 0 && "lg:col-span-2",
            i === 1 && "lg:col-span-2"
          )}
          href={place.href}
          key={place.id}
        >
          <div className="relative overflow-hidden">
            <AspectRatio className="rounded-none bg-muted" ratio={16 / 9}>
              <VideoHoverCard className="rounded-none" src={place.src} />
            </AspectRatio>
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
          <div className="mt-3">
            <p className="line-clamp-3 text-[16px] text-primary/90 text-sm leading-7">
              {place.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
