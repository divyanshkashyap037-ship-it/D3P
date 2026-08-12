import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WORKS = [
  {
    slug: "prodash",
    title: "ProDash",
    client: "Productivity Dashboard",
    cover: "/media/project-prodash.png",
    type: "image",
    tags: ["React", "Redux Toolkit", "React Router", "Local Storage"],
  },
  {
    slug: "fintrack",
    title: "FinTrakaro",
    client: "Finance Management Dashboard",
    cover: "/media/project-fintrack.png",
    type: "image",
    tags: ["React", "State Management", "CRUD", "Data Persistence"],
  },
  {
    slug: "sherstore",
    title: "SherStore",
    client: "E-Commerce Website",
    cover: "/media/project-sherstore.png",
    type: "image",
    tags: ["React", "Routing", "E-Commerce", "Local Storage"],
  },
  {
    slug: "dreamcore-tts",
    title: "Dreamcore TTS",
    client: "Text-to-Speech Web App",
    cover: "/media/project-ttsdream.png",
    type: "image",
    tags: ["Web APIs", "Asynchronous JS", "Audio Controls", "Experimental UI"],
  },
];

const TickerItem = () => (
  <h1
    className="pr-[10px] whitespace-pre text-black text-[60px] tab:text-[129px] desk:text-[166px]"
    style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1em", margin: 0 }}
  >
    featured work<span style={{ color: "rgb(254, 60, 1)" }}>*</span>{"   "}
  </h1>
);

const FeaturedTicker = () => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative w-full overflow-hidden"
  >
    <motion.div
      className="flex w-max items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 26, ease: "linear", repeat: Infinity }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <TickerItem key={i} />
      ))}
    </motion.div>
  </motion.div>
);

const WorkItem = ({ work }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ y: 74 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        to={`/work/${work.slug}`}
        data-cursor="enter"
        className="relative flex w-[1200px] flex-row items-start justify-center gap-[25px] px-[100px] pt-[30px] pb-[15px] no-underline tab:px-[50px] phone:w-[342px] phone:gap-[15px] phone:px-4"
      >
        <div
          className="pointer-events-none relative aspect-[1.66667] w-[60%] phone:aspect-[1.44186]"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => {
            const v = videoRef.current;
            if (v) {
              v.pause();
              v.currentTime = 0;
            }
          }}
        >
          {work.type === "video" ? (
            <video
              ref={videoRef}
              src={work.cover}
              poster={work.poster}
              loop
              muted
              playsInline
              preload="none"
              className="block h-full w-full rounded-[20px] object-cover"
              style={{ backgroundColor: "rgb(224, 224, 224)" }}
            />
          ) : (
            <img
              src={work.cover}
              alt={work.title}
              draggable={false}
              className="block h-full w-full rounded-[20px] object-cover"
              style={{ backgroundColor: "rgb(224, 224, 224)" }}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between self-stretch">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <p
              className="w-[70%] text-black phone:w-full"
              style={{ fontFamily: "var(--font-sans)", fontSize: 26, fontWeight: 600, lineHeight: "1em", margin: 0 }}
            >
              {work.title}
            </p>
            <p
              className="text-black phone:whitespace-pre-wrap phone:w-full"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
            >
              {work.client}
            </p>
          </div>
          <div className="flex w-full flex-row items-end justify-between phone:justify-end phone:gap-[10px]">
            <p
              className="text-[#ababab]"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
            >
              {work.tags.join("\n")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Featured = () => (
  <section id="featured" className="relative flex w-full flex-col items-start justify-center gap-0 overflow-clip bg-white pt-[130px] pb-[80px] tab:pt-[50px] tab:pb-[60px] phone:pt-[30px] phone:pb-0">
    <div className="relative flex w-full flex-col items-center gap-0">
      <FeaturedTicker />
      <div className="relative z-[1] flex w-full max-w-[1500px] flex-col items-start gap-10 px-6 pt-[50px] pl-[200px] tab:pt-[30px] phone:items-center phone:pt-[20px] phone:pl-6">
        <p
          className="relative h-[28px] w-[418px] max-w-[540px] text-black phone:w-full"
          style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0 }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, color: "rgb(254, 60, 1)" }}>*</span>
          Ideas that survived the jump from the brain to the screen. Multi-disciplinary work carried from concept to
          completion.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center gap-0 overflow-hidden px-6">
        <div className="flex w-full max-w-[1500px] flex-col items-start gap-[5px] pt-[100px] tab:pt-[80px] tab:px-[50px] phone:pt-[60px] phone:px-4">
          <div className="relative h-[1px] w-full bg-[#ababab]" />
        </div>
        {WORKS.map((work, i) => (
          <div key={work.slug} className="flex w-full flex-col items-center gap-0">
            <WorkItem work={work} />
            {i < WORKS.length - 1 && <div className="relative h-[1px] w-full bg-[#ababab]" />}
          </div>
        ))}
        <div className="flex w-full flex-row items-center justify-center gap-[10px] pt-[100px] pb-[60px] tab:pt-[80px] phone:pt-[60px] phone:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 65, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              to="/work"
              data-cursor="enter"
              className="group relative flex w-min items-center justify-center gap-[10px] overflow-hidden rounded-[28px] border-[3px] border-black no-underline"
            >
              <span
                className="relative z-[1] px-[25px] pb-[4px] text-black"
                style={{ fontFamily: "var(--font-sans)", fontSize: 25, fontWeight: 500, lineHeight: "50px", whiteSpace: "pre" }}
              >
                view all work
              </span>
              <div className="absolute inset-0 z-0 h-0 bg-[#fe3c01] transition-all duration-[350ms] ease-out group-hover:h-full" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
