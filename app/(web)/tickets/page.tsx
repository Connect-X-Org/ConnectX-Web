import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FilterCategories from "@/features/web/_shared/filter-categories";
import ItemFilters from "@/features/web/_shared/item-filters";
import EventsList from "@/features/web/tickets/events-list";
import HeroGrids from "@/features/web/tickets/hero-grids";
export const metadata: Metadata = {
  title: "Tickets",
};
export default function TicketsPage() {
  return (
    <div>
      {/* <SearchTicketsTop /> */}
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="tickets" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterCategories itemType="tickets" />
      </Suspense>
      <HeroGrids />
      <EventsList />
    </div>
  );
}
