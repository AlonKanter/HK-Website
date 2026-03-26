"use client";

import { useEffect, useRef, useState } from "react";

type InspectionHeroVideoProps = {
  teaserSrc: string;
  fullSrc: string;
  poster?: string;
  className?: string;
};

export function InspectionHeroVideo({
  teaserSrc,
  fullSrc,
  poster,
  className
}: InspectionHeroVideoProps) {
  const teaserRef = useRef<HTMLVideoElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const teaserVideo = teaserRef.current;
    const fullVideo = fullRef.current;

    if (!teaserVideo || !fullVideo) {
      return;
    }

    let cancelled = false;

    const playVideo = async (video: HTMLVideoElement) => {
      video.muted = true;
      video.defaultMuted = true;

      try {
        const playPromise = video.play();

        if (playPromise) {
          await playPromise;
        }
      } catch {
        // Keep poster/frame visible if autoplay is blocked.
      }
    };

    const handleTeaserEnded = async () => {
      if (cancelled) {
        return;
      }

      fullVideo.currentTime = 0;
      setShowFull(true);
      await playVideo(fullVideo);
    };

    fullVideo.load();
    void playVideo(teaserVideo);

    teaserVideo.addEventListener("ended", handleTeaserEnded);

    return () => {
      cancelled = true;
      teaserVideo.removeEventListener("ended", handleTeaserEnded);
    };
  }, [fullSrc, teaserSrc]);

  return (
    <div className={className}>
      <video
        ref={teaserRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={poster}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          showFull ? "opacity-0" : "opacity-100"
        }`}
      >
        <source src={teaserSrc} type="video/mp4" />
      </video>

      <video
        ref={fullRef}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          showFull ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={fullSrc} type="video/mp4" />
      </video>
    </div>
  );
}
