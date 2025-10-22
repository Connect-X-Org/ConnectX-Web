import { AvatarCircles } from "@/components/custom/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },

  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];
export default function OtherWhoJoined() {
  return (
    <div className="mx-auto max-w-xl pb-10">
      <div className="flex items-center justify-center gap-4">
        <AvatarCircles avatarUrls={avatars} numPeople={99} />
        <p>Join +1,00 others on the waitlist</p>
      </div>
    </div>
  );
}
