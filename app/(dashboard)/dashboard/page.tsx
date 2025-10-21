import { SectionCards } from "@/features/dashboard/home/cards";
import { SiteHeader } from "@/features/dashboard/layout/site-header";

export default function DashboardPage() {
  return (
    <main>
      <SiteHeader title="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
            <SectionCards />
          </div>
        </div>
      </div>
    </main>
  );
}
