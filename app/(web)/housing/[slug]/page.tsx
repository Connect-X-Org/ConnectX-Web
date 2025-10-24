import {
  BathIcon,
  BedDoubleIcon,
  BedSingleIcon,
  ChevronLeftIcon,
  RulerDimensionLineIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { houses, restaurantReviews } from "@/config/data";
import { CarouselDots } from "@/features/web/_shared/carousel-dots";
import CarouselTestimonials from "@/features/web/_shared/testimonials";
import Amenities from "@/features/web/housing/amenities";
import { CheckoutSmall } from "@/features/web/housing/check-out-small";
import HouseLocation from "@/features/web/housing/location";
import VisitVideo from "@/features/web/housing/visit-video";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const house = houses.find((h) => h.slug === slug);
  if (!house) {
    return notFound();
  }
  return (
    <div className="relative py-16 pt-10">
      <div className="container relative grid min-h-screen grid-cols-12 gap-4 xl:gap-10">
        <div className="relative col-span-12 flex flex-col gap-4 md:col-span-8 2xl:col-span-9">
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
          >
            <Button
              asChild
              className="absolute top-1 left-1 z-10 w-fit hover:scale-105"
              size="sm"
              variant={"default"}
            >
              <Link className="group flex items-center gap-1" href="/housing">
                <ChevronLeftIcon className="group-hover:animate-pulse" />
                Back
              </Link>
            </Button>
            <CarouselContent>
              {[house.src, ...house.otherImages].map((image) => (
                <CarouselItem className="rounded-lg bg-muted" key={image}>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      alt={house.title}
                      className="h-full w-full rounded-lg object-cover"
                      fill
                      src={image}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Previous and Next buttons on center of the carousel */}
            <div className="absolute top-1/2 flex w-full justify-between">
              <CarouselPrevious className="absolute left-2" />
              <CarouselNext className="absolute right-2" />
            </div>
            {/* Dots under carousel */}
            <div className="-translate-x-1/2 absolute bottom-2 left-1/2">
              <CarouselDots />
            </div>
          </Carousel>

          <div className="flex min-h-screen max-w-3xl flex-col gap-2 2xl:max-w-5xl">
            <p className="text-muted-foreground text-sm uppercase">
              {house.place.join(", ")}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                {house.title}
              </h3>
              <p className="max-w-lg text-muted-foreground leading-7">
                {house.description}
              </p>
              <ScrollArea className="w-[90vw] whitespace-nowrap md:w-[50vw]">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="flex items-center gap-2">
                    <BedDoubleIcon className="size-4 text-muted-foreground" />
                    <span className="font-medium">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="size-4 text-muted-foreground" />
                    <span className="font-medium">14 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BathIcon className="size-4 text-muted-foreground" />
                    <span className="font-medium">3 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedSingleIcon className="size-4 text-muted-foreground" />
                    <span className="font-medium">5 Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RulerDimensionLineIcon className="size-4 text-muted-foreground" />
                    <span className="font-medium">1000 sqft</span>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <VisitVideo house={house} />
            <Amenities />
            <HouseLocation place={house.place} />
          </div>
        </div>
        <div className="sticky top-14 col-span-12 block h-fit md:col-span-4 2xl:col-span-3">
          <div className="flex flex-col gap-4">
            <Card className="hidden lg:flex">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">
                  Explore dates and pricing
                </CardTitle>
                <CardDescription>
                  You pay at the end of your stay.{" "}
                  <span className="text-muted-foreground">From</span>{" "}
                  <span className="font-medium text-primary">$640/night</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="flex w-full items-center gap-2">
                <Button className="flex-1" size={"lg"} variant={"outline"}>
                  Check-In
                </Button>
                <Button className="flex-1" size={"lg"} variant="outline">
                  Check-Out
                </Button>
              </CardContent>
              <Separator />
              <CardFooter className="flex w-full flex-col items-center gap-2">
                <p className="text-muted-foreground">
                  Best price on Connect always, guaranteed.
                </p>
                <Button className="w-full text-lg" size={"xl"}>
                  Select dates
                </Button>
              </CardFooter>
            </Card>
            <CarouselTestimonials reviews={restaurantReviews} />
          </div>
        </div>
      </div>
      <CheckoutSmall />
    </div>
  );
}
