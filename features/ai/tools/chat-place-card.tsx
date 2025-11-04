import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import type { TPlace } from "@/types";

export default function ChatPlaceCard({
  place,
  className,
}: {
  place: TPlace;
  className?: string;
}) {
  return (
    <Link
      className={cn("group col-span-2 lg:col-span-1", className)}
      href={`/tourism/${place.slug}`}
      key={place.id}
      target="_blank"
    >
      <AspectRatio
        className="overflow-hidden rounded-sm bg-muted"
        ratio={16 / 9}
      >
        <Image
          alt={place.title}
          className="h-full w-full rounded-sm object-cover duration-300 ease-in hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={place.src}
        />
      </AspectRatio>

      <div className="mt-1 flex flex-col gap-1">
        <div className="relative line-clamp-1 w-fit text-lg tracking-tight">
          <span>{place.title}</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Located at : {place.place}
        </p>
        <p>
          <span className="text-muted-foreground">From</span>{" "}
          <span className="font-medium">$640/day</span>
        </p>
      </div>
    </Link>
  );
}
