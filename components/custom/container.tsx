import { cn } from "@/lib/utils";

const Line = ({ className = "" }) => (
  <div
    className={cn(
      "-z-0 absolute h-px w-full from-[1%] from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500",
      className
    )}
  />
);
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8">
    <Line className="top-2 left-0 bg-gradient-to-l sm:top-4 md:top-6" />
    <Line className="bottom-2 left-0 bg-gradient-to-r sm:bottom-4 md:bottom-6" />

    <Line className="inset-y-0 right-2 h-full w-px bg-gradient-to-t sm:right-4 md:right-6" />
    <Line className="inset-y-0 left-2 h-full w-px bg-gradient-to-t sm:left-4 md:left-6" />
    <div className="relative z-20 mx-auto py-8">{children}</div>
  </div>
);
//======================================
export function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="center w-full p-4">{children}</div>
    </Container>
  );
}
