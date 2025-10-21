export default function HouseLocation({ place }: { place: string[] }) {
  return (
    <section className="@container relative flex-1 py-10">
      <div className="!tracking-[1.8px] @lg:mb-5 mb-2 font-medium @lg:text-xs text-[10px] text-content-muted uppercase">
        Location
      </div>
      <div className="mb-3 flex flex-wrap items-center text-pretty font-medium @lg:text-4xl text-2xl">
        <div className="min-w-[50%] flex-1 capitalize">{place.join(", ")}</div>
      </div>
      <p className="@lg:mb-14 mb-5 text-muted-foreground">
        Nestled in Nyarugenge, Kigali, this area offers a vibrant blend of
        culture, business, and modern city life, with plenty of opportunities
        for exploration and growth.
      </p>
      <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-sm">
        <iframe
          allowFullScreen
          className="aspect-video h-full w-full rounded-sm"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.7548139437863!2d30.125355674356914!3d-1.949238838713868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70feb2e6ae9%3A0x42c9567e13445a57!2sKimironko%20Market!5e0!3m2!1sen!2srw!4v1734010282439!5m2!1sen!2srw"
          title={`${place.join(", ")} Location`}
        />
      </div>
    </section>
  );
}
