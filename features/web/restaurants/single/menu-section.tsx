import { Highlighter } from "@/components/ui/highlighter";
import { menu } from "@/config/data";
import MenuFood from "./menu-food";

export default function MenuSection() {
  return (
    <section className="container flex flex-col gap-10 bg-background py-10">
      <h2 className="font-semibold text-2xl capitalize">
        <Highlighter action="underline" color="#FF9800">
          Our Menu
        </Highlighter>{" "}
      </h2>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <h2 className="font-medium text-xl md:text-2xl">Food</h2>
        <div className="flex flex-col gap-8">
          {menu.food.map((food) => (
            <MenuFood food={food} key={food.id} />
          ))}
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <h2 className="font-medium text-xl md:text-2xl">Drinks</h2>
        <div className="flex flex-col gap-8">
          {menu.drinks.map((drink) => (
            <MenuFood food={drink} key={drink.id} />
          ))}
        </div>
      </section>
    </section>
  );
}
