import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total Spent",
    value: "$1,250.00",
    trend: "+12.5%",
    trendIcon: IconTrendingUp,
    trendType: "up",
    summary: "Spending up",
    note: "The amount spent for different orders and services",
  },
  {
    title: "Total Booked",
    value: "5",
    trend: "-20%",
    trendIcon: IconTrendingDown,
    trendType: "down",
    summary: "Fewer bookings",
    note: "Number of services booked",
  },
  {
    title: "Total Orders",
    value: "18",
    trend: "+12.5%",
    trendIcon: IconTrendingUp,
    trendType: "up",
    summary: "Orders rising",
    note: "Includes all orders placed",
  },
  {
    title: "Total Bookmarked",
    value: "20",
    trend: "+4.5%",
    trendIcon: IconTrendingUp,
    trendType: "up",
    summary: "More bookmarks",
    note: "Number of items bookmarked",
  },
];

export function SectionCards() {
  return (
    <div className="grid @5xl/main:grid-cols-4 @xl/main:grid-cols-2 grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 dark:*:data-[slot=card]:bg-background">
      {stats.map((item) => {
        const Icon = item.trendIcon;
        return (
          <Card className="@container/card" key={item.title}>
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
                {item.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <Icon />
                  {item.trend}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.summary} <Icon className="size-4" />
              </div>
              <div className="text-muted-foreground">{item.note}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
