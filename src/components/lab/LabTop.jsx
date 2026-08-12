import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Asterisk } from "../icons";

const menuText = {
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  fontWeight: 500,
  lineHeight: "0.9em",
};

const LabTop = ({ onAbout }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const date = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 right-0 left-0 z-[2] flex items-center justify-between px-6 pt-4 pb-3"
    >
      <div className="flex w-min items-center gap-[29px]">
        <motion.button
          type="button"
          onClick={onAbout}
          aria-label="About"
          whileHover={{ rotate: 90, scale: 1.1 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          className="flex cursor-pointer appearance-none items-center justify-center bg-transparent p-0"
        >
          <Asterisk color="#000" className="h-[11px] w-[12px]" />
        </motion.button>
        <Link
          to="/"
          className="cursor-pointer text-black no-underline transition-colors duration-200 hover:text-[#0b1dff]"
          style={menuText}
        >
          Home
        </Link>
        <Link
          to="/work"
          className="cursor-pointer text-black no-underline transition-colors duration-200 hover:text-[#0b1dff]"
          style={menuText}
        >
          Work
        </Link>
        <Link
          to="/about"
          className="cursor-pointer text-black no-underline transition-colors duration-200 hover:text-[#0b1dff]"
          style={menuText}
        >
          About
        </Link>
      </div>
      <div className="flex w-min items-center gap-5">
        <img src="/media/lab-sound.png" alt="" className="hidden h-[11px] w-[15px] select-none tab:block" draggable={false} />
        <img src="/media/lab-wifi.png" alt="" className="hidden h-[11px] w-[15px] select-none tab:block" draggable={false} />
        <img src="/media/lab-control.png" alt="" className="hidden h-[11px] w-[12px] select-none tab:block" draggable={false} />
        <div className="flex w-min items-center gap-[7px]">
          <span style={{ ...menuText, color: "#000" }}>{date}</span>
          <span style={{ ...menuText, color: "#000" }}>{time}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LabTop;
