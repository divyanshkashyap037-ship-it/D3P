import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LabWindow, { TrafficLights } from "./LabWindow";
import { AlertTriangleIcon, CheckboxIcon, PriorityIcon } from "./LabIcons";

const REMINDERS = [
  { text: "sleep 8 hours" },
  { text: "finish all projects" },
  { text: "have free time" },
];

const LabDialog = ({ message, button, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 z-10 flex items-center justify-center"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
  >
    <div
      className="flex w-min flex-col items-center"
      style={{ backgroundColor: "#fff", borderRadius: 15, padding: 20, gap: 15 }}
    >
      <span
        className="text-center"
        style={{
          width: 177,
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "1em",
          color: "#000",
        }}
      >
        {message}
      </span>
      <button
        type="button"
        onClick={onClose}
        className="cursor-pointer appearance-none border-0 p-[10px]"
        style={{ backgroundColor: "#fe3c01", borderRadius: 15 }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "1em",
            color: "#fff",
          }}
        >
          {button}
        </span>
      </button>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close dialog"
        className="flex cursor-pointer appearance-none bg-transparent p-0"
      >
        <AlertTriangleIcon size={20} color="#fe3c01" />
      </button>
    </div>
  </motion.div>
);

export const LabDialogComp = LabDialog;

const LabReminders = ({ onClose, onFocus, zIndex, dragRef }) => {
  const [dialog, setDialog] = useState(false);

  return (
    <LabWindow
      desk={{ right: 157, top: 99, width: 360, height: 300 }}
      phoneW={360}
      onClose={onClose}
      onFocus={onFocus}
      zIndex={zIndex}
      dragRef={dragRef}
    >
      <div className="flex w-full items-center justify-between">
        <TrafficLights onClose={onClose} />
        <button
          type="button"
          onClick={() => setDialog(true)}
          aria-label="Priorities"
          className="flex cursor-pointer appearance-none bg-transparent p-0"
        >
          <PriorityIcon size={15} color="#000" />
        </button>
      </div>
      <div className="flex w-min items-center gap-[10px]">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: "0.9em",
            color: "#fe3c01",
          }}
        >
          Reminders
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: "0.9em",
            color: "#fe3c01",
          }}
        >
          3
        </span>
      </div>
      <div className="flex w-full flex-col">
        {REMINDERS.map((r) => (
          <div
            key={r.text}
            className="flex w-full items-center"
            style={{ padding: "2px 2px 2px 12px", gap: 8, borderRadius: 5 }}
          >
            <CheckboxIcon size={16} color="#fe3c01" />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "1em",
                color: "#000",
              }}
            >
              {r.text}
            </span>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {dialog && (
          <LabDialog
            message="System limitation: Only one priority may run at a time."
            button="Got it"
            onClose={() => setDialog(false)}
          />
        )}
      </AnimatePresence>
    </LabWindow>
  );
};

export default LabReminders;
