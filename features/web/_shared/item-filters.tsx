"use client";

import { ArrowRight, FilterIcon, SearchIcon } from "lucide-react";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ItemFilters({ itemType }: { itemType: string }) {
  const isSmallDevice = useIsMobile();

  return (
    <div className="container flex w-full items-center justify-between gap-4 pt-6 pb-2">
      <Form
        action={`/${itemType}`}
        className="relative w-full max-w-1/2 2xl:max-w-3xl dark:bg-black"
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
  );
}
