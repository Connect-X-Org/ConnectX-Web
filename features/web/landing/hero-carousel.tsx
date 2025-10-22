import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselDots } from "../_shared/carousel-dots";
export default function HeroCarousel() {
  return (
    <div className="container overflow-hidden py-6">
      <Carousel
        opts={{
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="overflow-x-hidden rounded-2xl">
            <div className="relative flex h-[400px] overflow-hidden rounded-2xl bg-muted/80 p-6">
              <video
                autoPlay
                className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover"
                loop
                muted
                preload="auto"
              >
                <source
                  src="https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 z-0 bg-black/40" />
              <div className="relative z-10 mt-auto flex flex-col gap-4">
                <h1 className="font-semibold text-3xl lg:text-5xl">
                  What are you feeling like to eat today?
                </h1>
                <p className="max-w-lg">
                  Visiting Rwanda or making it home? We help make your journey
                  easier. Find trusted services and connect with communities
                </p>
                <Button className="w-fit rounded-full">View More Dishes</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="overflow-x-hidden rounded-2xl">
            <div className="relative flex h-[400px] overflow-hidden rounded-2xl bg-muted/80 p-6">
              <video
                autoPlay
                className="absolute inset-0 z-0 h-full w-full rounded-2xl object-cover"
                loop
                muted
                preload="auto"
              >
                <source
                  src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 z-0 bg-black/40" />
              <div className="relative z-10 mt-auto flex flex-col gap-4">
                <h1 className="font-semibold text-3xl lg:text-5xl">
                  Where do you want to stay today?
                </h1>
                <p className="max-w-lg">
                  Visiting Rwanda or making it home? We help make your journey
                  easier. Find trusted services and connect with communities
                </p>
                <Button className="w-fit rounded-full">View More places</Button>
              </div>
            </div>
          </CarouselItem>
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
