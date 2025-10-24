import {
  AirVentIcon,
  BriefcaseMedicalIcon,
  FireExtinguisherIcon,
  TheaterIcon,
  WifiIcon,
  WindIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const amenities = [
  {
    icon: WifiIcon,
    title: "Wifi",
  },
  {
    icon: FireExtinguisherIcon,
    title: "Fire Extinguisher",
  },
  {
    icon: TheaterIcon,
    title: "MovieTheater",
  },
  {
    icon: AirVentIcon,
    title: "Air Conditioner",
  },
  {
    icon: WindIcon,
    title: "Smoke Detector",
  },
  {
    icon: BriefcaseMedicalIcon,
    title: "First Aid Kit",
  },
];
export default function Amenities() {
  return (
    <section className="@container relative flex-1 py-10">
      <div className="!tracking-[1.8px] @lg:mb-5 mb-2 font-medium @lg:text-xs text-[10px] text-content-muted uppercase">
        COMMON AMENITIES
      </div>
      <div className="mb-3 flex flex-wrap items-center text-pretty font-medium @lg:text-4xl text-2xl">
        <div className="min-w-[50%] flex-1">Essentials for a great trip</div>
      </div>
      <p className="@lg:mb-14 mb-5 text-muted-foreground">
        At ConnectX, we've thought of every detail to create the travel
        experience we always wanted.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {amenities.map((amenity) => (
          <div
            className={cn(
              "grid h-[163px] rounded-xl border border-muted bg-muted p-6"
            )}
            key={amenity.title}
          >
            <div className="grid h-[60px] w-[60px] place-items-center rounded-lg bg-background">
              <amenity.icon />
            </div>
            <div className="flex items-center gap-2 capitalize">
              {amenity.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
