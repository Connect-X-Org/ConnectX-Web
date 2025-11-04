import { Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "@/components/layout/cart";
import { menu, restaurantPhotos } from "@/config/data";
import type { TmockRestaurant } from "@/types";

export default function SingleRestaurant({
  restaurant,
}: {
  restaurant: TmockRestaurant;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-semibold text-lg">{restaurant.title}</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-primary/80 underline underline-offset-4">
            Overview
          </p>
          <Link
            className="text-primary/80 underline-offset-4 hover:underline"
            href={`/restaurants/${restaurant.slug}`}
            target="_blank"
          >
            See more
          </Link>
        </div>
        <div className="flex gap-4">
          {[restaurant.src, ...restaurantPhotos].slice(0, 4).map((p, i) => (
            <Link
              className="relative overflow-hidden rounded-sm"
              href={`/restaurants/${restaurant.slug}`}
              key={i}
              target="_blank"
            >
              <Image
                alt={restaurant.title}
                className="aspect-video h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
                height={300}
                src={p}
                width={500}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-primary/80 underline underline-offset-4">Menu</p>
        <div className="flex max-w-xl flex-col gap-2">
          {menu.food.map((f) => (
            <MenuItem key={f.id} price={f.price} title={f.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ title, price }: { title: string; price: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex cursor-pointer items-center gap-2 text-primary/90 hover:text-primary">
        <Utensils className="size-4 text-muted-foreground" />
        <p>{title}</p>
        <p className="font-semibold text-xl">${price}</p>
      </div>
      <Cart inChat />
    </div>
  );
}
