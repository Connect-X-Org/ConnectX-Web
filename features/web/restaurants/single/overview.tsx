import {
  ExternalLinkIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  UtensilsIcon,
} from "lucide-react";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RestaurantWithOverviewType } from "@/types";
import HoursOfOperation from "./hours-of-operation";

type RestaurantOverviewProps = {
  restaurant: RestaurantWithOverviewType;
};

export default function RestaurantOverview({
  restaurant,
}: RestaurantOverviewProps) {
  return (
    <section className="mx-auto max-w-7xl space-y-8 bg-dashed px-4 py-10 xl:px-6">
      {/* Basic Info / Quick Facts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UtensilsIcon className="h-5 w-5" />
            Basic Info & Quick Facts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium text-muted-foreground text-sm">
                Cuisine Type
              </h4>
              <Badge className="text-sm" variant="secondary">
                {restaurant.cuisine}
              </Badge>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-muted-foreground text-sm">
                Price Range
              </h4>
              <div className="font-medium text-lg">{restaurant.priceRange}</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-muted-foreground text-sm">
                Popular For
              </h4>
              <div className="flex flex-wrap gap-1">
                {restaurant.popularFor.map((item, index) => (
                  <Badge className="text-xs" key={index} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-muted-foreground text-sm">
                Ambiance
              </h4>
              <Badge className="text-sm" variant="secondary">
                {restaurant.ambiance}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Highlights / Amenities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StarIcon className="h-5 w-5" />
            Key Highlights & Amenities
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {restaurant.amenities.map((amenity, index) => (
              <Badge
                className="cursor-pointer rounded-full text-[15px] tracking-tight transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                key={index}
                variant="secondary"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Hours of Operation */}
      <Suspense>
        <HoursOfOperation />
      </Suspense>

      {/* Contact & Location */}
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
              <p className="text-lg text-muted-foreground">
                {restaurant.phone}
              </p>
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
    </section>
  );
}
