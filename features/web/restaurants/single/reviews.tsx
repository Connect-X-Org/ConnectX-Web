import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { restaurantReviews } from "@/config/data";

export default function RestaurantReviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 xl:px-6">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {restaurantReviews.map((review) => (
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
