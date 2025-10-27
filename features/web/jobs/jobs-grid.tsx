import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import img2 from "@/public/gradients_3.png";
import img1 from "@/public/gradients_10.jpg";
import type { Tjob } from "@/types";
export default function JobsGrid({
  jobs,
  limit,
  className,
}: {
  jobs: Tjob[];
  limit?: number;
  className?: string;
}) {
  const slicedJobs = limit ? jobs.slice(0, limit) : jobs;
  return (
    <div
      className={cn(
        "relative grid w-full grid-cols-1 gap-4 gap-y-8 text-left md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {slicedJobs.map((job, i) => (
        <Link
          className={cn("group col-span-2 lg:col-span-1")}
          href={`/jobs/${job.slug}`}
          key={job.slug}
        >
          <div className="relative overflow-hidden">
            <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
              <Image
                alt={job.title}
                className="h-full w-full object-cover duration-300 ease-in hover:scale-105"
                fill
                src={i % 2 === 0 ? img1 : img2}
              />
            </AspectRatio>
            <Button
              className="absolute top-1 right-1 hidden group-hover:flex"
              size="icon-sm"
            >
              <BookmarkIcon />
            </Button>
            <div className="absolute bottom-1 left-1">
              <Badge>{job.title}</Badge>
            </div>
          </div>

          <div className="mt-1 flex flex-col gap-1">
            <p className="text-muted-foreground text-xs uppercase">
              {job.location}
            </p>
            <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
              <span>{job.company}</span>
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50" />
            </div>
          </div>
          <div className="mt-3 text-primary/90">
            <span className="font-semibold">
              ${job.salary.min} - ${job.salary.max}
            </span>{" "}
            <span>{job.salary.type}</span> <span>({job.salary.note})</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
