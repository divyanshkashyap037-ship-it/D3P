import { motion } from "framer-motion";
import { AsteriskOrange } from "../icons";

const Pupil = () => (
  <motion.span
    className="absolute top-[50%] left-[50%] h-[8.5px] w-[8.5px] rounded-full bg-black tab:h-[10.5px] tab:w-[10.5px]"
    style={{ marginTop: -4.25, marginLeft: -4.25 }}
    animate={{ x: [4.9, -2.2, 4.9] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Eyes = () => (
  <span className="relative inline-flex h-[32px] w-[57px] items-end justify-end overflow-clip tab:h-[38px] tab:w-[68px]" style={{ backgroundColor: "rgb(254, 60, 1)" }}>
    <span className="absolute top-[75.8%] left-[44.8%] h-[17px] w-[17px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white tab:h-[21px] tab:w-[21px]">
      <Pupil />
    </span>
    <span className="absolute top-[75.8%] left-[75.4%] h-[17px] w-[17px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white tab:h-[21px] tab:w-[21px]">
      <Pupil />
    </span>
  </span>
);

const LocationTag = () => (
  <span className="inline-flex items-center">
    <span className="flex flex-row items-center gap-[5px] rounded-[26px] border border-[#ababab] bg-white py-[6px] pr-[12px] pl-[8px] tab:py-[8px] tab:pr-[15px] tab:pl-[10px]">
      <img src="/media/about-flag.gif" alt="" className="pointer-events-none h-[12px] w-[12px] tab:h-[15px] tab:w-[15px]" />
      <span
        className="text-black"
        style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "0.8em", whiteSpace: "pre" }}
      >
        India (+91)
      </span>
    </span>
  </span>
);

const Italic = ({ children }) => (
  <span
    className="font-serif text-[20px] font-bold italic tab:text-[36px]"
    style={{ fontFamily: "var(--font-serif)", letterSpacing: 0, lineHeight: "1em" }}
  >
    {children}
  </span>
);

const AboutHero = () => (
  <section id="top" className="relative mx-auto flex w-full max-w-[1500px] flex-col items-center gap-[20px] px-[25px] py-[70px] tab:flex-row tab:items-center tab:gap-[30px] tab:px-[50px] desk:gap-[60px]">
    <div className="pointer-events-none relative z-0 aspect-[0.815348] w-[340px] overflow-visible tab:aspect-[0.711429] tab:w-[35%] desk:aspect-[0.744231]">
      <img
        src="/media/about-portrait.jpg"
        alt=""
        draggable={false}
        className="block h-full w-full object-cover"
        style={{ objectPosition: "center bottom" }}
      />
    </div>
    <div className="relative z-[1] w-full flex-1">
      <div
        className="flex w-full flex-wrap items-center gap-[0.25em] text-[20px] text-black tab:text-[36px] desk:text-[30px] [&_span]:flex [&_span]:h-[32px] [&_span]:items-center tab:[&_span]:h-[40px]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 400, letterSpacing: 0, lineHeight: "1em", wordBreak: "break-word" }}
      >
        <span className="inline-flex items-center">
          <AsteriskOrange className="h-[12px] w-[12px] tab:h-[15px] tab:w-[15px]" />
        </span>
        <span>Hi,</span>
        <span>I'm</span>
        <span>Divyansh,</span>
        <span>a</span>
        <span>
          <Italic>multidisciplinary</Italic>
        </span>
        <span>designer</span>
        <span>and</span>
        <span>creative</span>
        <span>developer</span>
        <span>who</span>
        <span>enjoys</span>
        <span>turning</span>
        <span>ideas</span>
        <span>into</span>
        <span>things</span>
        <span>people</span>
        <span>can</span>
        <span>actually</span>
        <span>see,</span>
        <span>use,</span>
        <span>and</span>
        <span>experience.</span>
        <span className="inline-flex items-center">
          <img src="/media/about-cafe.jpg" alt="" draggable={false} className="pointer-events-none h-[32px] w-[32px] tab:h-[40px] tab:w-[40px]" />
        </span>
        <span>I</span>
        <span>like</span>
        <span>being</span>
        <span>involved</span>
        <span>in</span>
        <span>the</span>
        <span>
          <Italic>whole</Italic>
        </span>
        <span>process,</span>
        <span>from</span>
        <span>figuring</span>
        <span>out</span>
        <span>an</span>
        <span>idea</span>
        <span>and</span>
        <span>exploring</span>
        <span>different</span>
        <span>directions</span>
        <span>to</span>
        <span>designing,</span>
        <span>building,</span>
        <span>and</span>
        <span>bringing</span>
        <span>the</span>
        <span>final</span>
        <span>product</span>
        <span>to</span>
        <span>life.</span>
        <span>I'm</span>
        <span>curious</span>
        <span className="inline-flex items-center">
          <Eyes />
        </span>
        <span>by</span>
        <span>nature,</span>
        <span>always</span>
        <span>experimenting</span>
        <span>with</span>
        <span>new</span>
        <span>tools</span>
        <span>and</span>
        <span>ideas,</span>
        <span className="inline-flex items-center">
          <img
            src="/media/about-tomato.png"
            alt=""
            draggable={false}
            className="h-[28px] w-[28px] cursor-pointer transition-transform duration-300 ease-out hover:rotate-[88deg] tab:h-[34px] tab:w-[34px]"
          />
        </span>
        <span>and</span>
        <span>I</span>
        <span>care</span>
        <span>about</span>
        <span>making</span>
        <span>things</span>
        <span>that</span>
        <span>feel</span>
        <span>thoughtful,</span>
        <span>useful,</span>
        <span>and</span>
        <span>genuinely</span>
        <span>mine.</span>
        <span className="inline-flex items-center">
          <LocationTag />
        </span>
      </div>
    </div>
  </section>
);

export default AboutHero;