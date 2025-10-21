import {
  ClapperboardIcon,
  PauseIcon,
  PlayIcon,
  Volume2Icon,
  VolumeOffIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

type VideoPlayerControlsProps = {
  duration: number;
  progress: number;
  isMuted: boolean;
  isPaused: boolean;
  onPlayPause: () => void;
  onMute: () => void;
};
// helper to format seconds into mm:ss
// const formatTime = (seconds: number) => {
//   if (!seconds || Number.isNaN(seconds)) return "0:00";
//   const m = Math.floor(seconds / 60);
//   const s = Math.floor(seconds % 60)
//     .toString()
//     .padStart(2, "0");
//   return `${m}:${s}`;
// };

export function HeroVideoControls({
  duration,
  progress,
  isMuted,
  isPaused,
  onPlayPause,
  onMute,
}: VideoPlayerControlsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full" size={"icon"} variant="outline">
          <ClapperboardIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-10 w-60 p-0">
        <div className="grid">
          <div className="m-2 flex items-center gap-1">
            <Progress value={progress} />
            {/* <span className="flex-nowrap text-nowrap">
              {formatTime((progress / 100) * duration)} / {formatTime(duration)}
            </span> */}
          </div>
          <Separator orientation="horizontal" />
          <button
            className="m-2 flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-muted"
            onClick={onPlayPause}
            type="button"
          >
            {isPaused ? (
              <span className="text-sm">Play</span>
            ) : (
              <span className="text-sm">Pause</span>
            )}
            {isPaused ? (
              <PlayIcon className="size-4" />
            ) : (
              <PauseIcon className="size-4" />
            )}
          </button>
          <Separator orientation="horizontal" />
          <button
            className="m-2 flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-muted"
            onClick={onMute}
            type="button"
          >
            {isMuted ? (
              <span className="text-sm">UnMute</span>
            ) : (
              <span className="text-sm">Mute</span>
            )}
            {isMuted ? (
              <VolumeOffIcon className="size-4" />
            ) : (
              <Volume2Icon className="size-4" />
            )}
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
