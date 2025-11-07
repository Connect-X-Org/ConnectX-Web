import type { Metadata } from "next";
import ServiceFilters from "@/features/web/_shared/service-filters";
import EventsList from "@/features/web/tickets/events-list";
export const metadata: Metadata = {
  title: "Tickets",
};
export default function TicketsPage() {
  return (
    <div>
      <ServiceFilters type="tickets" />
      <EventsList />
    </div>
  );
}
