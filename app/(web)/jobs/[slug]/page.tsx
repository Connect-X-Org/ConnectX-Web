import { BookmarkIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { companyReviews, jobs } from "@/config/data";
import CarouselTestimonials from "@/features/web/_shared/testimonials";
import { CheckoutSmall } from "@/features/web/housing/check-out-small";
import CompanyOverview from "@/features/web/jobs/company-overview";
import JobDescription from "@/features/web/jobs/job-description";
import JobQualifications from "@/features/web/jobs/job-qualifications";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) {
    return notFound();
  }
  return (
    <div className="container relative py-16">
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-12 gap-4 xl:gap-10">
        <div className="relative col-span-12 flex flex-col gap-4 md:col-span-8 2xl:col-span-9">
          <Button
            asChild
            className="w-fit hover:scale-105"
            size="sm"
            variant={"ghost"}
          >
            <Link className="group flex items-center gap-1" href="/jobs">
              <ChevronLeftIcon className="group-hover:animate-pulse" />
              Back
            </Link>
          </Button>
          <div className="flex min-h-screen max-w-3xl flex-col gap-2 2xl:max-w-5xl">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl lg:text-4xl xl:text-5xl">
                {job.title}
              </h3>
              <p className="max-w-lg text-muted-foreground text-xl leading-7 tracking-tight">
                Provided by :{" "}
                <span className="font-semibold text-primary">
                  {job.company}
                </span>
              </p>
              <div className="max-w-lg text-lg text-muted-foreground leading-7 tracking-tight">
                Salary :{" "}
                <span className="font-semibold text-primary">
                  ${job.salary.min} - ${job.salary.max}
                </span>{" "}
                <span>{job.salary.type}</span> <span>({job.salary.note})</span>
              </div>
              <p className="max-w-lg text-lg text-muted-foreground leading-7 tracking-tight">
                Job Type :{" "}
                <span className="font-semibold text-primary">On site</span>
              </p>
              <p className="max-w-lg text-lg text-muted-foreground leading-7 tracking-tight">
                Location :{" "}
                <span className="font-semibold text-primary">
                  {job.location}
                </span>
              </p>
            </div>
            {/* qualifications */}
            <JobQualifications />
            {/* description */}
            <JobDescription />
            <CompanyOverview />
          </div>
        </div>
        <div className="sticky top-14 col-span-12 block h-fit md:col-span-4 2xl:col-span-3">
          <div className="flex flex-col gap-4">
            <Card className="hidden lg:flex">
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">
                  Explore job details and salary
                </CardTitle>
                <CardDescription>
                  Apply now and take the next step in your career.{" "}
                  <span className="text-muted-foreground">
                    Estimated salary:
                  </span>{" "}
                  <span className="font-medium text-primary">$2,500/month</span>
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex w-full items-center gap-2">
                <Button
                  className="text-lg"
                  size={"icon-lg"}
                  variant={"outline"}
                >
                  <BookmarkIcon />
                </Button>
                <Button className="flex-1 text-lg" size={"lg"}>
                  Apply for the job
                </Button>
              </CardFooter>
            </Card>
            <CarouselTestimonials reviews={companyReviews} />
          </div>
        </div>
      </div>
      <CheckoutSmall />
    </div>
  );
}
