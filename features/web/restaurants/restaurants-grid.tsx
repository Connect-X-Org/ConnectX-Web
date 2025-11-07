import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TRestaurant } from "@/types";

export default function RestaurantsGrid({
  restaurants,
  limit,
  className,
  onHomepage = true,
}: {
  restaurants: TRestaurant[];
  limit?: number;
  className?: string;
  onHomepage?: boolean;
}) {
  const slicedRestaurants = limit ? restaurants.slice(0, limit) : restaurants;
  return (
    <div
      className={cn(
        "relative grid w-full @3xl:grid-cols-3 @5xl:grid-cols-4 @md:grid-cols-2 grid-cols-1 gap-y-6 text-left",
        className
      )}
    >
      {slicedRestaurants.map((restaurant, i) => (
        <Link
          className={cn(
            "group col-span-2 rounded-lg p-4 transition-all duration-300 ease-in hover:bg-muted lg:col-span-1",
            i === 0 && onHomepage && "lg:col-span-2",
            i === 1 && onHomepage && "lg:col-span-2"
          )}
          href={`/restaurants/${restaurant.slug}`}
          key={restaurant.id}
        >
          <div className="relative overflow-hidden rounded-lg">
            <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
              <Image
                alt={restaurant.title}
                className="h-full w-full rounded-lg object-cover duration-300 ease-in hover:scale-105"
                fill
                src={restaurant.src}
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
              {restaurant.place}
            </p>
            <p className="line-clamp-1 w-fit text-lg tracking-tight">
              {restaurant.title}
            </p>
          </div>
          <div className="mt-3">
            <p
              className="line-clamp-2 text-[16px] text-primary/90 text-sm leading-7"
              title={restaurant.description}
            >
              {restaurant.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
