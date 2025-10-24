"use client";
import Blogs from "@/features/web/landing/blogs";
import Faqs from "@/features/web/landing/faq";
import HeroCarousel from "@/features/web/landing/hero-carousel";
import Houses from "@/features/web/landing/houses";
import IntroContent from "@/features/web/landing/intro";
import ParallaxHome from "@/features/web/landing/parallax";
import Restaurants from "@/features/web/landing/restaurants";
import Testimonilas from "@/features/web/landing/testimonilas";
import Tourism from "@/features/web/landing/tourism";
export default function Home() {
  return (
    <>
      <HeroCarousel />
      <IntroContent />
      <Tourism />
      <ParallaxHome />
      <Houses />
      <Restaurants />
      <Testimonilas />
      <Blogs />
      <Faqs />
    </>
  );
}
