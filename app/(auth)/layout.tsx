export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import cImg from "@/public/images/d.avif";
import logo from "@/public/logo.png";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-8">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link className="flex items-center gap-2 font-medium" href="/">
            <div className="flex size-8 items-center justify-center rounded-md bg-brand-500 text-black">
              <Image alt="logo" height={24} src={logo} width={24} />
            </div>
            <span className="font-semibold text-xl">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs px-2 md:px-0">{children}</div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        <Image
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105 dark:grayscale"
          placeholder="blur"
          src={cImg}
        />
      </div>
    </div>
  );
}
