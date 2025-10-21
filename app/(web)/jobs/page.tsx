import type { Metadata } from "next";
import JobCardsList from "@/features/web/jobs/job-cards-list";
import JobPage from "@/features/web/jobs/job-page";
import SearchJobsTop from "@/features/web/jobs/search-top";
export const metadata: Metadata = {
  title: "Jobs",
};
export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ slug: string }>;
}) {
  const { slug } = await searchParams;
  return (
    <main className="bg-dashed">
      <SearchJobsTop />
      <main className="container relative grid grid-cols-12 py-4">
        <JobCardsList slug={slug} />
        <JobPage slug={slug} />
      </main>
    </main>
  );
}
