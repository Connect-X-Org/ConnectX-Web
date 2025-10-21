"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { jobs } from "@/config/data";
import JobCard from "./job-card";
export function JobListMobile() {
  // i went when slug change the sheet will close
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [slug]);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild className="block lg:hidden">
        <Button variant="outline">Jobs</Button>
      </SheetTrigger>
      <SheetContent className="w-[100vw]">
        <SheetHeader>
          <SheetTitle>Jobs</SheetTitle>
          <SheetDescription>Find your dream job here.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)] w-full">
          <div className="flex flex-col gap-4 p-4">
            {jobs.map((job, i) => (
              <JobCard job={job} key={i} slug={slug || jobs[0].slug} />
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
