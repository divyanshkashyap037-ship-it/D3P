import { useState } from "react";
import { motion } from "framer-motion";

const FileIcon = ({
  src,
  name,
  aspect,
  delay,
  className,
  size = 60,
  labelWidth = 65,
  labelSize = 14,
  onClick,
  style,
}) => {
  const [dragging, setDragging] = useState(false);

  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${dragging ? "z-50" : ""} ${className}`}
      style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none", ...style }}
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        draggable={false}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onClick={onClick}
        className="group flex w-min cursor-pointer flex-col items-center gap-[5px]"
      >
        <div className="flex flex-col items-center gap-[5px] transition-[padding] duration-200 group-hover:p-[5px]">
          <img
            src={src}
            alt={name}
            draggable={false}
            className="block select-none object-cover"
            style={{
              width: size,
              height: "auto",
              minHeight: Math.round(size * 0.75),
              maxHeight: Math.round(size * 1.17),
              aspectRatio: aspect,
            }}
          />
          <div className="flex items-center justify-center p-[2px]">
            <div
              className="whitespace-pre-wrap break-words text-center"
              style={{
                width: labelWidth,
                fontFamily: "var(--font-sans)",
                fontSize: labelSize,
                fontWeight: 400,
                lineHeight: "0.9em",
                color: "#000",
              }}
            >
              {name}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FileIcon;
