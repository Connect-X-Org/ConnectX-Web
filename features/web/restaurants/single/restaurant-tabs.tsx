import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu, restaurants } from "@/config/data";
import type { RestaurantWithOverviewType, TRestaurant } from "@/types";
import RestaurantHero from "./hero";
import MenuFood from "./menu-food";
import RestaurantOverview from "./overview";
import RestaurantPhotos from "./photos";
import RestaurantReviews from "./reviews";

// Type for restaurant with overview data

export default function RestaurantTabs({
  restaurant,
}: {
  restaurant: TRestaurant;
}) {
  return (
    <div className="relative z-10">
      <Tabs className="flex w-full flex-col" defaultValue="overview">
        <div className="mx-auto w-full max-w-xl rounded-2xl bg-background p-4">
          <TabsList className="w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview">
          <RestaurantHero restaurant={restaurant} />
          <RestaurantOverview
            restaurant={restaurants[0] as RestaurantWithOverviewType}
          />
        </TabsContent>
        <TabsContent
          className="container flex flex-col gap-10 py-10"
          value="menu"
        >
          <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <h2 className="font-medium text-xl uppercase md:text-2xl">Food</h2>
            <div className="flex flex-col gap-8">
              {menu.food.map((food) => (
                <MenuFood food={food} key={food.id} />
              ))}
            </div>
          </section>
          <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <h2 className="font-medium text-xl uppercase md:text-2xl">
              Drinks
            </h2>
            <div className="flex flex-col gap-8">
              {menu.drinks.map((drink) => (
                <MenuFood food={drink} key={drink.id} />
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="reviews">
          <RestaurantReviews />
        </TabsContent>
        <TabsContent value="photos">
          <RestaurantPhotos />
        </TabsContent>
      </Tabs>
    </div>
  );
}
