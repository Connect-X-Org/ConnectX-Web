/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";

export default function PartnersLogoCloud() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="group relative m-auto max-w-5xl px-6">
        <h2 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl">
          <Highlighter action="circle" color="#FF9800">
            {/* #0048b0 #FF9800 */}
            Partnering
          </Highlighter>{" "}
          with 50+ Government and private companies.
        </h2>
        <div className="relative">
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Link
              className="block text-sm duration-150 hover:opacity-75"
              href="/"
            >
              <span>Meet Our Partners — or Join Them</span>

              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14">
            <div className="flex">
              <img
                alt="Nvidia Logo"
                className="mx-auto h-5 w-fit text-foreground dark:invert"
                height="20"
                src="/images/irembo.svg"
                width="auto"
              />
            </div>

            <div className="flex">
              <img
                alt="Column Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/rba.png"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                alt="GitHub Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/mariot.avif"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                alt="Nike Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/vubavuba.webp"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                alt="Lemon Squeezy Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/rathon.webp"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                alt="Laravel Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/irembo.svg"
                width="auto"
              />
            </div>
            <div className="flex">
              <img
                alt="Lilly Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/irembo.svg"
                width="auto"
              />
            </div>

            <div className="flex">
              <img
                alt="OpenAI Logo"
                className="mx-auto h-5 w-fit dark:invert"
                height="20"
                src="/images/irembo.svg"
                width="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
