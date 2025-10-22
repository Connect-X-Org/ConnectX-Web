import type { Metadata } from "next";
import Faqs from "@/features/web/landing/faq";
import CountDown from "@/features/web/waiting/count-down";
import WaitingFooter from "@/features/web/waiting/footer";
import WaitingListForm from "@/features/web/waiting/form";
import WaitingListHero from "@/features/web/waiting/hero";
import OtherWhoJoined from "@/features/web/waiting/others";

export const metadata: Metadata = {
  title: "Waiting List",
};
export default function WaitingListPage() {
  return (
    <section className="container py-16 lg:py-20">
      <WaitingListHero />
      <WaitingListForm />
      <OtherWhoJoined />
      <CountDown />
      <Faqs />
      <WaitingFooter />
    </section>
  );
}
