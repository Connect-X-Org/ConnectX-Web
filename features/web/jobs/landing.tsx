import { jobs } from "@/config/data";
import JobsGrid from "./jobs-grid";

export default function JobsLanding() {
  return (
    <section className="container pb-16 lg:py-20 lg:pt-6">
      <div className="relative flex flex-col gap-6 lg:gap-12">
        <JobsGrid jobs={jobs} />
      </div>
    </section>
  );
}
