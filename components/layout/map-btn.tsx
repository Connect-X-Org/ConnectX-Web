"use client";
import {
  HospitalIcon,
  HotelIcon,
  HouseIcon,
  ListIcon,
  MapIcon,
  UtensilsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
export default function MapBtn() {
  const pathname = usePathname();
  const isMap = pathname === "/map";
  return (
    <div className="-translate-x-1/2 fixed bottom-3 left-1/2 z-[51] w-fit lg:bottom-8">
      {isMap ? (
        <ListBtn />
      ) : (
        <Button asChild className="w-fit lg:bottom-8">
          <Link className="flex w-fit items-center gap-2" href="/map">
            <MapIcon className="size-5" />
            <span className="text-[16px] text-sm">Map</span>
          </Link>
        </Button>
      )}
    </div>
  );
}

const listItems = [
  {
    icon: <HouseIcon />,
    label: "Housing",
    href: "/housing",
  },
  {
    icon: <UtensilsIcon />,
    label: "Restaurants",
    href: "/restaurants",
  },
  {
    icon: <HotelIcon />,
    label: "Tourism",
    href: "/tourism",
  },

  {
    icon: <HospitalIcon />,
    label: "Health care",
    href: "/health-care",
  },
];
function ListBtn() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button asChild className="w-fit lg:bottom-8">
          <div className="flex items-center gap-2">
            <ListIcon className="size-5" />
            <span className="text-[16px] text-sm">List</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full overflow-hidden border-0 bg-primary p-0 lg:w-[16rem]">
        {listItems.map((item, idx, arr) => (
          <Button
            asChild
            className={`flex w-full items-start justify-around rounded-none ${
              idx !== arr.length - 1 ? "border-b border-b-muted-foreground" : ""
            }`}
            key={item.label}
          >
            <Link href={item.href}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
