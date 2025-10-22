import { ArrowRight, FilterIcon, SearchIcon } from "lucide-react";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobListMobile } from "./job-list-mobile";

export default function SearchJobsTop() {
  return (
    <section className="container top-6 z-10 bg-background pt-8 pb-4 lg:sticky">
      <div className="flex w-full items-center gap-4">
        <Form action={"/jobs"} className="relative w-full dark:bg-black">
          <Input
            className="peer min-h-10 pe-9 md:min-h-10 md:ps-9"
            name="search"
            placeholder={"Search jobs by name , location, etc..."}
            type="search"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 hidden items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50 md:flex">
            <SearchIcon size={16} />
          </div>
          <Button
            aria-label="Submit search"
            className="absolute inset-y-0 end-0 hidden min-h-10 rounded-e-md rounded-l-none md:min-h-10 lg:flex"
            size={"lg"}
            type="submit"
            variant={"secondary"}
          >
            <span className="hidden md:block">Search</span>
            <span className="block md:hidden">
              <ArrowRight size={16} />
            </span>
          </Button>
        </Form>
        <Button size={"lg"} variant={"secondary"}>
          <FilterIcon size={16} />
          Filter
        </Button>
        <JobListMobile />
      </div>
    </section>
  );
}
