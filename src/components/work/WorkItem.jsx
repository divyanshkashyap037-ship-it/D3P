import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons";

const CSTag = () => (
  <span className="absolute top-[49px] left-[120px] z-10 flex items-center gap-[10px] rounded-[20px] bg-[#fe3c01] px-[10px] py-[12px] opacity-80 tab:top-[45px] tab:left-[67px] phone:top-[38px] phone:left-6">
    <span
      className="text-[11px] text-white tab:text-[13px]"
      style={{ fontFamily: "var(--font-sans)", fontWeight: 500, margin: 0, whiteSpace: "pre" }}
    >
      Case Study
    </span>
  </span>
);

const WorkItem = ({ work }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ y: work.type === "video" ? 70 : 74 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        to={`/work/${work.slug}`}
        data-cursor="enter"
        className="group relative flex w-[1200px] flex-row items-start justify-start gap-[25px] px-[100px] pt-[30px] pb-[15px] no-underline tab:px-[50px] phone:w-[342px] phone:gap-[15px] phone:px-4"
      >
        <div
          className="pointer-events-none relative aspect-[1.66111] w-[60%] phone:aspect-[1.44186]"
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
              style={{ backgroundColor: "rgb(224, 224, 224)", objectPosition: "50% 50%" }}
            />
          ) : (
            <img
              src={work.cover}
              alt={work.title}
              draggable={false}
              className="block h-full w-full rounded-[20px] object-cover"
              style={{ backgroundColor: "rgb(224, 224, 224)", objectPosition: "center" }}
            />
          )}
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
          <div className="flex w-full flex-col items-start gap-[5px]">
            <p
              className="w-[70%] text-black phone:w-full"
              style={{ fontFamily: "var(--font-sans)", fontSize: 26, fontWeight: 600, lineHeight: "1em", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
            >
              {work.title}
            </p>
            <p
              className="text-black phone:whitespace-pre-wrap phone:w-full"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre", wordBreak: "break-word" }}
            >
              {work.client}
            </p>
          </div>
          <div className="flex w-full flex-row items-end justify-between phone:justify-end phone:gap-[10px]">
            <p
              className="text-[#ababab] phone:hidden"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
            >
              {work.tags.join("\n")}
            </p>
            <span className="relative flex h-10 w-10 items-center justify-center gap-[10px] overflow-hidden rounded-[20px] bg-black tab:transition-all tab:duration-300 tab:ease-out tab:group-hover:h-[45px] tab:group-hover:w-[94px]">
              <ArrowIcon className="h-6 w-6" />
            </span>
          </div>
        </div>
        {work.cs && <CSTag />}
      </Link>
    </motion.div>
  );
};

export default WorkItem;
