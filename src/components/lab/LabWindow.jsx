import { motion } from "framer-motion";
import usePhone from "./usePhone";

export const TrafficLights = ({ variant = "macos", onClose }) => {
  const colors =
    variant === "preview"
      ? ["#fe3c01", "#ababab", "#ababab"]
      : ["#fe3c01", "#ffe815", "#45ff08"];

  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close window"
      className="flex w-min cursor-pointer appearance-none items-center gap-[7px] bg-transparent p-0"
    >
      {colors.map((c) => (
        <span
          key={c}
          className="block h-[8px] w-[8px]"
          style={{ backgroundColor: c, borderRadius: 6 }}
        />
      ))}
    </button>
  );
};

const LabWindow = ({
  desk,
  phoneW = 420,
  gap = 10,
  onFocus,
  zIndex,
  dragRef,
  className = "",
  children,
}) => {
  const isPhone = usePhone();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
      drag
      dragMomentum={false}
      dragConstraints={dragRef}
      onMouseDown={onFocus}
      transformTemplate={
        isPhone ? (transform) => `translate(-50%, -50%) ${transform}` : undefined
      }
      className={`lab-window ${className}`}
      style={{
        ...desk,
        zIndex,
        ...(isPhone
          ? {
              left: "50%",
              top: "45%",
              right: "auto",
              bottom: "auto",
              marginLeft: 0,
              marginTop: 0,
              width: `min(${phoneW}px, 92vw)`,
              height: "auto",
            }
          : {}),
      }}
    >
      <div className="flex w-full flex-col" style={{ gap, padding: 15 }}>
        {children}
      </div>
    </motion.div>
  );
};

export default LabWindow;
