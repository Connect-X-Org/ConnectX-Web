import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { TnavItem } from "@/types";
export default function NavItem({
  id,
  item,
  active,
}: {
  id: number;
  item: TnavItem;
  active: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const Icon = item.icon;
  return (
    <motion.div
      className={cn(
        "flex h-11 items-center border-b-2",
        active ? "border-primary" : "border-transparent"
      )}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <Link
        className={cn(
          "relative h-8 px-4 py-2 font-medium hover:text-accent-foreground",
          active ? "text-primary" : "text-primary/80",
          item.comingSoon && "cursor-not-allowed"
        )}
        href={item.comingSoon ? "#" : item.link}
        key={`link-${id}`}
        onMouseEnter={() => setHovered(id)}
      >
        <AnimatePresence>
          {hovered === id && (
            <motion.div
              className={cn(
                "absolute inset-0 rounded-sm bg-accent dark:bg-accent/50"
              )}
              layoutId="fluid"
              transition={{ duration: 0.2, ease: "linear" }}
            />
          )}
        </AnimatePresence>
        <div className="relative flex items-center gap-2">
          <Icon className="relative z-10 size-4" />
          <span className="relative z-10">{item.label}</span>
        </div>
      </Link>
    </motion.div>
  );
}
