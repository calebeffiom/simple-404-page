"use client"
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  return (
    <section className="h-screen w-screen relative overflow-hidden">
      <audio ref={audioRef} src="/audio/farewell.mp3" loop />
      <div className="absolute w-full mx-auto aspect-video overflow-hidden">
        <img
          src="https://i.ibb.co/LGNTN6W/image-2.jpg"
          alt="Van parked under a starry night sky"
          className="w-full h-full object-cover object-bottom" />
      </div>
      <style>{`
        @keyframes shooting-star {
          0%   { transform: rotate(-30deg) translateX(-400px); opacity: 0; }
          5%   { opacity: 1; }
          20%  { transform: rotate(-30deg) translateX(160vw); opacity: 0.5; }
          100% { transform: rotate(-30deg) translateX(160vw); opacity: 0; }
        }
      `}</style>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '43%',
        width: '50px',
        height: '0.5px',
        borderRadius: '100px',
        background: 'linear-gradient(to right, transparent 0%, rgba(200, 220, 255, 0.45) 25%, rgba(230, 242, 255, 0.6) 75%, #ffffffae 100%)',
        boxShadow: '0 0 8px 1px rgba(200,225,255,0.55), 0 0 22px 5px rgba(180,210,255,0.2)',
        animation: 'shooting-star 10s ease-out infinite',
        animationDuration: '10s',
        zIndex: 40,
        pointerEvents: 'none',
      }} />


      <div style={{
        position: 'absolute',
        top: '30%',
        left: '45%',
        width: '100px',
        height: '0.5px',
        borderRadius: '100px',
        background: 'linear-gradient(to right, transparent 0%, rgba(200,220,255,0.1) 25%, rgba(230, 242, 255, 0.6) 75%, #ffffffab 100%)',
        boxShadow: '0 0 8px 1px rgba(200,225,255,0.55), 0 0 22px 5px rgba(180,210,255,0.2)',
        animation: 'shooting-star 7s ease-out infinite',
        animationDuration: '6s',
        zIndex: 40,
        pointerEvents: 'none',
      }} />

      <div className="absolute bottom-[-30] h-[360px] right-0 rotate-[5deg]">

        <div className="relative w-full h-full">
          <h1
            className="absolute left-[38%] top-[10%] font-display text-[50px] text-extrabold text-[#fff]/40 font-display"
          >
            404
          </h1>
          <p className="absolute left-[28%] top-[38%] font-display text-[#fff]/40 text-md">Oops! I think you're lost!</p>
          <p className="absolute left-[22%] top-[60%] font-display text-[#fff]/40 text-md">Well... just enjoy the view then :)</p>
          <img src="/image/sig3.png" alt="" className="w-full h-full object-cover object-bottom" />
        </div>
      </div>
      <button
        onClick={toggleAudio}
        className="absolute bottom-8 left-8 z-50 flex items-center justify-center rounded-full  p-4 text-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </section>
  );
}


{/* <div className="relative top-60 left-80 z-30 [transform:perspective(1000px)_rotateX(30deg)]">
        <h1
          className="font-display text-[50px] text-extrabold text-[#fff]/40 font-display"
        >
          404
        </h1>
        <p className="font-display text-[#fff]/40 ">Oops! I think you're lost!</p>

        <p className="font-display text-[#fff]/40 ">Well... just enjoy the view then :)</p>
      </div> */}
{/* [transform:perspective(40px)_rotateX(4deg)] */ }
