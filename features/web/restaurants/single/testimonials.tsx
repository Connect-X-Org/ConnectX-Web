import { Highlighter } from "@/components/ui/highlighter";
import RestaurantReviews from "./reviews";

export default function RestaurantTestimonials() {
  return (
    <section className="container py-16">
      <h2 className="font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
        <Highlighter action="underline" color="#FF9800">
          Our Visitors
        </Highlighter>
      </h2>
      <RestaurantReviews />
    </section>
  );
}
