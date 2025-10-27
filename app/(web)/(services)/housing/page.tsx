import type { Metadata } from "next";
import ServiceFilters from "@/features/web/_shared/service-filters";
import HousingLanding from "@/features/web/housing/landing";
export const metadata: Metadata = {
  title: "Housing",
};
export default function HousingPage() {
  return (
    <main className="relative">
      <ServiceFilters type="housing" />
      <HousingLanding />
    </main>
  );
}
