import {
  Geist,
  Geist_Mono,
  Inter,
  Nunito,
  Source_Sans_3,
} from "next/font/google";

import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontSourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
export const fontVariables = cn(
  geistSans.variable,
  geistMono.variable,
  fontInter.variable,
  fontSourceSans.variable,
  nunito.variable
);
