import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
export default function SearchTop() {
  return (
    <div className="ml-auto hidden items-center gap-x-4 md:flex lg:gap-x-6">
      <div className="relative">
        <Input
          className="peer min-h-10 ps-9 lg:min-w-xs lg:pe-9"
          placeholder="Search..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
        <button
          aria-label="Submit search"
          className="absolute inset-y-0 end-0 hidden h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 lg:flex"
          type="submit"
        >
          <ArrowRightIcon aria-hidden="true" size={16} />
        </button>
      </div>
    </div>
  );
}
