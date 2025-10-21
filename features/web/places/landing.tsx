import { places } from "@/config/data";
import PlacesGrid from "./places-grid";

export default function PlacesLanding() {
  return (
    <section className="container pb-16 lg:py-20 lg:pt-0">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <PlacesGrid places={places} />
      </div>
    </section>
  );
}
