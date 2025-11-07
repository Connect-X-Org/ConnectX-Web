import { events } from "@/config/data";
import EventsGrid from "./event-grids";

export default function EventsList() {
  return (
    <section className="container pb-16 lg:py-20 lg:pt-6">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <EventsGrid events={events} />
      </div>
    </section>
  );
}
