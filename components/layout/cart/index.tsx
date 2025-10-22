import { ShoppingCartIcon } from "lucide-react";
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

export function Cart({ isAddToCart = false }: { isAddToCart?: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {isAddToCart ? (
          <Button className="w-fit">Add to Cart</Button>
        ) : (
          <Button
            className="group rounded-full"
            size={"icon"}
            variant={"outline"}
          >
            <ShoppingCartIcon className="transition-all ease-in-out group-hover:scale-110" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-semibold text-lg">My Cart</SheetTitle>
          <SheetDescription className="sr-only">
            Make changes to your cart here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <ShoppingCartIcon className="size-16" />
          <p className="mt-6 text-center font-bold text-2xl">
            Your cart is empty.
          </p>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
