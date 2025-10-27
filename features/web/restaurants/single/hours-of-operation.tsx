"use client";
import { ClockIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timetableWeek } from "@/config/data";
export default function HoursOfOperation() {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
  const todayHours =
    timetableWeek.find((item) => item.day === today)?.from || "Closed";
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClockIcon className="h-5 w-5" />
          Hours of Operation
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-md border border-green-200 bg-green-50 p-2">
            <span className="font-medium text-sm">
              Today ({today.charAt(0).toUpperCase() + today.slice(1)})
            </span>
            <span className="font-medium text-green-700 text-sm">
              {todayHours}
            </span>
          </div>
          <Separator />
          <div className="flex flex-col gap-20">
            {/* Weekday Table */}
            <Table>
              <TableCaption>
                General Daily Restaurant Timetable (Weekdays)
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary">Day</TableHead>
                  <TableHead className="w-[100px] text-primary">
                    From - To
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timetableWeek.map((item) => (
                  <TableRow key={item.day}>
                    <TableCell className="font-medium text-muted-foreground">
                      {item.day}
                    </TableCell>
                    <TableCell className="font-medium text-muted-foreground">
                      {item.from}-{item.to}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
