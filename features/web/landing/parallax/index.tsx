"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import Picture7 from "@/public/images/arena.jpeg";
import Picture1 from "@/public/images/convetion.jpg";
import Picture4 from "@/public/images/gorilla.jpg";
import Picture3 from "@/public/images/hotel.webp";
import Picture5 from "@/public/images/kivu.jpg";
import Picture2 from "@/public/images/radison.jpg";
import Picture6 from "@/public/images/stay.jpg";
import styles from "./styles.module.css";

export default function ParallaxHome() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="group relative flex flex-col gap-6 lg:gap-12">
        <div className="container flex max-w-xl flex-col items-start gap-4 text-left">
          <h2 className="text-center font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
            Places you{" "}
            <Highlighter action="underline" color="#FF9800">
              can&apos;t
            </Highlighter>{" "}
            ignore
          </h2>
          <p className="max-w-xl text-primary/85 text-xl leading-7">
            From the rolling thousand hills to vibrant cultural landmarks,
            explore breathtaking destinations that make Rwanda unforgettable.
          </p>
        </div>
        <div className={cn("relative", styles.container)} ref={container}>
          <div className={styles.sticky}>
            {pictures.map(({ src, scale }, index) => {
              return (
                <motion.div className={styles.el} key={index} style={{ scale }}>
                  <div className={styles.imageContainer}>
                    <Image alt="image" fill placeholder="blur" src={src} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
