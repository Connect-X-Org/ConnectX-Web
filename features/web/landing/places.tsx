import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import { places } from "@/config/data";
import PlacesGrid from "../places/places-grid";

export default function Places() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-center font-semibold text-2xl capitalize">
            <Highlighter action="underline" color="#FF9800">
              Tourism
            </Highlighter>{" "}
          </h2>
          <Button asChild className="w-fit" size="lg" variant={"link"}>
            <Link href="/places">View more</Link>
          </Button>
        </div>

        <PlacesGrid limit={6} places={places} />
      </div>
    </section>
  );
}
