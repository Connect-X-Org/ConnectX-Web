import Link from "next/link";
import { StripedPattern } from "../custom/striped-pattern";
import { Button } from "../ui/button";
export default function Cta() {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-md p-4 md:p-6 lg:p-10">
      <StripedPattern className="absolute inset-0 h-full w-full stroke-[0.3] [stroke-dasharray:8,4]" />
      <div className="container relative z-10 rounded-xl bg-background py-16 lg:py-20 dark:bg-black">
        <div className="flex flex-col gap-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-center font-semibold text-2xl capitalize md:text-3xl lg:text-4xl">
              Your Gateway to Rwanda
            </h2>
            <p className="text-primary/85 text-xl leading-7">
              Discover trusted services, connect with vibrant communities, and
              explore destinations that make life in Rwanda seamless and
              memorable.
            </p>
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 px-6 md:flex-row md:items-center md:gap-6">
            <Button asChild className="w-full md:w-fit" size={"lg"}>
              <Link href="/restaurants">Explore our services</Link>
            </Button>
            <Button asChild className="w-full md:w-fit" size={"lg"}>
              <Link href="/housing">Reserve your stay</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
