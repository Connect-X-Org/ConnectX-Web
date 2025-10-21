import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
export function SidebarHistory() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <div className="flex w-full flex-row items-center justify-center gap-2 px-2 text-sm text-zinc-500">
          Login to save and revisit previous chats!
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
