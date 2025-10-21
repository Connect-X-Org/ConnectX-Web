import {
  IconChartLine,
  IconDashboard,
  IconHelp,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import {
  BookmarkIcon,
  ListIcon,
  ShoppingCartIcon,
  TelescopeIcon,
  Trash2Icon,
} from "lucide-react";
export const dashboardNavs = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Services",
      url: "/services",
      icon: TelescopeIcon,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCartIcon,
    },
    {
      title: "BookMarks",
      url: "/bookmarks",
      icon: BookmarkIcon,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: IconChartLine,
    },
    {
      title: "Activity",
      url: "/activity",
      icon: ListIcon,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2Icon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/contact-us",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
  ],
};
