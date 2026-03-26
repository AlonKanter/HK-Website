"use client";

import { useEffect, useRef, useState } from "react";

type AutoplayVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  preload?: "none" | "metadata" | "auto";
};

export function AutoplayVideo({
  src,
  poster,
  className,
  controls = false,
  loop = true,
  autoPlay = true,
  preload = "auto"
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(controls);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let cancelled = false;

    const tryPlay = async () => {
      if (!autoPlay) {
        if (!cancelled) {
          setShowControls(controls);
        }

        return;
      }

      try {
        video.muted = true;
        video.defaultMuted = true;

        const playPromise = video.play();

        if (playPromise) {
          await playPromise;
        }

        if (!cancelled) {
          setShowControls(controls);
        }
      } catch {
        if (!cancelled) {
          setShowControls(true);
        }
      }
    };

    const handleCanPlay = () => {
      void tryPlay();
    };

    video.addEventListener("canplay", handleCanPlay);
    void tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [autoPlay, controls, src]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      muted
      loop={loop}
      playsInline
      preload={preload}
      poster={poster}
      controls={showControls}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
