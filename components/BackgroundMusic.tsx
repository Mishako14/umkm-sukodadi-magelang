"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {
      console.log("Autoplay diblokir browser");
    });
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/musik/backsound.mp3" type="audio/mpeg" />
    </audio>
  );
}