import ChatBtn from "@/components/layout/chat-btn";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/dashboard/layout/app-sidebar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <SidebarProvider
        className="has-data-[variant=inset]:bg-sidebar dark:has-data-[variant=inset]:bg-background"
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
      <ChatBtn />
    </div>
  );
}
