import Image from "next/image";
import Link from "next/link";

export default function WaitingListHero() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center">
      <Link className="rounded-xl p-1 dark:bg-white" href="/">
        <Image
          alt="logo image"
          className="rounded-lg"
          height={50}
          src="/icon.png"
          width={50}
        />
      </Link>
      <div className="flex flex-col gap-3">
        <div className="font-semibold text-4xl tracking-tighter lg:text-6xl">
          Get early access
        </div>
        <div className="text-pretty text-muted-foreground text-sm tracking-tight lg:text-lg">
          We&apos;re getting close. signups to get early access to Gateway and
          get started on your uninterpreted Rwandan experience
        </div>
      </div>
    </div>
  );
}
