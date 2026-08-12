import { Link } from "react-router-dom";
import { Asterisk } from "../icons";

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[3] flex h-16 mix-blend-difference md:h-16">
      <nav className="relative mx-auto flex h-full w-full items-center justify-between px-6 pt-2.5 md:px-[50px] md:pt-[15px]">
        <Link
          to="/"
          data-cursor="home"
          className="nav-link relative z-[1] flex h-min w-min cursor-pointer items-center justify-center gap-0 pr-5 no-underline"
        >
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 30, letterSpacing: "0.7px", lineHeight: "2em" }}
          >
            dy
          </span>
          <span className="relative -top-[8px] flex items-center justify-center" style={{ transform: "rotate(-17deg)" }}>
            <Asterisk className="h-[11px] w-[11px] md:h-[13px] md:w-[13px]" />
          </span>
        </Link>
        <Link
          to="/work"
          className="nav-link flex h-min w-auto items-center justify-center whitespace-pre text-center no-underline"
        >
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 30, lineHeight: "2em" }}
          >
            work
          </span>
        </Link>
      </nav>
    </div>
  );
}
