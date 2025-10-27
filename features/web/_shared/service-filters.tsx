import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Tservices } from "@/types";
import FilterCategories from "./filter-categories";
import ItemFilters from "./item-filters";

export default function ServiceFilters({ type }: { type: Tservices }) {
  return (
    <div className="sticky top-0 z-10 h-fit bg-background dark:bg-black">
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <ItemFilters itemType={type} />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <FilterCategories itemType={type} />
      </Suspense>
    </div>
  );
}
