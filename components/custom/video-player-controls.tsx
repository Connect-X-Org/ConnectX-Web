import { PauseIcon, PlayIcon } from "lucide-react";
import type React from "react";
import { Button } from "../ui/button";

type VideoPlayerControlsProps = {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
};

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  size = 40,
  width = 3,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex items-center justify-center">
      <svg height={size} style={{ transform: "rotate(-90deg)" }} width={size}>
        <title>Video progress</title>
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke="#aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke="#ffffff"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          strokeWidth={width}
        />
      </svg>
      <div className="absolute">
        {/* <button
          className="group flex cursor-pointer items-center justify-center"
          onClick={onPlayPause}
          type="button"
        >
          <div className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-[#aaaaaa]">
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </div>
        </button> */}
        <Button
          className="rounded-full bg-transparent text-white hover:bg-transparent hover:text-white"
          onClick={onPlayPause}
          size="icon"
          variant="ghost"
        >
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
