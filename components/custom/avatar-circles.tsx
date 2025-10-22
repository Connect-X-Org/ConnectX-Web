/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Avatar = {
  imageUrl: string;
  profileUrl: string;
};
type AvatarCirclesProps = {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
};

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("-space-x-4 z-10 flex rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          href={url.profileUrl}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={`Avatar ${index + 1}`}
            className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
            height={40}
            key={index}
            src={url.imageUrl}
            width={40}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center font-medium text-white text-xs hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href="/"
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
