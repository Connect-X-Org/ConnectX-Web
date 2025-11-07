"use client";
import Image from "next/image";
import { useState } from "react";
import { Cart } from "@/components/layout/cart";
import type { Food } from "@/types";
import MenuDetails from "./menu-details-sheet";

export default function MenuFood({ food }: { food: Food }) {
  // state for mobile when i click on imgae open menu details sheet
  const [isMobileMenuDetailsOpen, setIsMobileMenuDetailsOpen] = useState(false);
  return (
    <>
      <div key={food.id}>
        <div className="flex items-center justify-between rounded-2xl transition-all duration-200 md:p-2 md:px-4">
          <div className="flex items-center gap-2">
            <button
              className="relative size-20 overflow-hidden rounded-sm bg-muted md:size-28"
              onClick={() => setIsMobileMenuDetailsOpen(true)}
              type="button"
            >
              <Image
                alt={food.title}
                className="h-full w-full object-cover"
                fill
                src={food.image}
              />
            </button>
            <div className="flex max-w-sm flex-col gap-1">
              <h3 className="font-medium text-lg">{food.title}</h3>
              <p className="hidden text-muted-foreground text-sm md:block">
                {food.description}
              </p>

              <div className="flex items-center gap-2">
                <p className="font-medium text-lg md:hidden lg:text-xl">
                  ${food.price}
                </p>
                <MenuDetails food={food} />
                <Cart isAddToCart />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-lg lg:text-xl">${food.price}</p>
          </div>
        </div>
      </div>

      <MenuDetails
        food={food}
        isForMobile
        isMobileMenuDetailsOpen={isMobileMenuDetailsOpen}
        setIsMobileMenuDetailsOpen={setIsMobileMenuDetailsOpen}
      />
    </>
  );
}
