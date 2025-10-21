"use client";
import { houses } from "@/config/data";
import HousesGrid from "./houses-grid";

export default function HousingLanding() {
  return (
    <section className="container pb-16 lg:py-20 lg:pt-0">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <HousesGrid houses={houses} />
      </div>
    </section>
  );
}
