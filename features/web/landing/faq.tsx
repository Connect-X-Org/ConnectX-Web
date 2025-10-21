"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Highlighter } from "@/components/ui/highlighter";
import { faqItems } from "@/config/data";

export default function Faqs() {
  return (
    <section className="container py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-center font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
            Frequently{" "}
            <Highlighter action="underline" color="#FF9800">
              Asked Questions
            </Highlighter>{" "}
          </h2>
          <p className="text-primary/85 text-xl leading-7">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            className="w-full rounded-2xl bg-muted/50 p-1 dark:bg-muted/50"
            collapsible
            type="single"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  className="peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-sm dark:data-[state=open]:bg-muted"
                  value={item.id}
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="mt-6 px-8 text-muted-foreground">
            Can't find what you're looking for? Contact our{" "}
            <Link className="font-medium text-primary hover:underline" href="#">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
