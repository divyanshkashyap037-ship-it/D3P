import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ORANGE = "rgb(254, 60, 1)";
const WHITE = "rgb(255, 255, 255)";
// some using ai 
const CIRCLE = {
  15: "M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 Z",
  45: "M 22.5 0 C 34.926 0 45 10.074 45 22.5 C 45 34.926 34.926 45 22.5 45 C 10.074 45 0 34.926 0 22.5 C 0 10.074 10.074 0 22.5 0 Z",
  56: "M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z",
};

const MOVE_ICON = "M 14 14 L 17 17 M 16 10 L 20 10 M 6 6 L 3 3 M 14 6 L 17 3 M 6 14 L 3 17 M 0 10 L 4 10 M 10 0 L 10 4 M 10 16 L 10 20";
const ARROW_ICON = "M 13 0 L 0 13 M 13 0 L 3 0 M 13 0 L 13 10";

const textBase = {
  fontFamily: "var(--font-sans)",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "1em",
  textAlign: "center",
  color: WHITE,
  whiteSpace: "pre",
};

const DragCursor = () => {
  const [mode, setMode] = useState("default");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 170, damping: 26, mass: 1 });
  const y = useSpring(my, { stiffness: 170, damping: 26, mass: 1 });

  useEffect(() => {
    if (window.matchMedia("(any-hover: none)").matches) return;
    document.body.classList.add("cursor-none");

    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const target = el?.closest?.("[data-cursor]");
      setMode(target?.dataset.cursor ?? "default");
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  const active = mode !== "default";
  const circleSize = pressed ? 45 : active ? 56 : 15;
  const circlePos = pressed ? 8 : active ? 2 : 23;
  const circleFill = active || pressed ? ORANGE : WHITE;
  const showIcon = mode === "enter" || (mode === "default" && pressed);
  const icon = mode === "enter" ? ARROW_ICON : MOVE_ICON;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[13]"
      style={{ x, y, translateX: "-50%", translateY: "-50%", mixBlendMode: active ? "unset" : "difference" }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-[60px] w-[60px] overflow-clip">
        <svg
          className="absolute"
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
          style={{ left: circlePos, top: circlePos }}
          overflow="visible"
        >
          <path d={CIRCLE[circleSize]} fill={circleFill} />
        </svg>
        <span
          style={{
            ...textBase,
            position: "absolute",
            left: 26,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: mode === "play" ? 1 : 0,
          }}
        >
          ▶
        </span>
        <span
          style={{
            ...textBase,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: mode === "drag" ? 1 : 0,
          }}
        >
          drag
        </span>
        <span
          style={{
            ...textBase,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: mode === "home" ? 1 : 0,
          }}
        >
          home
        </span>
        <svg
          className="absolute"
          role="presentation"
          viewBox="0 0 24 24"
          width={pressed ? 28 : 24}
          height={pressed ? 28 : 24}
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: showIcon ? 1 : 0,
          }}
        >
          <g
            fill="none"
            stroke={WHITE}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={mode === "enter" ? "translate(5.5 5.5)" : "translate(2 2)"}
          >
            <path d={icon} />
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

export default DragCursor;
