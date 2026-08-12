import LabWindow, { TrafficLights } from "./LabWindow";

const PreviewWindow = ({ file, onClose, onFocus, zIndex, dragRef }) => (
  <LabWindow
    desk={file.desk}
    phoneW={file.phoneW}
    lights="preview"
    onClose={onClose}
    onFocus={onFocus}
    zIndex={zIndex}
    dragRef={dragRef}
  >
    <div className="flex w-full items-center gap-[20px]">
      <TrafficLights variant="preview" onClose={onClose} />
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: "1em",
          color: "#000",
        }}
      >
        {file.name}
      </span>
    </div>
    <div
      className="relative min-h-0 w-full flex-1"
      style={{ borderRadius: 10, overflow: "hidden", aspectRatio: file.aspect }}
    >
      {file.image ? (
        <img
          src={file.image}
          alt={file.name}
          draggable={false}
          className="absolute inset-0 block h-full w-full select-none object-cover"
        />
      ) : (
        <video
          src={file.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 block h-full w-full select-none object-cover"
        />
      )}
    </div>
  </LabWindow>
);

export default PreviewWindow;
