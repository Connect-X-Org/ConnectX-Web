"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  housingCategories,
  restaurantCategories,
  tourismCategories,
} from "@/config/data";
import type { TCategory } from "@/types";
export default function FilterCategories({
  itemType,
}: {
  itemType: "housing" | "restaurants" | "tourism";
}) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "For you";
  let categories: TCategory[] = [];
  if (itemType === "housing") {
    categories = housingCategories;
  } else if (itemType === "restaurants") {
    categories = restaurantCategories;
  } else if (itemType === "tourism") {
    categories = tourismCategories;
  }
  return (
    <div className="sticky top-10 z-10 h-fit w-full bg-background dark:bg-black">
      <ScrollArea className="mx-auto mt-10 w-[95vw]">
        <div className="flex gap-2 pt-4 pb-2">
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
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
