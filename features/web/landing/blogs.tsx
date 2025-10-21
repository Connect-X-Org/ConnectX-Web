import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import TheLink from "@/components/custom/the-link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Highlighter } from "@/components/ui/highlighter";
import { blogs } from "@/config/data";

export default function Blogs() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
            Explore{" "}
            <Highlighter action="underline" color="#FF9800">
              Rwanda&apos;s Beauty
            </Highlighter>{" "}
            and Beyond
          </h2>
          <p className="text-primary/85 text-xl leading-7">
            Journey through Rwanda&apos;s national parks, cultural treasures,
            and hidden corners stories and experiences that inspire every
            traveler to connect deeply with the Land of a Thousand Hills.
          </p>
        </div>
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
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="relative inset-0 h-8 w-8 translate-x-0 translate-y-0 text-gray-700 dark:bg-none dark:text-gray-300">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent className="mt-5 cursor-grab active:cursor-grabbing">
            {blogs.map((blog) => (
              <CarouselItem
                className="pl-4 md:basis-1/2 lg:basis-1/3"
                key={blog.id}
              >
                <div key={blog.id}>
                  <div className="relative overflow-hidden">
                    <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
                      <Image
                        alt={blog.title}
                        className="h-full w-full object-cover duration-300 ease-in hover:scale-105"
                        fill
                        src={blog.src}
                      />
                    </AspectRatio>
                  </div>

                  <div className="mt-1 flex flex-col gap-1">
                    <p className="text-muted-foreground text-xs uppercase">
                      {blog.category}
                    </p>
                    <TheLink
                      className="line-clamp-1 text-lg tracking-tight"
                      href={blog.href}
                    >
                      {blog.title}
                    </TheLink>
                  </div>
                  <div className="mt-3">
                    <p className="line-clamp-3 text-[16px] text-primary/90 text-sm leading-7">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
