import { useRef } from "react";
import TumbleCarousel from "@/components/ui/TumbleCarousel";

const SKILLS = [
  { title: "React", subtitle: "component-driven" },
  { title: "Tailwind CSS", subtitle: "utility-first" },
  { title: "HTML", subtitle: "semantic markup" },
  { title: "CSS", subtitle: "layout & styling" },
  { title: "JavaScript", subtitle: "the language" },
  { title: "TypeScript", subtitle: "typed JS" },
  { title: "GSAP", subtitle: "timeline motion" },
  { title: "Framer Motion", subtitle: "spring physics" },
  { title: "Vercel", subtitle: "edge deploys" },
  { title: "Figma", subtitle: "design to code" },
];

const AboutSkills = () => {
  const pinRef = useRef(null);

  return (
    <section id="aboutskills" className="relative w-full overflow-clip" style={{ backgroundColor: "#ff6200" }}>
      <div ref={pinRef} className="relative block h-[280vh] w-full">
        <div className="sticky top-0 z-[1] flex h-svh w-full flex-col items-center justify-center gap-[24px] overflow-clip pb-[32px] tab:gap-[36px]">
          <div className="relative flex w-full max-w-[1500px] flex-col items-start gap-[16px] px-[25px] tab:gap-[24px] tab:px-[50px]">
            <h2
              className="m-0 text-[60px] text-black tab:text-[129px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1em" }}
            >
              skills <span style={{ color: "rgb(11, 29, 255)" }}>*</span>
            </h2>
            <p className="max-w-[420px]" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "#000", margin: 0 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 900, color: "rgb(11, 29, 255)" }}>*</span>
              The tools I reach for when turning ideas into working interfaces, motion, and interactions.
            </p>
          </div>
          <TumbleCarousel
            items={SKILLS}
            scrollTarget={pinRef}
            scrollDriven
            cardWidth={220}
            aspectRatio="1 / 1"
            rotation={30}
            verticalOffset={50}
            inactiveScale={0.6}
            visibleRange={2.4}
            borderRadius={16}
            titleBlur={2}
            showTitles
            showControls={false}
            showCounter={false}
            loop
            autoplay={false}
            enableDrag={false}
            enableKeyboard={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
