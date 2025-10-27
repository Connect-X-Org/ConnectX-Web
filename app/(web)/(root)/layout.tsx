import Cta from "@/components/layout/cta";
// import MapBtn from "@/components/layout/map-btn";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { AISearchTrigger } from "@/features/ai/floating-ai-search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background dark:bg-black">
      <SiteHeader />
      <main className="relative flex min-h-svh flex-1 flex-col">
        {children}
      </main>

      <Cta />
      <AISearchTrigger />
      <SiteFooter />
    </div>
  );
}
