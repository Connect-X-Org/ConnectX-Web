import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FilterCategories from "@/features/web/_shared/filter-categories";
import ItemFilters from "@/features/web/_shared/item-filters";
import PlacesLanding from "@/features/web/tourism/landing";
export const metadata: Metadata = {
  title: "Places",
};
export default function TourismPage() {
  return (
    <main className="relative">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="places" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterCategories itemType="tourism" />
      </Suspense>
      <PlacesLanding />
    </main>
  );
}
