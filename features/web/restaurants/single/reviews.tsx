import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/config/data";

export default function RestaurantReviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 xl:px-6">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote>
            <p className="font-medium text-lg sm:text-xl md:text-3xl">
              Dining at this restaurant feels like discovering Kigali&apos;s
              hidden culinary treasure. It&apos;s the perfect harmony of
              authentic local flavors and modern creativity, delivering meals
              that are as comforting as they are unforgettable.
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <Avatar className="size-12">
                <AvatarImage
                  alt="Shekinah Tshiokufila"
                  height="48"
                  loading="lazy"
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  width="48"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>

              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">Shekinah Tshiokufila</cite>
                <span className="block text-muted-foreground text-sm">
                  Musanze - Rubavu
                </span>
              </div>
            </div>
          </blockquote>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {reviews.map((review) => (
            <Card key={review.id}>
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
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="font-medium text-sm">{review.name}</cite>
                      <span className="block text-muted-foreground text-sm">
                        {review.location}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
