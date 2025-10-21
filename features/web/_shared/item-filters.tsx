"use client";

import { ArrowRight, FilterIcon, SearchIcon } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  housingCategories,
  placeCategories,
  restaurantCategories,
} from "@/config/data";
import { useIsMobile } from "@/hooks/use-mobile";
import type { TCategory } from "@/types";

export default function ItemFilters({ itemType }: { itemType: string }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "For you";
  const isSmallDevice = useIsMobile();
  let categories: TCategory[] = [];
  if (itemType === "housing") {
    categories = housingCategories;
  } else if (itemType === "restaurants") {
    categories = restaurantCategories;
  } else if (itemType === "places") {
    categories = placeCategories;
  }

  return (
    <section className="container top-0 z-10 bg-background py-8 lg:sticky">
      <div className="flex w-full items-center justify-between gap-4">
        <Form
          action={`/${itemType}`}
          className="relative w-full max-w-xl 2xl:max-w-3xl dark:bg-black"
        >
          <Input
            className="peer min-h-10 pe-9 md:min-h-10 md:ps-9"
            name="search"
            placeholder={`Search ${itemType} by name , location, etc...`}
            type="search"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 hidden items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50 md:flex">
            <SearchIcon size={16} />
          </div>
          <Button
            aria-label="Submit search"
            className="absolute inset-y-0 end-0 min-h-10 rounded-e-md rounded-l-none md:min-h-10"
            size={isSmallDevice ? "icon" : "lg"}
            type="submit"
          >
            <span className="hidden md:block">Search</span>
            <span className="block md:hidden">
              <ArrowRight size={16} />
            </span>
          </Button>
        </Form>
        <Button size={"lg"}>
          <FilterIcon size={16} />
          Filter
        </Button>
      </div>
      <ScrollArea className="mt-10 w-[95vw]">
        <div className="flex gap-2 pb-4">
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
    </section>
  );
}
