import { Utensils } from "lucide-react";
import Image from "next/image";
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
        <p className="text-primary/80 underline underline-offset-4">Overview</p>
        <div className="flex gap-4">
          {[restaurant.src, ...restaurantPhotos].slice(0, 4).map((p, i) => (
            <div className="relative overflow-hidden rounded-sm" key={i}>
              <Image
                alt={restaurant.title}
                className="aspect-video h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
                height={300}
                src={p}
                width={500}
              />
            </div>
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
