import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/ai/sidebar/app-sidebar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-background dark:bg-black">
      <main className="relative flex min-h-svh flex-1 flex-col">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </main>
    </div>
  );
}
