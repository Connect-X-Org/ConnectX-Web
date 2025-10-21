import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { TRestaurant } from "@/types";

export default function RestaurantsGrid({
  restaurants,
  limit,
  className,
}: {
  restaurants: TRestaurant[];
  limit?: number;
  className?: string;
}) {
  const slicedRestaurants = limit ? restaurants.slice(0, limit) : restaurants;
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-4 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {slicedRestaurants.map((restaurant, i) => (
        <Link
          className={cn(
            "col-span-2 lg:col-span-1",
            i === 0 && "lg:col-span-2",
            i === 1 && "lg:col-span-2"
          )}
          href={`/restaurants/${restaurant.slug}`}
          key={restaurant.id}
        >
          <div className="relative overflow-hidden">
            <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
              <Image
                alt={restaurant.title}
                className="h-full w-full object-cover duration-300 ease-in hover:scale-105"
                fill
                src={restaurant.src}
              />
            </AspectRatio>
          </div>

          <div className="mt-1 flex flex-col gap-1">
            <p className="text-muted-foreground text-xs uppercase">
              {restaurant.place}
            </p>
            <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
              <span>{restaurant.title}</span>
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
            </div>
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
