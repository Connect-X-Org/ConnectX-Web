import { HeroVideoDialog } from "@/components/custom/hero-video-dialog";

export default function VisitVideo({ thumbnailSrc }: { thumbnailSrc: string }) {
  return (
    <section className="@container relative flex-1 py-10">
      <div className="!tracking-[1.8px] @lg:mb-5 mb-2 font-medium @lg:text-xs text-[10px] text-muted-foreground uppercase">
        TOUR THIS LOCATION
      </div>
      <div className="@lg:mb-14 mb-5 flex flex-wrap items-center text-pretty font-medium @lg:text-4xl text-2xl">
        <div className="min-w-[50%] flex-1">
          Check it out before you check-in
        </div>
      </div>
      <div className="@container w-full max-w-full">
        <HeroVideoDialog
          animationStyle="from-center"
          className="block aspect-video w-full"
          thumbnailAlt="Hero Video"
          thumbnailSrc={thumbnailSrc}
          videoSrc="https://www.youtube.com/embed/y6E1L6KVwYw?si=OxRHdcUSBg6OzrlP"
        />
      </div>
    </section>
  );
}
