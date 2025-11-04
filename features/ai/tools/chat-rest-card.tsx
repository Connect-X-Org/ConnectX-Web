import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { TmockRestaurant } from "@/types";

export default function ChatRestaurantCard({
  restaurant,
  className,
}: {
  restaurant: TmockRestaurant;
  className?: string;
}) {
  return (
    <Link
      className={cn("group col-span-2 lg:col-span-1", className)}
      href={`/restaurants/${restaurant.slug}`}
      key={restaurant.id}
    >
      <div className="relative overflow-hidden rounded-sm">
        <AspectRatio className="bg-muted" ratio={16 / 9}>
          <Image
            alt={restaurant.title}
            className="h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
            fill
            src={restaurant.src}
          />
        </AspectRatio>
      </div>

      <div className="mt-1 flex flex-col gap-1">
        <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
          <span>{restaurant.title}</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Located at : {restaurant.place}
        </p>
      </div>
    </Link>
  );
}
