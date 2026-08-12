import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LabWindow, { TrafficLights } from "./LabWindow";
import FileIcon from "./FileIcon";
import { ChevronLeftIcon, SearchIcon } from "./LabIcons";
import { LabDialogComp } from "./LabReminders";

const FILES = [
  { name: "final", icon: "/media/lab-file-what.png", x: "15%", y: "27%" },
  { name: "final_final", icon: "/media/lab-file-what.png", x: "35%", y: "62%" },
  { name: "FINAL FINAL_1", icon: "/media/lab-file-final2.png", x: "55%", y: "37%" },
  { name: "FINAL USE THIS", icon: "/media/lab-file-what.png", x: "69%", y: "78%" },
  { name: "FINAL REAL THIS ONE", icon: "/media/lab-file-final3.png", x: "80%", y: "25%" },
];

const LabFinder = ({ onClose, onFocus, zIndex, dragRef }) => {
  const [dialog, setDialog] = useState(false);

  return (
    <LabWindow
      desk={{ left: 90, bottom: 142, width: 650, height: 420 }}
      phoneW={367}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      dragRef={dragRef}
    >
      <div className="flex w-full items-center justify-between">
        <TrafficLights onClose={onClose} />
        <div className="flex w-min items-center" style={{ gap: 10, borderRadius: 15 }}>
          <ChevronLeftIcon size={15} color="#ababab" />
          <SearchIcon size={15} color="#ababab" />
        </div>
      </div>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 26,
          fontWeight: 500,
          lineHeight: "1em",
          color: "#000",
        }}
      >
        Chaos Folder
      </span>
      <div
        className="relative w-full"
        style={{ borderRadius: 15, overflow: "hidden", height: 330 }}
      >
        {FILES.map((f) => (
          <FileIcon
            key={f.name}
            src={f.icon}
            name={f.name}
            aspect="1 / 1"
            size={45}
            labelWidth={50}
            labelSize={12}
            onClick={() => setDialog(true)}
            style={{ left: f.x, top: f.y }}
          />
        ))}
      </div>
      <AnimatePresence>
        {dialog && (
          <LabDialogComp
            message="This item could not be opened. No backup was found. Consider this a reminder for next time."
            button="I'll back up my files"
            onClose={() => setDialog(false)}
          />
        )}
      </AnimatePresence>
    </LabWindow>
  );
};

export default LabFinder;
