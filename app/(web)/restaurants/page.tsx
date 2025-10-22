import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FilterCategories from "@/features/web/_shared/filter-categories";
import ItemFilters from "@/features/web/_shared/item-filters";
import RestaurantsLanding from "@/features/web/restaurants/landing";
export const metadata: Metadata = {
  title: "Restaurant",
};
export default function RestaurantsPage() {
  return (
    <main className="relative">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="restaurants" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterCategories itemType="restaurants" />
      </Suspense>
      <RestaurantsLanding />
    </main>
  );
}
