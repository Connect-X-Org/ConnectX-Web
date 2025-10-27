"use client";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselDots } from "../_shared/carousel-dots";

// Slides data
const slides = [
  {
    title: "Ready to explore Rwanda's top tourist spots?",
    video:
      "https://videos.pexels.com/video-files/2882117/2882117-uhd_2560_1440_24fps.mp4",
    buttonText: "Start Exploring",
  },
  {
    title: "What are you feeling like to eat today?",
    video:
      "https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4",
    buttonText: "View More Dishes",
  },
  {
    title: "Where do you want to stay today?",
    video:
      "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
    buttonText: "View More Places",
  },
  {
    title: "Looking for the best places to shop?",
    video:
      "https://videos.pexels.com/video-files/4121739/4121739-uhd_2560_1440_25fps.mp4",
    buttonText: "Explore Shops",
  },
];

// Dynamic description generator
function getDescription(title: string): string {
  const lower = title.toLowerCase();

  if (lower.includes("eat")) {
    return "Explore restaurants, cafes, and local dishes across Rwanda — find the perfect meal for every mood.";
  }
  if (lower.includes("stay")) {
    return "Discover hotels, lodges, and homestays designed for comfort and convenience during your stay in Rwanda.";
  }
  if (lower.includes("experience")) {
    return "From hiking volcanoes to immersing in culture, find unforgettable experiences throughout Rwanda.";
  }
  if (lower.includes("shop")) {
    return "Shop the best fashion, crafts, and local markets in Rwanda — discover unique items and great deals.";
  }
  if (lower.includes("tourist") || lower.includes("explore")) {
    return "Uncover Rwanda’s most beautiful destinations — from Kigali’s charm to the breathtaking landscapes of the north.";
  }

  return "Visiting Rwanda or making it home? We help make your journey easier — find trusted services and connect with communities.";
}

export default function HeroCarousel() {
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
                <video
                  autoPlay
                  className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover"
                  loop
                  muted
                  preload="auto"
                >
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 z-0 bg-black/40" />
                <div className="relative z-10 mt-auto flex flex-col gap-4 text-white">
                  <h1 className="font-semibold text-3xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-lg">{getDescription(slide.title)}</p>
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
