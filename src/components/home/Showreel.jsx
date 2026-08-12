import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const Showreel = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.muted) {
      v.muted = false;
      setMuted(false);
    } else {
      v.muted = true;
      setMuted(true);
    }
  };

  return (
    <section id="showreelmain" className="relative flex w-full flex-col items-center overflow-visible">
      <div className="relative flex aspect-[1.84615] w-full max-w-[1500px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            src="/media/CODE.mp4"
            loop
            playsInline
            preload="auto"
            onPlaying={() => {
              setPlaying(true);
              setStarted(true);
            }}
            className="block h-full w-full border-[0px] object-fill"
            style={{ backgroundColor: "rgb(224, 224, 224)", borderRadius: 0 }}
          />
        </motion.div>
        <motion.button
          data-cursor="play"
          onClick={play}
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 0 : 1, pointerEvents: started ? "none" : "auto" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ mixBlendMode: "difference" }}
          className="absolute top-1/2 left-1/2 z-[1] flex min-w-0 flex-col items-center overflow-clip rounded-[70px] border-[5px] border-white bg-transparent px-[30px] pt-[18px] pb-[26px] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-sans)", fontSize: 50, fontWeight: 600, lineHeight: "1em", whiteSpace: "pre" }}
          >
            play
          </span>
        </motion.button>
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={muted ? "Play video with sound" : "Pause video"}
          className="absolute right-[14px] bottom-[14px] z-[2] flex size-[44px] cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-colors duration-200 hover:bg-black"
        >
          {muted || !playing ? <VolumeX style={{ width: 18, height: 18 }} /> : <Volume2 style={{ width: 18, height: 18 }} />}
        </button>
      </div>
    </section>
  );
};

export default Showreel;