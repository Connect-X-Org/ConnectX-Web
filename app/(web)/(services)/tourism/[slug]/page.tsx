import { BookmarkIcon, ChevronLeftIcon } from "lucide-react";
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
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { housingReviews, places } from "@/config/data";
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
  const place = places.find((p) => p.slug === slug);
  if (!place) {
    return notFound();
  }
  return (
    <div className="container relative py-16 pt-10">
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-12 gap-4 xl:gap-10">
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
              {[place.src, ...place.otherImages].map((image) => (
                <CarouselItem className="rounded-lg bg-muted" key={image}>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      alt={place.title}
                      className="h-full w-full rounded-lg object-cover"
                      fill
                      src={image}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex min-h-screen max-w-3xl flex-col gap-2 2xl:max-w-5xl">
            <p className="text-muted-foreground text-sm uppercase">
              {place.place}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                {place.title}
              </h3>
              <p className="max-w-lg text-muted-foreground leading-7">
                {place.description}
              </p>
            </div>
            <VisitVideo thumbnailSrc={place.src} />
            <Amenities />
            <HouseLocation place={place.place} />
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
                  You pay at the end of your tour.{" "}
                  <span className="text-muted-foreground">From</span>{" "}
                  <span className="font-medium text-primary">$640/day</span>
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
              <CardFooter className="flex w-full flex-col gap-2">
                <p className="text-muted-foreground">
                  Best price on ConnectX always are guaranteed.
                </p>
                <div className="flex w-full items-center gap-2">
                  <Button
                    className="text-lg"
                    size={"icon-lg"}
                    variant={"outline"}
                  >
                    <BookmarkIcon />
                  </Button>
                  <Button className="flex-1 text-lg" size={"lg"}>
                    Select dates
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <CarouselTestimonials reviews={housingReviews} />
          </div>
        </div>
      </div>
      <CheckoutSmall />
    </div>
  );
}
