"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  housingCategories,
  placeCategories,
  restaurantCategories,
} from "@/config/data";
import type { TCategory } from "@/types";
export default function FilterCategories({ itemType }: { itemType: string }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "For you";
  let categories: TCategory[] = [];
  if (itemType === "housing") {
    categories = housingCategories;
  } else if (itemType === "restaurants") {
    categories = restaurantCategories;
  } else if (itemType === "places") {
    categories = placeCategories;
  }
  return (
    <div className="sticky top-10 z-10 h-fit w-full bg-background dark:bg-black">
      <ScrollArea className="mt-10 w-[95vw]">
        <div className="container flex gap-2 py-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.label;
            return (
              <Button
                asChild
                key={category.label}
                size={"sm"}
                variant={isActive ? "default" : "secondary"}
              >
                <Link href={`/${itemType}?category=${category.label}`}>
                  {category.icon && <category.icon size={16} />}
                  {category.label}
                </Link>
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
