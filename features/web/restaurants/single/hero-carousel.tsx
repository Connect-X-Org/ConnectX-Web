"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { RestaurantWithOverviewType } from "@/types";
import { CarouselDots } from "../../_shared/carousel-dots";

type RestaurantOverviewProps = {
  restaurant: RestaurantWithOverviewType;
};
export default function RestaurantHeroCarousel({
  restaurant,
}: RestaurantOverviewProps) {
  const slides = [
    {
      title: restaurant.title,
      body: restaurant.description,
      url: "/restaurant/image-1.avif",
      buttonText: "Order Food",
    },
    {
      title: "What are you feeling like to eat today?",
      body: "Browse our menu to find delicious meals prepared with fresh ingredients and authentic flavors.",
      url: "/restaurant/image-2.avif",
      buttonText: "View Menu",
    },
    {
      title: "Where do you want to stay today?",
      body: "Reserve your favorite spot and enjoy a comfortable dining experience with your friends or family.",
      url: "/restaurant/image-3.avif",
      buttonText: "Book Table",
    },
    {
      title: "Looking for the best places to shop?",
      body: "Get in touch with us for reservations, special orders, or catering inquiries — we're happy to help.",
      url: "/restaurant/image-4.avif",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="container overflow-hidden py-6">
      <Carousel
        opts={{
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className="overflow-x-hidden rounded-2xl" key={index}>
              <div className="relative flex h-[400px] overflow-hidden rounded-2xl bg-muted/80 p-6 2xl:h-[500px]">
                <Image
                  alt={slide.title}
                  className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover"
                  fill
                  src={slide.url}
                />

                <div className="absolute inset-0 z-0 bg-black/40" />
                <div className="relative z-10 mt-auto flex flex-col gap-4 text-white">
                  <h1 className="font-semibold text-3xl lg:text-5xl">
                    {restaurant.title}
                  </h1>
                  <p className="max-w-xl">{slide.body}</p>
                  <Button className="w-fit rounded-full">
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="relative mt-4 flex items-center justify-between">
          <CarouselPrevious className="absolute left-2" />
          <div className="w-full items-center justify-center">
            <CarouselDots />
          </div>
          <CarouselNext className="absolute right-2" />
        </div>
      </Carousel>
    </div>
  );
}
