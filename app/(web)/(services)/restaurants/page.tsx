import type { Metadata } from "next";
import ServiceFilters from "@/features/web/_shared/service-filters";
import RestaurantsLanding from "@/features/web/restaurants/landing";
export const metadata: Metadata = {
  title: "Restaurant",
};
export default function RestaurantsPage() {
  return (
    <main className="@container relative">
      <ServiceFilters type="restaurants" />
      <RestaurantsLanding />
    </main>
  );
}
