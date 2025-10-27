import { SearchIcon } from "lucide-react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import type { Tservices } from "@/types";

export default function ItemFilters({ itemType }: { itemType: Tservices }) {
  return (
    <div className="mx-auto w-full max-w-2xl pt-6 pb-2">
      <Form action={`/${itemType}`} className="relative w-full">
        <Input
          className="peer min-h-10 rounded-full border-0 bg-muted ps-9 lg:min-w-xs lg:pe-9 dark:border"
          placeholder={`Search ${itemType} by name , location, etc...`}
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </Form>
    </div>
  );
}
