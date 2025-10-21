import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { restaurants } from "@/config/data";
import RestaurantsGrid from "../restaurants/restaurants-grid";

export default function Restaurants() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-center font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
            Explore{" "}
            <Highlighter action="underline" color="#FF9800">
              Different restaurants
            </Highlighter>{" "}
            in Rwanda
          </h2>
          <p className="text-primary/85 text-xl leading-7">
            From the rolling thousand hills to vibrant cultural landmarks,
            explore breathtaking destinations that make Rwanda unforgettable.
          </p>
        </div>
        <RestaurantsGrid limit={6} restaurants={restaurants} />
        <Button asChild className="w-fit" size="lg">
          <Link href="/restaurants">View All</Link>
        </Button>
      </div>
    </section>
  );
}
