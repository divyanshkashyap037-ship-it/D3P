import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3] flex h-16 mix-blend-difference md:h-16">
      <nav className="mx-auto flex h-full w-full items-center justify-between px-6 pb-2.5 md:px-[50px] md:pb-[15px]">
        <Link
          to="/about"
          className="nav-link flex h-min w-auto items-center justify-center whitespace-pre text-center no-underline"
        >
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 29, lineHeight: "2em" }}
          >
            about
          </span>
        </Link>
        <Link
          to="/lab"
          className="nav-link flex h-min w-auto items-center justify-center whitespace-pre text-center no-underline"
        >
          <span
            className="text-white"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 29, lineHeight: "2em" }}
          >
            lab
          </span>
        </Link>
      </nav>
    </div>
  );
}
