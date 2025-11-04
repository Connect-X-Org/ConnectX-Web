import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { TmockRestaurant } from "@/types";
import ChatRestaurantCard from "./chat-rest-card";
export default function ChatRestCards({
  restaurants,
}: {
  restaurants: TmockRestaurant[];
}) {
  if (restaurants.length > 3) {
    return <ChatRestCardsCarousel restaurants={restaurants} />;
  }
  return (
    <div className="grid grid-cols-1 gap-4 place-self-start md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((r) => (
        <ChatRestaurantCard key={r.id} restaurant={r} />
      ))}
    </div>
  );
}

export function ChatRestCardsCarousel({
  restaurants,
}: {
  restaurants: TmockRestaurant[];
}) {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          dragFree: true,
        }}
      >
        <div className="flex items-center justify-end">
          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300">
              <ChevronLeft className="size-3" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300">
              <ChevronRight className="size-3" />
            </CarouselNext>
          </div>
        </div>
        <CarouselContent className="mt-2 cursor-grab active:cursor-grabbing">
          {restaurants.map((r) => (
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" key={r.id}>
              <ChatRestaurantCard restaurant={r} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
