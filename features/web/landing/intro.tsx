import { ChevronRightIcon } from "lucide-react";
import { HeroVideoDialog } from "@/components/custom/hero-video-dialog";
import TheLink from "@/components/custom/the-link";

export default function IntroContent() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="">
        <div className="flex flex-col items-center gap-6 md:gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-2xl text-muted-foreground italic tracking-tight md:text-3xl lg:text-4xl">
              <span className="font-medium text-primary">Rwanda</span> is a
              beautiful, landlocked country in East-Central Africa. Its capital
              city is Kigali. The official languages are Kinyarwanda, English,
              and French, with Swahili also widely spoken. The current president
              is <span className="font-medium text-primary">Paul Kagame</span>,
              leading the country with a vision of unity and progress.
            </h2>

            <TheLink
              className="flex items-center gap-1 font-semibold text-blue-600 italic transition-all duration-300 ease-in hover:tracking-wide dark:text-blue-500"
              href={"/"}
            >
              Learn more
              <ChevronRightIcon className="size-5" />
            </TheLink>
          </div>
          <div className="relative aspect-video flex-1">
            <HeroVideoDialog
              animationStyle="top-in-bottom-out"
              className="aspect-video w-full"
              thumbnailAlt="Hero Video"
              thumbnailSrc="/rwanda-flag.png"
              videoSrc="https://www.youtube.com/embed/Ov8JhHzPUKo?si=tZADZUP1XRgqgYvo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
