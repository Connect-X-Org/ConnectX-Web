import type { Metadata } from "next";
import EventsList from "@/features/web/tickets/events-list";
import HeroGrids from "@/features/web/tickets/hero-grids";
import SearchTicketsTop from "@/features/web/tickets/search-top";
export const metadata: Metadata = {
  title: "Tickets",
};
export default function TicketsPage() {
  return (
    <div>
      <SearchTicketsTop />
      <HeroGrids />
      <EventsList />
    </div>
  );
}
