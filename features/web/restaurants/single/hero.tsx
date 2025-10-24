import { StarIcon } from "lucide-react";
import Image from "next/image";
import type { TRestaurant } from "@/types";

export default function RestaurantHero({
  restaurant,
}: {
  restaurant: TRestaurant;
}) {
  return (
    <section className="group relative z-0 aspect-video h-[calc(90vh-69px)] w-full overflow-hidden md:h-[calc(90vh-89px)]">
      <Image
        alt={restaurant.title}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        className="z-0 m-0 w-full object-cover"
        fill
        placeholder="blur"
        src={restaurant.src}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      {/* overlay */}
      <div className="relative z-10 mx-auto flex h-[calc(90vh-69px)] max-w-7xl flex-col justify-center p-1 backdrop-blur-xs sm:p-2 md:h-[calc(90vh-89px)]">
        <div className="px-4">
          <div className="mt-10 flex max-w-2xl flex-col gap-2">
            <h1 className="font-semibold text-2xl text-white uppercase leading-tight tracking-tight lg:text-4xl xl:text-5xl">
              {restaurant.title}
            </h1>
            <p
              className="text-lg text-white leading-7"
              title={restaurant.description}
            >
              {restaurant.description}
            </p>
            {/* stars rating array */}
            <div className="mt-4 flex items-center gap-2">
              <StarsRating rating={restaurant.rating} />
              <p className="text-sm text-white">{restaurant.reviews} reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarsRating({ rating }: { rating: number }) {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, i) => (
        <StarIcon
          className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
          fill={i < rating ? "currentColor" : "none"}
          key={i}
        />
      ))}
    </div>
  );
}
