import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { jobs } from "@/config/data";
import JobCard from "./job-card";

export default function JobCardsList({ slug }: { slug?: string | null }) {
  return (
    <section className="sticky top-28 col-span-4 hidden h-fit pr-1 lg:block">
      <ScrollArea className="h-[500px] w-full xl:h-[550px] 2xl:h-[600px]">
        <div className="flex flex-col gap-4 p-2 pr-3">
          {jobs.map((job, i) => (
            <JobCard job={job} key={i} slug={slug || jobs[0].slug} />
          ))}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  );
}
