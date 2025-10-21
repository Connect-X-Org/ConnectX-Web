import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { BreakpointIndicator } from "@/components/custom/breakdown";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Discover and connect with services across Rwanda`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@rathonagency",
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("relative font-source-sans antialiased", fontVariables)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem
        >
          {children}
          <BreakpointIndicator className="absolute" />
          <Toaster closeButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
