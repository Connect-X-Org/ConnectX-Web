import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
export function CheckoutSmall() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="sticky inset-x-0 bottom-0 z-[52] my-4 flex w-full items-center gap-4 border-white/20 border-t-2 bg-background bg-default px-4 py-3 lg:hidden">
          <Button className="w-full text-lg" size={"xl"}>
            Explore dates and pricing
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full p-0">
        <DrawerHeader className="sr-only">
          <DrawerTitle className="font-bold text-2xl">
            Select your travel dates
          </DrawerTitle>
          <DrawerDescription>
            Add your travel dates to see full pricing and availability.
          </DrawerDescription>
        </DrawerHeader>
        <div>checkout small</div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
