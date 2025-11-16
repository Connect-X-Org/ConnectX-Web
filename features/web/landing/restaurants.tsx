import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { restaurants } from "@/config/data";
import RestaurantsGrid from "../restaurants/restaurants-grid";

export default function Restaurants() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="@container relative flex flex-col gap-6 lg:gap-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-center font-semibold text-2xl capitalize">
            <Highlighter action="underline" color="#FF9800">
              Restaurants
            </Highlighter>{" "}
          </h2>
          <Button asChild className="w-fit" size="lg" variant={"link"}>
            <Link href="/restaurants">View all restaurants</Link>
          </Button>
        </div>
        <RestaurantsGrid limit={6} restaurants={restaurants} />
        <Button asChild className="w-fit">
          <Link href="/restaurants">See more restaurants</Link>
        </Button>
      </div>
    </section>
  );
}
