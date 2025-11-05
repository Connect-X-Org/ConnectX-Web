import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menu } from "@/config/data";
import { cn } from "@/lib/utils";
import type { TmockRestaurant } from "@/types";
import { MenuItem } from "./single-restaurant";

export default function ChatRestaurantCard({
  restaurant,
  className,
}: {
  restaurant: TmockRestaurant;
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={cn(className)} key={restaurant.id}>
          <AspectRatio
            className="overflow-hidden rounded-sm bg-muted"
            ratio={16 / 9}
          >
            <Image
              alt={restaurant.title}
              className="aspect-video h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
              fill
              src={restaurant.src}
            />
          </AspectRatio>

          <div className="mt-1 flex flex-col gap-1">
            <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
              <span>{restaurant.title}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Located at : {restaurant.place}
            </p>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2">
        <SheetHeader className="pb-0">
          <SheetTitle>{restaurant.title}</SheetTitle>
          <SheetDescription>Located at : {restaurant.place}</SheetDescription>
        </SheetHeader>
        <div>
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              alt={restaurant.title}
              className="h-full w-full object-cover"
              fill
              src={restaurant.src}
            />
          </AspectRatio>
          <div className="flex w-full flex-col gap-2 px-2 py-4">
            <p className="line-clamp-4 text-muted-foreground text-sm">
              {restaurant.description}
            </p>

            <Link
              className="text-blue-600 text-sm"
              href={`/restaurants/${restaurant.slug}`}
              target="_blank"
            >
              Learn more
            </Link>

            <div className="space-y-3">
              <p className="text-primary/80 underline underline-offset-4">
                Menu
              </p>
              <div className="flex max-w-xl flex-col gap-2">
                {menu.food.map((f) => (
                  <MenuItem key={f.id} price={f.price} title={f.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button asChild>
            <Link
              className="text-blue-600 text-sm"
              href={`/restaurants/${restaurant.slug}`}
              target="_blank"
            >
              Visit Restuarant Page
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
