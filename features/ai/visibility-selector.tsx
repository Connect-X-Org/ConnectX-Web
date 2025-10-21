"use client";

import { Lock } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  CheckCircleFillIcon,
  ChevronDownIcon,
  GlobeIcon,
  LockIcon,
} from "./icons";

export type VisibilityType = "private" | "public";

const visibilities: Array<{
  id: VisibilityType;
  label: string;
  description: string;
  icon: ReactNode;
}> = [
  {
    id: "private",
    label: "Private",
    description: "Only you can access this chat",
    icon: <LockIcon />,
  },
  {
    id: "public",
    label: "Public",
    description: "Anyone with the link can access this chat",
    icon: <GlobeIcon />,
  },
];

export function VisibilitySelector({
  className,
}: {} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger
        asChild
        className={cn(
          "w-fit data-[state=open]:bg-accent data-[state=open]:text-accent-foreground dark:bg-black",
          className
        )}
      >
        <Button
          className="hidden h-8 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:flex md:h-fit md:px-2"
          data-testid="visibility-selector"
          variant="outline"
        >
          <Lock />
          <span className="md:sr-only">change visibility</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-[300px]">
        {visibilities.map((visibility) => (
          <DropdownMenuItem
            className="group/item flex flex-row items-center justify-between gap-4"
            data-testid={`visibility-selector-item-${visibility.id}`}
            key={visibility.id}
          >
            <div className="flex flex-col items-start gap-1">
              {visibility.label}
              {visibility.description && (
                <div className="text-muted-foreground text-xs">
                  {visibility.description}
                </div>
              )}
            </div>
            <div className="text-foreground opacity-0 group-data-[active=true]/item:opacity-100 dark:text-foreground">
              <CheckCircleFillIcon />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
