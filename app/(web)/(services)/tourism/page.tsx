import type { Metadata } from "next";
import ServiceFilters from "@/features/web/_shared/service-filters";
import PlacesLanding from "@/features/web/tourism/landing";
export const metadata: Metadata = {
  title: "Places",
};
export default function TourismPage() {
  return (
    <main className="relative">
      <ServiceFilters type="tourism" />
      <PlacesLanding />
    </main>
  );
}
