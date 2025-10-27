import type { Metadata } from "next";
import ServiceFilters from "@/features/web/_shared/service-filters";
import JobsLanding from "@/features/web/jobs/landing";
export const metadata: Metadata = {
  title: "Jobs",
};
export default function JobsPage() {
  return (
    <main className="relative">
      <ServiceFilters type="jobs" />
      <JobsLanding />
    </main>
  );
}
