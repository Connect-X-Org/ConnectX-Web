"use client";
import Lenis from "lenis";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Preloader from "@/components/layout/preloader";
import Blogs from "@/features/web/landing/blogs";
import Faqs from "@/features/web/landing/faq";
import Hero from "@/features/web/landing/hero";
import Houses from "@/features/web/landing/houses";
import IntroContent from "@/features/web/landing/intro";
import ParallaxHome from "@/features/web/landing/parallax";
import PartnersLogoCloud from "@/features/web/landing/partners";
import Places from "@/features/web/landing/places";
import Restaurants from "@/features/web/landing/restaurants";
import Testimonilas from "@/features/web/landing/testimonilas";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <PartnersLogoCloud />
      <IntroContent />
      <Places />
      <ParallaxHome />
      <Houses />
      <Blogs />
      <Restaurants />
      <Testimonilas />
      <Faqs />
    </>
  );
}
