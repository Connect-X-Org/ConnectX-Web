import {
  EllipsisIcon,
  GuitarIcon,
  MicVocalIcon,
  SearchIcon,
  TheaterIcon,
} from "lucide-react";
import Form from "next/form";
import { FaBasketball, FaChampagneGlasses } from "react-icons/fa6";
import { GiHighPunch } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const categories = [
  {
    icon: GuitarIcon,
    label: "Concerts",
  },
  {
    icon: FaBasketball,
    label: "Sports",
  },
  {
    icon: MicVocalIcon,
    label: "Cultural",
  },
  {
    icon: GiHighPunch,
    label: "Boxing",
  },
  {
    icon: TheaterIcon,
    label: "Conferences & Seminars",
  },
  {
    icon: FaChampagneGlasses,
    label: "Parties",
  },
  {
    icon: EllipsisIcon,
    label: "Other",
  },
];
export default function SearchTicketsTop() {
  return (
    <section className="container top-0 z-10 bg-background pt-8 pb-4 lg:sticky dark:bg-black">
      <div className="flex w-full items-center gap-4">
        <Form
          action={"/tickets"}
          className="relative w-full rounded-full bg-muted/50 dark:bg-black"
        >
          <Input
            className="peer min-h-10 rounded-full pe-9 shadow-none md:min-h-11 md:ps-10"
            name="search"
            placeholder={"Search tickets by name , location, etc..."}
            type="search"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 hidden items-center justify-center ps-3 text-primary/90 peer-disabled:opacity-50 md:flex">
            <SearchIcon className="size-5" />
          </div>
        </Form>
        {categories.map((category) => (
          <Tooltip key={category.label}>
            <TooltipTrigger asChild>
              <Button
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
                key={category.label}
                size={"iconlg"}
                variant={"secondary"}
              >
                <category.icon className="size-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{category.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
