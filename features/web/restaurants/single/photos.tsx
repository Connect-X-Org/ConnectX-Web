import Image from "next/image";
import { restaurantPhotos } from "@/config/data";

export default function RestaurantPhotos() {
  return (
    <div className="mx-auto h-full w-full max-w-7xl overflow-auto px-4 py-16 xl:px-6">
      <div className="columns-1 gap-4 px-8 sm:columns-2 md:columns-3">
        {restaurantPhotos.map((imgSrc, index: number) => {
          return (
            <div className="mb-4" key={index}>
              <Image
                alt={`Image placeholder from cosmos.so, index:${index}`}
                className="size-full bg-muted object-contain"
                height={500}
                src={imgSrc}
                width={400}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
