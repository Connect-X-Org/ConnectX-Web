import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ItemFilters from "@/features/web/_shared/item-filters";
import HousingLanding from "@/features/web/housing/landing";
export const metadata: Metadata = {
  title: "Housing",
};
export default function HousingPage() {
  return (
    <main className="relative">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="housing" />
      </Suspense>
      <HousingLanding />
    </main>
  );
}
