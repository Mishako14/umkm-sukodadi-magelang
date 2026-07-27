"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  // Play sekali saat komponen dimuat
  useEffect(() => {
    audioRef.current?.play().catch(() => {
      console.log("Autoplay diblokir browser");
    });
  }, []);

  // Ubah status mute tanpa memanggil play lagi
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} autoPlay loop>
        <source src="/musik/backsound.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={() => setMuted(!muted)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 p-3 text-white shadow-lg transition hover:scale-110 hover:bg-green-700"
      >
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  );
}