import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { TPlace } from "@/types";
import ChatPlaceCard from "./chat-place-card";
export default function ChatPlaceCards({ places }: { places: TPlace[] }) {
  if (places.length > 3) {
    return <ChatPlaceCardsCarousel places={places} />;
  }
  return (
    <div className="grid w-full grid-cols-1 justify-between gap-4 place-self-start md:grid-cols-2 lg:grid-cols-3">
      {places.map((p) => (
        <ChatPlaceCard key={p.id} place={p} />
      ))}
    </div>
  );
}

export function ChatPlaceCardsCarousel({ places }: { places: TPlace[] }) {
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
          {places.map((p) => (
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" key={p.id}>
              <ChatPlaceCard place={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
