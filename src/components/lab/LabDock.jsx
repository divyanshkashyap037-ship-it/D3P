import { motion } from "framer-motion";

const APPS = [
  { id: "finder", label: "Chaos Folder", icon: "lab-app1.png" },
  { id: "reminders", label: "Reminders", icon: "lab-app2.png" },
  { id: "music", label: "Music", icon: "lab-app4.png" },
];

const DockApp = ({ app, open, onApp }) => (
  <div className="group relative z-[1] h-[70px] w-[70px]">
    <div className="pointer-events-none absolute -top-[36px] left-1/2 w-max -translate-x-1/2 rounded-lg px-4 py-2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          fontWeight: 500,
          lineHeight: "1em",
          color: "#000",
          whiteSpace: "pre",
        }}
      >
        {app.label}
      </span>
    </div>
    <button
      type="button"
      onClick={() => onApp(app.id)}
      aria-label={app.label}
      className="flex h-full w-full cursor-pointer appearance-none items-start justify-center bg-transparent p-0 transition-[transform] duration-200 group-hover:z-10 group-hover:-translate-y-2 group-hover:scale-110"
    >
      <img
        src={`/media/${app.icon}`}
        alt=""
        draggable={false}
        className="absolute inset-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] select-none object-cover"
      />
    </button>
    {open && (
      <span
        className="absolute bottom-[3px] left-1/2 block h-[3px] w-[3px] -translate-x-1/2"
        style={{ backgroundColor: "rgb(130, 130, 130)", borderRadius: 3 }}
      />
    )}
  </div>
);

const LabDock = ({ open, onApp }) => (
  <motion.div
    initial={{ y: 100, scale: 0.8, opacity: 0 }}
    animate={{ y: 0, scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    className="relative h-[70px]"
  >
    <div className="relative flex h-full items-end justify-center">
      <div
        aria-hidden="true"
        className="absolute -top-1 -right-2.5 -bottom-1 -left-2.5 rounded-[24px] bg-black/[0.29]"
      />
      {APPS.map((app) => (
        <DockApp key={app.id} app={app} open={!!open[app.id]} onApp={onApp} />
      ))}
    </div>
  </motion.div>
);

export default LabDock;
