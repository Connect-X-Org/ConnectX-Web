import type { Metadata } from "next";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import FilterCategories from "@/features/web/_shared/filter-categories";
import ItemFilters from "@/features/web/_shared/item-filters";
import JobsLanding from "@/features/web/jobs/landing";
export const metadata: Metadata = {
  title: "Jobs",
};
export default function JobsPage() {
  return (
    <main className="relative">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType="jobs" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterCategories itemType="jobs" />
      </Suspense>
      <JobsLanding />
    </main>
  );
}
