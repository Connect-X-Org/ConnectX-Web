import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { restaurants } from "@/config/data";
import RestaurantTabs from "@/features/web/restaurants/single/restaurant-tabs";

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return {
      title: "Restaurant Not Found",
      description: "The restaurant you're looking for doesn't exist.",
    };
  }

  return {
    title: `${restaurant.title} | ${restaurant.place}`,
    description: restaurant.description,
    openGraph: {
      title: `${restaurant.title} | ${restaurant.place}`,
      description: restaurant.description,
      images: [
        {
          url: restaurant.src,
          alt: restaurant.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: restaurant.title,
      description: restaurant.description,
      images: [restaurant.src],
    },
  };
}

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
