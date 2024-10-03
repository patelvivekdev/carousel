"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
import { CarouselItem } from "../page";

export default function Carousel({ videos }: { videos: CarouselItem[] }) {
  // State
  const [startIndex, setStartIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Refs
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Play/pause video on change
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === 0) {
        if (isPlaying) {
          video?.play();
        } else {
          video?.pause();
        }
      } else {
        video?.pause();
      }
    });
  }, [startIndex, isPlaying]);

  // Next/prev video
  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = useCallback(() => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  }, [videos.length]);

  // Play/pause
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Mute/unmute
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
    videoRefs.current.forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  }, [isMuted]);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case " ":
          event.preventDefault();
          togglePlayPause();
          break;
        case "m":
        case "M":
          toggleMute();
          break;
      }
    },
    [handlePrev, handleNext, togglePlayPause, toggleMute]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.focus();
    }
  }, []);

  const getVisibleVideos = useMemo(() => {
    const visibleIndices = [];
    for (let i = 0; i < 5; i++) {
      visibleIndices.push((startIndex + i) % videos.length);
    }
    return visibleIndices.map((index) => videos[index]);
  }, [startIndex, videos]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Video carousel"
      className="bg-cozey-Fog-Balanced w-full mx-auto flex flex-col gap-4 pt-8 pl-4 pb-10 lg:pl-20 lg:pt-10 lg:pb-20"
    >
      <div className="flex flex-row items-center justify-between py-3 lg:py-9">
        <h2 className="text-base lg:text-lg text-cozey-Midnight-Balanced font-semibold">
          A day in the life
        </h2>
        <div className="flex flex-row gap-5 pr-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-white bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Previous video"
          >
            <Image
              src="/chevron-left.svg"
              alt="Previous video"
              width={24}
              height={24}
            />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Next video"
          >
            <Image
              src="/chevron-right.svg"
              alt="Next video"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex flex-row gap-5 transition-transform duration-300 ease-in-out">
          {getVisibleVideos.map((video, index) => (
            <div key={video.id} className="flex">
              <div className="relative">
                <div
                  className={`relative w-[300px] h-[500px]  rounded-lg overflow-hidden  ${
                    index === 0
                      ? "border-cozey-Midnight-Bold border-4 border-solid"
                      : ""
                  }  ${index === 0 ? "shadow-xl" : "shadow-lg"}`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.src}
                    className="w-full h-full object-cover shadow-lg"
                    loop
                    muted={isMuted}
                    playsInline
                  />
                  {index === 0 && (
                    <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 bg-white bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        <Image
                          src={isMuted ? "/sound-off.svg" : "/sound-on.svg"}
                          alt={isMuted ? "Unmute" : "Mute"}
                          width={32}
                          height={32}
                        />
                      </button>
                      <button
                        onClick={togglePlayPause}
                        className="w-8 h-8 bg-white bg-opacity-50 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        <Image
                          src={isPlaying ? "/pause.svg" : "/play.svg"}
                          alt={isPlaying ? "Pause" : "Play"}
                          width={32}
                          height={32}
                        />
                      </button>
                    </div>
                  )}
                </div>
                <p
                  className={`mt-2 text-left text-gray-600 text-sm font-medium truncate
                  ${index === 0 ? "font-bold" : "font-normal"}
                  `}
                >
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
