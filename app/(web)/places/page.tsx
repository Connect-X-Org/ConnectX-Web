import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ItemFilters from "@/features/web/_shared/item-filters";
import PlacesLanding from "@/features/web/places/landing";
export const metadata: Metadata = {
  title: "Places",
};
export default function PlacesPage() {
  return (
    <main className="relative">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="places" />
      </Suspense>
      <PlacesLanding />
    </main>
  );
}
