import { restaurants } from "@/config/data";
import RestaurantsGrid from "./restaurants-grid";

export default function RestaurantsLanding() {
  return (
    <section className="container pb-16 lg:py-20 lg:pt-0">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <RestaurantsGrid restaurants={restaurants} />
      </div>
    </section>
  );
}
