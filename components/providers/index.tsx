"use client";
import { AppProgressProvider } from "@bprogress/next";
import { Analytics } from "@vercel/analytics/next";
import { BreakpointIndicator } from "@/components/custom/breakdown";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <AppProgressProvider
        color="var(--foreground)"
        delay={500}
        height="2px"
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>
      <BreakpointIndicator className="absolute" />
      <Analytics />
      <Toaster closeButton position="top-right" />
    </ThemeProvider>
  );
}
