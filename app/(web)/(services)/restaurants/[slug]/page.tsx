import { notFound } from "next/navigation";
import { restaurants } from "@/config/data";
import RestaurantTabs from "@/features/web/restaurants/single/restaurant-tabs";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);
  if (!restaurant) {
    return notFound();
  }
  return <RestaurantTabs restaurant={restaurant} />;
}
