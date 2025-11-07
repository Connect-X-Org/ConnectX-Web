import Cta from "@/components/layout/cta";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
// import ChatSection from "@/features/ai/chat-section";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background dark:bg-black">
      <SiteHeader isRootHeader={false} />
      {/* <div className="grid grid-cols-12"> */}
      <main className="relative col-span-full flex min-h-svh flex-1 flex-col lg:col-span-8">
        {children}
      </main>
      {/* <div className="col-span-full lg:col-span-4">
          <ChatSection />
        </div>
      </div> */}

      <Cta />
      <SiteFooter />
    </div>
  );
}
