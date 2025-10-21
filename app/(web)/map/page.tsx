import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map",
};
export default function MapPage() {
  return (
    <section>
      <div className="relative mx-auto aspect-video w-full overflow-hidden">
        <iframe
          allowFullScreen
          className="aspect-video h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1680076.7986874173!2d28.5605457840497!3d-1.9431414411680572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e1!3m2!1sen!2srw!4v1758795911374!5m2!1sen!2srw"
          title="Rwanda Location"
        />
      </div>
    </section>
  );
}
