import { motion } from "framer-motion";

const IMG = {
  asterisk: { src: "/media/intro-asterisk.png", w: 43, h: 45, zoom: 1.2 },
  rev: { src: "/media/intro-rev.gif", w: 90, h: 45, zoom: 0.6 },
  hanzi: { src: "/media/intro-hanzi.png", w: 56, h: 45, zoom: 0.6 },
  blob: { src: "/media/intro-blob.gif", w: 60, h: 45, zoom: 0.6 },
  hands: { src: "/media/intro-hands.gif", w: 75, h: 45, zoom: 0.6 },
  dot: { src: "/media/intro-dot.png", w: 46, h: 45, zoom: 0.6 },
  revWide: { src: "/media/intro-rev.gif", w: 217, h: 45, zoom: 0.6 },
};

const WORDS = [
  "Hi,", "I'm", "Divyansh", "—",
  { img: "asterisk" },
  "a", "designer", "and", "creative", "developer",
  { img: "hanzi" },
  "who", "likes", "turning",
  { img: "blob" },
  "random", "ideas", "into", "things", "that", "actually", "work.",
  { img: "rev" },
  "I", "explore,", "design,", "build,",
  { img: "hands" },
  "break,", "and", "rebuild",
  { img: "dot" },
  "until", "an", "idea", "feels", "right.",
];

const reveal = (i) => ({
  initial: { opacity: 0.2, y: 20, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, margin: "-15% 0px -25% 0px" },
  transition: { duration: 0.45, ease: "easeOut", delay: (i % 5) * 0.09 },
});

const InlineImg = ({ img }) => (
  <span style={{ display: "inline-flex", alignItems: "center", margin: "0 0.05em", zoom: IMG[img].zoom }}>
    <img
      src={IMG[img].src}
      alt=""
      draggable={false}
      style={{ display: "block", width: IMG[img].w, height: IMG[img].h, objectFit: "contain", userSelect: "none" }}
    />
  </span>
);

const Intro = () => (
  <section
    id="intro"
    className="relative flex w-full flex-col items-center overflow-clip bg-white px-10 pt-[105px] pb-[180px]"
  >
    <div className="relative flex w-full max-w-[1500px] flex-col items-center gap-2.5">
      <div
        className="relative z-[1] flex w-[68%] flex-wrap items-center gap-[0.25em] break-words [&_span]:h-[45px]"
        style={{ fontFamily: "var(--font-sans)", fontSize: 36, lineHeight: "1em", color: "rgb(0,0,0)" }}
      >
        {WORDS.map((w, i) =>
          typeof w === "string" ? (
            <motion.span
              key={i}
              {...reveal(i)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: w === "right." ? "var(--font-serif)" : undefined,
                fontStyle: w === "right." ? "italic" : undefined,
                fontWeight: w === "right." ? 700 : 400,
                lineHeight: "1em",
              }}
            >
              {w}
            </motion.span>
          ) : (
            <motion.span key={i} {...reveal(i)} style={{ display: "inline-flex", alignItems: "center" }}>
              <InlineImg img={w.img} />
            </motion.span>
          )
        )}
      </div>
    </div>
  </section>
);

export default Intro;
