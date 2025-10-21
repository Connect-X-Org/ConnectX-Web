import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/config/data";
export default function JobTestimonial() {
  return (
    <section className="flex flex-col gap-4 p-4 py-6">
      <h4 className="font-semibold text-xl">Employee benefit reviews</h4>
      <div>
        <Carousel
          className="flex flex-col gap-4"
          opts={{ loop: true, dragFree: true }}
        >
          <div className="relative flex w-full justify-between">
            <CarouselPrevious className="relative" />
            <CarouselNext className="relative" />
          </div>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem className="lg:basis-1/2" key={review.id}>
                <Card>
                  <CardContent className="h-full">
                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                      <p>{review.body}</p>

                      <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                        <Avatar className="size-12">
                          <AvatarImage
                            alt={review.name}
                            className="object-cover"
                            height="48"
                            loading="lazy"
                            src={review.image}
                            width="48"
                          />
                          <AvatarFallback>
                            {review.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <cite className="font-medium text-sm">
                            {review.name}
                          </cite>
                          <span className="block text-muted-foreground text-sm">
                            {review.location}
                          </span>
                        </div>
                      </div>
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
