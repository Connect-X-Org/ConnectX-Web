import { Armchair, Bookmark, StarIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Tjob } from "@/types";
export default function JobCard({
  job,
  slug,
}: {
  job: Tjob;
  slug?: string | null;
}) {
  const active = slug ? slug === job.slug : false;
  return (
    <Link href={`/jobs/?slug=${job.slug}`}>
      <Card
        className={cn(
          "flex cursor-pointer flex-col gap-3 rounded-lg bg-background py-3 shadow-none hover:ring-1 hover:ring-blue-500",
          active && "ring-1 ring-blue-500"
        )}
      >
        <CardHeader>
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Armchair className="size-5" />
            <span>{job.company}</span>
            <div className="flex items-center gap-1">
              <span>{job.rating}</span>
              <StarIcon className="size-4 fill-yellow-500 text-yellow-500" />
            </div>
          </CardDescription>
          <CardAction className="group cursor-pointer">
            <Bookmark className="size-6 text-muted-foreground group-hover:fill-primary group-hover:text-primary" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <p className="text-muted-foreground">{job.location}</p>
          <div className="text-primary/90">
            <span className="font-semibold">
              ${job.salary.min} - ${job.salary.max}
            </span>{" "}
            <span>{job.salary.type}</span> <span>({job.salary.note})</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button size={"sm"} variant={"secondary"}>
            <ZapIcon />
            {job.applyType}
          </Button>
          <p>{job.posted}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
