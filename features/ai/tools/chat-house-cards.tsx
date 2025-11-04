import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { THouse } from "@/types";
import ChatHouseCard from "./chat-house-card";
export default function ChatHouseCards({ houses }: { houses: THouse[] }) {
  if (houses.length > 3) {
    return <ChatHouseCardsCarousel houses={houses} />;
  }
  return (
    <div className="grid w-full grid-cols-1 gap-4 place-self-start md:grid-cols-2 lg:grid-cols-3">
      {houses.map((h) => (
        <ChatHouseCard house={h} key={h.title} />
      ))}
    </div>
  );
}

export function ChatHouseCardsCarousel({ houses }: { houses: THouse[] }) {
  return (
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
      <CarouselContent className="mt-2 w-full cursor-grab active:cursor-grabbing">
        {houses.map((h) => (
          <CarouselItem
            className="pl-4 md:basis-1/2 lg:basis-1/3"
            key={h.title}
          >
            <ChatHouseCard house={h} key={h.title} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
