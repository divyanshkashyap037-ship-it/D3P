import { motion } from "framer-motion";

const BLOCKS = [
  {
    id: "01",
    title: "versatility",
    body: "I work across a range of creative media with deep fluency, moving from brief to fully realized outcome with clarity and control. I don't just stay in one box (After Effects, Blender, Framer, AI workflow, whatever helps tell the story better and faster). That depth means I can take something abstract in my head and build it end to end, with zero loss in translation from brain to screen.",
  },
  {
    id: "02",
    title: "execution",
    body: "Design is more than just making things look cool. My work is grounded in brand strategy and experience storytelling, shaping ideas into digital experiences through motion and interaction. This ensures every project is both purposeful, built to tell a story, and visually engaging, acting as a bridge that translates brand intent into an experience people can see, feel, and navigate.",
  },
  {
    id: "03",
    title: "stewardship",
    body: "I see leadership as both craft and philosophy. I set direction through cognitive thinking, strategic planning, and storytelling, then ensure we reach it through hands-on expertise. I distribute work intentionally around each team member's strengths and growth goals, not just to deliver projects, but to build more capable, autonomous teams with every outcome.",
  },
];

const DESK_ITEMS = [
  { id: "04", img: "/media/about-laptop.png", cls: "w-[200px] tab:w-[280px] desk:w-[400px]", aspect: "1.39821", layout: "flex-start items-start", numPos: "numberTop", gap: 10 },
  { id: "05", img: "/media/about-cap.png", cls: "w-[200px] tab:w-[280px] desk:w-[400px]", aspect: "1.39821", layout: "flex-end items-end", numPos: "numberBottom", gap: 0 },
  { id: "06", img: "/media/about-cap2.png", cls: "w-[155px] tab:w-[218px] desk:w-[311px]", aspect: "0.77707", layout: "flex-end items-end", numPos: "numberBefore", gap: 5 },
  { id: "07", img: "/media/about-ipad.png", cls: "w-[130px] tab:w-[186px] desk:w-[258px]", aspect: "0.737762", layout: "flex-start items-start", numPos: "numberAfter", gap: 0 },
  { id: "08", img: "/media/about-dji.png", cls: "w-[80px] tab:w-[109px] desk:w-[157px]", aspect: "0.437063", layout: "flex-end items-end", numPos: "numberBefore", gap: 0 },
];

const DeskItem = ({ item }) => (
  <motion.div
    initial={{ scale: 0.7 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`relative flex p-[10px] ${item.layout}`}
    style={{ gap: item.gap }}
  >
    {item.numPos === "numberTop" && (
      <span className="absolute top-[10px] left-[10px] z-10 font-sans text-[13px] font-black leading-none text-[#0b1dff]">{item.id}</span>
    )}
    {item.numPos === "numberBottom" && (
      <span className="absolute bottom-[4px] left-[10px] z-10 font-sans text-[13px] font-black leading-none text-[#0b1dff]">{item.id}</span>
    )}
    {item.numPos === "numberBefore" && (
      <span className="self-start font-sans text-[13px] font-black leading-none text-[#0b1dff]">{item.id}</span>
    )}
    <img
      src={item.img}
      alt=""
      draggable={false}
      className={`pointer-events-none h-auto ${item.cls}`}
      style={{ aspectRatio: item.aspect }}
    />
    {item.numPos === "numberAfter" && (
      <span className="self-start font-sans text-[13px] font-black leading-none text-[#0b1dff]">{item.id}</span>
    )}
  </motion.div>
);

const OrangeContent = () => (
  <section id="aboutmedetails" className="relative flex w-full flex-col items-center gap-[50px] bg-[#ff6200] py-[60px] pb-[50px] tab:gap-[80px] tab:py-[90px] tab:pb-[120px] desk:py-[120px] desk:pb-[120px]">
    <div className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] px-[25px] tab:flex-row tab:gap-[60px] tab:px-[50px] desk:gap-[100px]">
      {BLOCKS.map((b) => (
        <div key={b.id} className="flex min-w-0 flex-1 flex-col items-start gap-[10px]">
          <h2
            className="m-0 text-[40px] font-bold leading-none text-black desk:text-[50px]"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}
          >
            {b.title}
          </h2>
          <p className="m-0 text-black" style={{ fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: "-0.03em", lineHeight: "1.5em" }}>
            <span className="font-black text-[#0b1dff]">{b.id}</span>
            {`      `}
            {b.body}
          </p>
        </div>
      ))}
    </div>
    <div className="flex w-full max-w-[1500px] flex-col items-center gap-0 px-[50px] tab:gap-[60px]">
      <div className="flex flex-col items-center gap-[5px] tab:flex-row tab:items-center tab:gap-0 desk:gap-[60px]">
        <DeskItem item={DESK_ITEMS[0]} />
        <DeskItem item={DESK_ITEMS[1]} />
      </div>
      <div className="flex flex-col items-center gap-[5px] tab:flex-row tab:items-center tab:gap-[10px] desk:gap-[80px]">
        <DeskItem item={DESK_ITEMS[2]} />
        <DeskItem item={DESK_ITEMS[3]} />
        <DeskItem item={DESK_ITEMS[4]} />
      </div>
    </div>
  </section>
);

export default OrangeContent;
