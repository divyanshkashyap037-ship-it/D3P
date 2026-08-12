import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LabWindow, { TrafficLights } from "./LabWindow";
import FileIcon from "./FileIcon";
import { GridIcon, PlusIcon, TagIcon, UploadIcon, ChevronLeftIcon } from "./LabIcons";
import { LabDialogComp } from "./LabReminders";

const FILES = [
  { name: "logo_from_client.docx", icon: "/media/lab-file-docx.png", aspect: "1 / 1", x: "19%", y: "31%" },
  { name: "Unpaid Invoices.pdf", icon: "/media/lab-file-pdf.png", aspect: "1 / 1", x: "31%", y: "56%" },
  { name: "Comic Sans.ttf", icon: "/media/lab-file-ttf.png", aspect: "1 / 1", x: "53%", y: "21%" },
  { name: "Layer 1 copy 99.psd", icon: "/media/lab-file-psd.png", aspect: "1 / 1", x: "57%", y: "73%" },
  { name: "whatwereyouthinking", icon: "/media/lab-file-what.png", aspect: "1 / 1", x: "71%", y: "50%" },
];

const LabTrash = ({ onClose, onFocus, zIndex, dragRef }) => {
  const [dialog, setDialog] = useState(false);

  return (
    <LabWindow
      desk={{ right: 80, top: "calc(50% - 210px)", width: 650, height: 420 }}
      phoneW={367}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      dragRef={dragRef}
    >
      <div className="flex w-full items-center justify-between">
        <TrafficLights onClose={onClose} />
        <div className="flex w-min items-center" style={{ gap: 10 }}>
          <GridIcon size={15} color="#ababab" />
          <UploadIcon size={15} color="#ababab" />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "1em",
              color: "#000",
            }}
          >
            Trash
          </span>
          <GridIcon size={15} color="#ababab" />
          <TagIcon size={15} color="#ababab" />
          <ChevronLeftIcon size={15} color="#ababab" />
        </div>
        <PlusIcon size={15} color="#ababab" />
      </div>
      <div className="relative min-h-0 w-full flex-1" style={{ borderRadius: 15, overflow: "hidden" }}>
        {FILES.map((f) => (
          <FileIcon
            key={f.name}
            src={f.icon}
            name={f.name}
            aspect={f.aspect}
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
            message="You are trying to open a file containing high levels of professional trauma. For your own mental health, this file is permanently locked."
            button="I'll move on"
            onClose={() => setDialog(false)}
          />
        )}
      </AnimatePresence>
    </LabWindow>
  );
};

export default LabTrash;
