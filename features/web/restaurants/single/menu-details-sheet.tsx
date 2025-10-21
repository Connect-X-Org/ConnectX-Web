import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Food } from "@/types";

export default function MenuDetails({
  food,
  isMobileMenuDetailsOpen,
  setIsMobileMenuDetailsOpen,
  isForMobile,
}: {
  food: Food;
  isMobileMenuDetailsOpen?: boolean;
  setIsMobileMenuDetailsOpen?: (open: boolean) => void;
  isForMobile?: boolean;
}) {
  return (
    <Sheet
      onOpenChange={setIsMobileMenuDetailsOpen}
      open={isMobileMenuDetailsOpen}
    >
      {isForMobile ? null : (
        <SheetTrigger asChild>
          <Button className="hidden md:block" variant="outline">
            View Details
          </Button>
        </SheetTrigger>
      )}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{food.title}</SheetTitle>
          <SheetDescription className="sr-only">
            {food.description}
          </SheetDescription>
        </SheetHeader>
        <div>
          <AspectRatio className="bg-muted" ratio={16 / 9}>
            <Image
              alt={food.title}
              className="h-full w-full object-cover"
              fill
              src={food.image}
            />
          </AspectRatio>
          <div className="flex flex-col gap-2 px-2 py-4 lg:gap-4">
            <p className="text-muted-foreground text-sm">{food.description}</p>

            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">Ingredients:</p>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map((ingredient) => (
                  <Badge key={ingredient} variant={"secondary"}>
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="font-medium text-xl">
              <span className="text-muted-foreground text-sm">Price:</span>{" "}
              <span>${food.price}</span>
            </p>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Add to Cart</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
