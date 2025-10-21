"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { ProgressiveBlur } from "@/components/custom/progressive-blur";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CarouselDots } from "../_shared/carousel-dots";

const images = [
  {
    src: "/images/tiq-1.avif",
    title: "Naming Ceremony",
    href: "/housing/hero-1",
    activities: 5,
  },
  {
    src: "/images/tiq-2.jpeg",
    title: "Kigali Arena",
    href: "/housing/hero-2",
    activities: 5,
  },
  {
    src: "/images/tiq-3.jpeg",
    title: "Kigali Convention Center",
    href: "/housing/hero-3",
    activities: 5,
  },
  {
    src: "/images/tiq-4.jpeg",
    title: "Zaria Court",
    href: "/housing/hero-4",
    activities: 5,
  },
];
export default function HeroGrids() {
  return (
    <section className="container py-10">
      <div className="group relative grid grid-cols-12 gap-6 overflow-hidden">
        <Carousel
          className="col-span-12 lg:col-span-7"
          opts={{
            loop: true,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem className="rounded-lg bg-muted" key={image.src}>
                <Link href={`/tickets/${image.href}`}>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      alt={image.title}
                      className="h-full w-full rounded-lg object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={image.src}
                    />
                  </AspectRatio>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Previous and Next buttons on center of the carousel */}
          <div className="absolute top-1/2 hidden w-full justify-between group-hover:flex">
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />
          </div>
          {/* Dots under carousel */}
          <div className="-translate-x-1/2 absolute bottom-2 left-1/2">
            <CarouselDots />
          </div>
        </Carousel>
        <div className="col-span-12 flex flex-col justify-between lg:col-span-5">
          <div className="grid grid-cols-2 gap-4 gap-y-8 overflow-hidden">
            {images.map((image) => (
              <div
                className="relative w-full cursor-pointer overflow-hidden rounded-lg bg-muted transition-all duration-300 ease-in hover:scale-105"
                key={image.src}
              >
                <AspectRatio
                  className="relative overflow-hidden rounded-lg"
                  ratio={4 / 3}
                >
                  <Image
                    alt={image.title}
                    className="h-full w-full rounded-lg object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={image.src}
                  />
                </AspectRatio>
                <ProgressiveBlur
                  blurIntensity={6}
                  className="pointer-events-none absolute right-0 bottom-0 left-0 h-[50%] w-full rounded-b-lg"
                />
                <div className="absolute bottom-0 left-0 rounded-b-lg">
                  <div className="flex flex-col items-start gap-0 px-5">
                    <p className="font-medium text-base text-white">
                      {image.title}
                    </p>
                    <span className="mb-2 text-base text-zinc-300">
                      {image.activities} Activities
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
