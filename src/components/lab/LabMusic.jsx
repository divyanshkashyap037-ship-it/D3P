import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LabWindow, { TrafficLights } from "./LabWindow";
import { PauseIcon, PlayIcon } from "./LabIcons";

const LabMusic = ({ onClose, onFocus, zIndex, dragRef }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const toggle = () => setPlaying((p) => !p);

  useEffect(() => {
    const v = videoRef.current;
    const a = audioRef.current;
    if (playing) {
      a?.play().catch(() => {});
      v?.play().catch(() => {});
    } else {
      a?.pause();
      v?.pause();
    }
  }, [playing]);

  return (
    <LabWindow
      desk={{ left: 309, top: 86, width: 320, height: 520 }}
      phoneW={320}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      dragRef={dragRef}
    >
      <TrafficLights onClose={onClose} />
      <div className="flex w-full items-center justify-between" style={{ padding: "15px 0px 10px" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: "0.9em",
            color: "#000",
          }}
        >
          Music
        </span>
        <button
          type="button"
          onClick={toggle}
          className="cursor-pointer appearance-none bg-transparent p-0"
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 28,
              fontWeight: 400,
              lineHeight: "0.9em",
              color: "#000",
            }}
          >
            {playing ? "Pause" : "Play"}
          </span>
        </button>
      </div>
      <motion.div
        className="relative w-full cursor-pointer overflow-hidden"
        style={{ aspectRatio: "1 / 1", borderRadius: 5 }}
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={
          playing
            ? { rotate: { duration: 5, ease: "linear", repeat: Infinity } }
            : { duration: 0.4 }
        }
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src="/media/lab-music.mp4"
          poster="/media/lab-music-poster.png"
          muted
          playsInline
          className="absolute inset-0 block h-full w-full select-none object-cover"
        />
        <audio ref={audioRef} src="/media/lab-music.mp3" preload="auto" loop={false} />
      </motion.div>
      <button
        type="button"
        onClick={toggle}
        className="flex w-min cursor-pointer appearance-none items-center bg-transparent p-0"
        style={{ padding: 5, gap: 3, borderRadius: 5 }}
      >
        {playing ? <PauseIcon size={15} color="#000" /> : <PlayIcon size={15} color="#000" />}
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "1em",
            color: "#000",
          }}
        >
          {playing ? "Pause" : "Play"}
        </span>
      </button>
      <div className="flex w-full flex-col items-start" style={{ padding: "8px 5px 0px", gap: 2 }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "1.1em",
            color: "#000",
          }}
        >
          I Thought I Saw Your Face Today
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 400,
            lineHeight: "1.1em",
            color: "#00000099",
          }}
        >
          She &amp; Him
        </span>
      </div>
    </LabWindow>
  );
};

export default LabMusic;
