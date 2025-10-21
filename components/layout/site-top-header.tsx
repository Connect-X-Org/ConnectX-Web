import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/config/data";

export default function SiteTopHeader() {
  return (
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-x-4 gap-y-2 border-black border-b px-16 pt-2 pb-2 lg:flex-row lg:items-center lg:justify-end lg:gap-y-0 lg:border-none lg:pb-1 xl:px-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="flex cursor-pointer items-center gap-x-1 text-xs lg:text-muted-foreground"
                  type="button"
                >
                  <item.icon className="size-4" />
                  <div className="flex flex-col items-start">
                    <span>{item.label}</span>
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent
                className="max-w-[500px] bg-white p-5 lg:min-w-[420px] dark:bg-black"
                side="left"
              >
                <SheetHeader>
                  <SheetTitle className="font-semibold text-2xl lg:text-4xl">
                    {item.title}
                  </SheetTitle>
                  <SheetDescription>{item.description}</SheetDescription>
                </SheetHeader>
                {/* You can add more custom JSX for each nav item here */}
              </SheetContent>
            </Sheet>
          </li>
        ))}
      </ul>
    </div>
  );
}
