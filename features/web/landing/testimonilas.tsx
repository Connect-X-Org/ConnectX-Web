import { Suspense } from "react";
import { AnimatedTestimonials } from "@/components/custom/animated-testimonials";
import { Highlighter } from "@/components/ui/highlighter";
import { testimonials } from "@/config/data";

export default function Testimonilas() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-center font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
            Voices of{" "}
            <Highlighter action="underline" color="#FF9800">
              Our Visitors
            </Highlighter>{" "}
          </h2>
          <p className="text-primary/85 text-xl leading-7">
            See how travelers from around the world describe their unforgettable
            moments in Rwanda.
          </p>
        </div>
        <Suspense>
          <AnimatedTestimonials
            className="text-left"
            testimonials={testimonials}
          />
        </Suspense>
      </div>
    </section>
  );
}
