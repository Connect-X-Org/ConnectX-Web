import { Armchair, Bookmark, StarIcon, ZapIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { jobs } from "@/config/data";
import CompanyOverview from "./company-overview";
import JobDescription from "./job-description";
import JobQualifications from "./job-qualifications";
import JobTestimonial from "./job-testimonial";

export default function JobPage({ slug }: { slug?: string | null }) {
  const job = slug ? jobs.find((j) => j.slug === slug) : jobs[0];
  if (!job) {
    return notFound();
  }
  return (
    <section className="col-span-12 rounded-lg border bg-background lg:col-span-8 dark:bg-black">
      {/* top section */}
      <div className="flex items-start justify-between gap-2 p-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-2xl lg:text-4xl">{job.title}</h3>
          <div className="flex items-center gap-2">
            <Armchair className="size-7" />
            <span className="font-medium tracking-tight">{job.company}</span>
            <div className="flex items-center gap-1">
              <span>{job.rating}</span>
              <StarIcon className="size-4 fill-primary text-primary" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">{job.location}</p>
            <div className="text-primary/90">
              <span className="font-semibold">
                ${job.salary.min} - ${job.salary.max}
              </span>{" "}
              <span>{job.salary.type}</span> <span>({job.salary.note})</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size={"icon"} variant={"secondary"}>
            <Bookmark className="size-6" />
          </Button>
          <Button className="hidden lg:flex" size={"lg"}>
            <ZapIcon />
            {job.applyType}
          </Button>
          <Button className="flex lg:hidden" size={"icon"}>
            <ZapIcon />
          </Button>
        </div>
      </div>
      <Separator />
      {/* qualifications */}
      <JobQualifications />
      {/* description */}
      <JobDescription />

      <Separator />
      {/* testimonials */}
      <CompanyOverview />
      <JobTestimonial />
    </section>
  );
}
