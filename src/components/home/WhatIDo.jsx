import { motion } from "framer-motion";

const COLUMNS = [
  {
    id: "01",
    top: "digital (",
    bot: "experiences",
    desc: "Design and build interactive systems that work. I bridge the gap between high-level strategy and technical reality.",
    items: [
      "Brand Identity",
      "Experiential Design",
      "2D & 3D Animation",
      "Environments & Spatial Design",
      "Interactive Installations",
      "Touchscreen & Website",
    ],
  },
  {
    id: "02",
    top: "creative (",
    bot: "execution",
    desc: "Turning complex concepts into executable realities through a deep mastery of motion, 3D, and interactive pipelines.",
    items: [
      "Art Direction",
      "Concept Development",
      "Brand Systems",
      "Motion Graphics",
      "Interactive UI/UX",
      "Post-Production",
      "3D Pipelines",
    ],
  },
  {
    id: "03",
    top: "lead (",
    bot: "strategy",
    desc: "Aligning technical teams with creative vision. I lead designers and developers to ensure the narrative scales.",
    items: [
      "Project Pitching & Vision",
      "Storytelling & Narrative",
      "End-to-end Delivery",
      "Team Leadership",
      "Technical Feasibility & Strategy",
      "Developer Collaboration",
    ],
  },
];

const listAnim = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.44, 0, 0.56, 1] },
};

const circleAnim = {
  initial: { opacity: 0, x: -20, scale: 0.5 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.44, 0, 0.56, 1] },
};

const Column = ({ col }) => (
  <div className="flex w-full flex-row items-start gap-10 overflow-hidden tab:gap-[60px] desk:gap-[80px]">
    <div className="flex w-full flex-1 flex-col items-center gap-0">
      <div className="flex w-full flex-row items-center gap-[2px]">
        <p
          className="text-[30px] text-black tab:text-[50px]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500, lineHeight: "0.9em", margin: 0, whiteSpace: "pre" }}
        >
          {col.top}
        </p>
        <motion.div
          {...circleAnim}
          className="relative aspect-square h-[30px] w-[30px] overflow-clip rounded-full tab:h-[50px] tab:w-[50px]"
        >
          <img src="/media/whatido-1.png" alt="" draggable={false} className="block h-full w-full object-cover" />
        </motion.div>
        <p
          className="text-[30px] text-black tab:text-[50px]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500, lineHeight: "0.9em", margin: 0, whiteSpace: "pre" }}
        >
          )
        </p>
      </div>
      <div className="flex w-full flex-row items-center gap-[10px]">
        <p
          className="text-[30px] text-black tab:text-[50px]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500, lineHeight: "0.9em", margin: 0, whiteSpace: "pre" }}
        >
          {col.bot}
        </p>
      </div>
    </div>
    <motion.div {...listAnim} className="flex h-full w-full flex-1 flex-col items-start gap-0">
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, letterSpacing: "0.1px", color: "#000", margin: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, color: "rgb(11, 29, 255)" }}>({col.id}) </span>
        <span style={{ color: "rgb(11, 29, 255)" }}> </span>
        {col.desc}
      </p>
      <br />
      {col.items.map((item, i) => (
        <p key={item} style={{ fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: "0.1px", color: "#000", margin: 0 }}>
          ({col.id}.{String(i + 1).padStart(2, "0")}) {item}
        </p>
      ))}
    </motion.div>
  </div>
);

const WhatIDo = () => (
  <section id="whatido" className="relative flex w-full flex-col items-center gap-[80px] overflow-clip pt-[60px] tab:pt-[120px]" style={{ backgroundColor: "#ff6200" }}>
    <div className="relative flex w-full max-w-[1500px] flex-col items-start gap-[20px] px-6 tab:gap-[30px] tab:pl-[35px] desk:gap-[50px]">
      <h2
        className="text-[60px] text-black tab:text-[129px]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1em", margin: 0 }}
      >
        what i do <span style={{ color: "rgb(11, 29, 255)" }}>*</span>
      </h2>
    </div>
    <div className="relative flex w-full flex-col items-start gap-[10px] pl-0 tab:pl-[160px] desk:pl-[200px]">
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "#000", margin: 0 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, color: "rgb(11, 29, 255)" }}>*</span>
        I approach design by blending creativity, technology, and storytelling. I use visuals, motion, and interaction to turn ideas into experiences that feel meaningful, engaging, and distinctly mine.
      </p>
    </div>
    <div className="relative flex w-full max-w-[1500px] flex-row items-start justify-between px-[18px] pb-[60px] tab:px-[60px] tab:pl-[35px] tab:pb-[100px]">
      <div className="sticky top-[50px] z-[1] block aspect-[0.943038] w-[27%] overflow-clip rounded-[20px]">
        <video
          src="/media/whatido.mp4"
          poster="/media/whatido-poster.jpg"
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="block h-full w-full object-cover"
        />
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center gap-20 pl-0 tab:gap-[120px] tab:pl-[160px] desk:pl-[200px]">
        {COLUMNS.map((col) => (
          <Column key={col.id} col={col} />
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
