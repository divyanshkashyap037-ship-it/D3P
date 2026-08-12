import LabWindow, { TrafficLights } from "./LabWindow";

const ROWS = [
  ["Chip", "Potato Chip 1"],
  ["Memory", "128 GB (insufficient)"],
  ["Storage Usage", "99% (mostly memes)"],
  ["Serial Number", "PR0-CR45-T1N8"],
  ["Warranty", "Void since 2020"],
  ["Version", "Tomato OS 1.0"],
];

const rowText = {
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  fontWeight: 400,
  lineHeight: "1em",
};

const LabAbout = ({ onClose, onFocus, zIndex, dragRef }) => (
  <LabWindow
    desk={{ left: "50%", top: "50%", width: 270, height: 420, marginLeft: -135, marginTop: -210 }}
    phoneW={250}
    onClose={onClose}
    onFocus={onFocus}
    zIndex={zIndex}
    dragRef={dragRef}
  >
    <TrafficLights onClose={onClose} />
    <div className="flex w-full flex-col items-center">
      <video
        src="/media/lab-about.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="block w-full select-none object-cover"
        style={{ width: 129, borderRadius: 15 }}
      />
      <div className="flex w-min items-baseline">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 20,
            fontWeight: 500,
            lineHeight: "1em",
            color: "#000",
          }}
        >
          Lab{" "}
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            fontWeight: 600,
            fontStyle: "italic",
            lineHeight: "1em",
            color: "#000",
          }}
        >
          Pro
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 400,
          lineHeight: "1em",
          color: "#000",
        }}
      >
        {" "}for experiments and side quests
      </span>
      <div className="flex w-full flex-col">
        {ROWS.map(([label, value]) => (
          <div key={label} className="flex w-full items-center justify-between">
            <span style={{ ...rowText, color: "#ababab" }}>{label}</span>
            <span style={{ ...rowText, color: "#000" }}>{value}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-center">
        <span style={{ ...rowText, color: "#ababab" }}>c 2026 Divyansh Kashyap</span>
        <span style={{ ...rowText, color: "#ababab" }}>All Rights Reserved.</span>
      </div>
    </div>
  </LabWindow>
);

export default LabAbout;
