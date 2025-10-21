/* eslint-disable @next/next/no-img-element */
"use client";

import { Play, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

type HeroVideoProps = {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
};

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn("relative", className)}>
      <button
        aria-label="Play video"
        className="group relative aspect-video h-full cursor-pointer border-0 bg-transparent p-0 lg:w-full"
        onClick={() => setIsVideoOpen(true)}
        type="button"
      >
        <Image
          alt={thumbnailAlt}
          className="aspect-video w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
          height={1080}
          src={thumbnailSrc}
          width={1920}
        />
        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div
            className={
              "relative flex size-12 scale-100 items-center justify-center rounded-full bg-background shadow-md transition-all duration-200 ease-out"
            }
          >
            <Play className="size-4 scale-100 fill-foreground transition-transform duration-200 ease-out group-hover:scale-105" />
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                setIsVideoOpen(false);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <motion.div
              {...selectedAnimation}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <motion.button className="-top-16 absolute right-0 rounded-full bg-neutral-900/50 p-2 text-white text-xl ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black">
                <XIcon className="size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="size-full rounded-2xl"
                  src={videoSrc}
                  title="Hero Video player"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
