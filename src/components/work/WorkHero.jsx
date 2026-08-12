import { useEffect, useRef } from "react";

const WorkHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      id="top"
      className="relative mx-auto flex aspect-[2.4] w-full max-w-[1500px] flex-col items-center gap-[10px] overflow-clip bg-white phone:aspect-[1.3] phone:pt-[25px]"
    >
      <video
        ref={videoRef}
        src="/media/work-hero.mp4"
        poster="/media/work-hero-poster.jpg"
        loop
        muted
        playsInline
        preload="none"
        className="block h-full w-full object-contain"
        style={{ cursor: "auto", borderRadius: 0, backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" }}
      />
    </section>
  );
};

export default WorkHero;
