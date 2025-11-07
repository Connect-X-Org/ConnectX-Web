import {
  ExternalLinkIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import type { RestaurantWithOverviewType } from "@/types";

type RestaurantOverviewProps = {
  restaurant: RestaurantWithOverviewType;
};
export default function RestaurantContact({
  restaurant,
}: RestaurantOverviewProps) {
  return (
    <div className="rounded-lg bg-background py-10">
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 md:flex-row md:justify-around">
        <div className="flex flex-col items-center gap-3 text-center">
          <MapPinIcon className="mt-1 size-8 text-muted-foreground" />
          <div>
            <p className="font-medium text-2xl">Address</p>
            <p className="text-lg text-muted-foreground">
              {restaurant.address}
            </p>
            <a
              className="flex h-auto items-center justify-center gap-1 p-0 text-blue-600"
              href="/"
            >
              View on Map
              <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <PhoneIcon className="size-8 text-muted-foreground" />
          <div>
            <p className="font-medium text-2xl">Phone</p>
            <p className="text-lg text-muted-foreground">{restaurant.phone}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <GlobeIcon className="size-8 text-muted-foreground" />
          <div>
            <p className="font-medium text-2xl">Website</p>
            <p className="text-lg text-muted-foreground">
              {restaurant.website}
            </p>
            <a
              className="flex h-auto items-center justify-center gap-1 p-0 text-blue-600"
              href="/"
            >
              Visit Website
              <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
