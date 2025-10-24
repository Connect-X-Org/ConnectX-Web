import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icon.png";
export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="relative flex h-full flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white">
        <div className="relative mb-8">
          <Image
            alt="logo"
            className="size-10 rounded-lg"
            height={40}
            src={logo}
            width={40}
          />
        </div>
        <h1 className="font-normal text-8xl">404</h1>
        <p className="mb-8 text-sm">Need help? Visit the docs</p>
        <div className="flex flex-col items-center gap-6">
          <Link
            className="border-2 border-black bg-white px-4 py-1.5 text-black text-sm uppercase shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 hover:shadow-sm md:px-8 dark:border-stone-100 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] dark:hover:shadow-sm"
            href="/"
          >
            Go to home page
          </Link>
        </div>
      </div>
    </section>
  );
}
