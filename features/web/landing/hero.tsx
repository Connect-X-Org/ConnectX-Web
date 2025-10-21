import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroVideoControls } from "./video-controls";

export default function Hero() {
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When metadata loads, get duration
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setVideoProgress((video.currentTime / video.duration) * 100);
    };

    // Update progress as video plays
    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        setVideoProgress((video.currentTime / video.duration) * 100); // percent (0–100)
      }
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col bg-black">
      <div className="relative flex aspect-video h-[calc(100vh-59px)] max-h-[calc(100vh-59px)] w-full lg:h-full lg:max-h-[calc(100vh-40px)] [&_img]:object-cover">
        <div className="relative h-full w-full">
          <video
            autoPlay
            className="h-full w-full object-cover"
            loop
            muted={isMuted}
            preload="auto"
            ref={videoRef}
          >
            <source
              src="https://ik.imagekit.io/leco/videos/hero-b.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-[3]">
        <HeroVideoControls
          duration={videoDuration}
          isMuted={isMuted}
          isPaused={isPaused}
          onMute={toggleMute}
          onPlayPause={togglePlayPause}
          progress={videoProgress}
        />
      </div>

      <div className="absolute z-[2] flex h-full w-full items-center overflow-hidden pb-6 lg:absolute lg:h-full lg:w-full lg:items-center lg:pb-0">
        <div className="container mt-4 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-5">
          <span className="text-white uppercase lg:col-span-6 lg:col-start-1">
            Welcome
          </span>
          <div className="col-span-full flex w-full flex-col gap-x-6 gap-y-8 md:flex-row lg:col-span-6 lg:col-start-1 lg:flex-col">
            <div className="flex w-full flex-col justify-start gap-y-2">
              <h1 className="pr-6 font-semibold text-2xl text-white uppercase leading-tight tracking-tight lg:pr-0 lg:text-4xl">
                Visiting Rwanda or making it home? We help make your journey
                easier. Find trusted services and connect with communities
              </h1>
            </div>
            <div className="flex w-full flex-col justify-start gap-y-2">
              <div className="mt-4 flex flex-col flex-wrap items-start gap-5 md:mt-0 md:flex-row md:items-center md:gap-6 lg:mt-16">
                <Button
                  className="bg-white text-black hover:bg-white/90"
                  size={"lg"}
                >
                  Explore our services
                </Button>
                <Button
                  className="bg-white text-black hover:bg-white/90"
                  size={"lg"}
                >
                  Reserve your stay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
