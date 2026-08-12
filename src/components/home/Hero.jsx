import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const ARTS = [
  {
    name: "KeycapArt",
    src: "/media/hero-keycap.jpg",
    cls: "w-[42%] bottom-[117px] left-[16px] aspect-[1.07647] tab:w-[24%] tab:bottom-[169px] tab:left-[26px] tab:aspect-[1.06829] desk:w-[21%] desk:bottom-[72px] desk:left-[35px] desk:aspect-[1.06883]",
  },
  {
    name: "BlueArt",
    src: "/media/hero-blue.jpg",
    cls: "w-[29%] top-[119px] left-[31px] aspect-[0.714286] tab:w-[20%] tab:top-[92px] tab:left-[47px] tab:aspect-[0.712] desk:w-[15%] desk:top-[35px] desk:left-[89px] desk:aspect-[0.713287]",
  },
  {
    name: "LogoArt",
    src: "/media/hero-logo.jpg",
    cls: "w-[38%] top-[51px] right-[39px] aspect-[1.38] tab:w-[23%] tab:top-[109px] tab:right-[35px] desk:w-[21%] desk:top-[43px] desk:right-[93px]",
  },
  {
    name: "CoffeeArt",
    src: "/media/hero-coffee.jpg",
    cls: "w-[28%] bottom-[50px] right-[42px] aspect-[0.724138] tab:w-[17%] tab:bottom-[90px] tab:right-[78px] desk:w-[13%] desk:bottom-[30px] desk:right-[104px]",
  },
  {
    name: "ModuleArt",
    src: "/media/hero-module.jpg",
    cls: "w-[26%] top-[183px] right-[26px] aspect-[1.01802] tab:w-[16%] tab:top-[397px] tab:right-[31px] tab:aspect-[1.02098] desk:w-[13%] desk:top-[45%] desk:right-[32px] desk:aspect-[1.02273] desk:-translate-y-1/2",
  },
];

const useCanDrag = () => {
  const [canDrag, setCanDrag] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 810px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 810px)");
    const onChange = (e) => setCanDrag(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return canDrag;
};

const DraggableArt = ({ art, index, heroRef }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const canDrag = useCanDrag();

  return (
    <motion.div
      className={`absolute mix-blend-multiply ${art.cls}`}
      style={{ x, y }}
      data-cursor={canDrag ? "drag" : undefined}
      drag={canDrag}
      dragConstraints={heroRef}
      dragMomentum
      dragTransition={{ type: "inertia", bounceDamping: 30, bounceStiffness: 400, delay: 0 }}
      onMouseDown={(e) => e.preventDefault()}
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 3.4 + index * 0.4 }}
    >
      <div className="pointer-events-none h-full w-full">
        <img
          src={art.src}
          alt={art.name}
          draggable={false}
          className="h-full w-full object-cover select-none"
        />
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-clip bg-white"
    >
      <div
        className="relative aspect-[0.671053] w-[459px] tab:aspect-[0.915638] tab:w-[801px] desk:aspect-[2.16867] desk:max-w-[1350px] desk:w-[875px]"
      >
        <video
          src="/media/hero.mp4"
          className="block h-full w-full object-contain"
          autoPlay
          muted
          playsInline
          preload="metadata"
        />
      </div>
      {ARTS.map((art, i) => (
        <DraggableArt key={art.name} art={art} index={i} heroRef={heroRef} />
      ))}
    </section>
  );
};

export default Hero;
