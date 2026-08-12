import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FileIcon from "./FileIcon";
import LabTop from "./LabTop";
import LabDock from "./LabDock";
import PreviewWindow from "./LabPreview";
import LabReminders from "./LabReminders";
import LabMusic from "./LabMusic";
import LabTrash from "./LabTrash";
import LabFinder from "./LabFinder";
import LabAbout from "./LabAbout";
const PREVIEWS = [
  { name: "RenderModule.jpg", image: "/media/hero-keycap.jpg", desk: { left: 166, top: 112, width: 477, height: 498 }, phoneW: 364, aspect: "96 / 100" },
  { name: "Potato.mp4", video: "/media/lab-potato.mp4", desk: { right: 82, bottom: 127, width: 469, height: 499 }, phoneW: 358, aspect: "100 / 90" },
  { name: "UberRide.mp4", video: "/media/lab-uberride.mp4", desk: { left: 108, top: 108, width: 626, height: 353 }, phoneW: 355, aspect: "2 / 1" },
  { name: "Z08.gif", video: "/media/lab-z08.mp4", desk: { left: "calc(53.33% - 217px)", bottom: 139, width: 434, height: 391 }, phoneW: 355, aspect: "1 / 1" },
  { name: "ByteEvents.gif", video: "/media/lab-byteevents.mp4", desk: { left: "calc(47.5% - 200px)", top: 96, width: 400, height: 400 }, phoneW: 370, aspect: "1 / 1" },
  { name: "R02.gif", video: "/media/lab-r02.mp4", desk: { left: "calc(58.42% - 195.5px)", top: 53, width: 391, height: 403 }, phoneW: 341, aspect: "94 / 100" },
  { name: "PanicCrew.jpg", image: "/media/hero-blue.jpg", desk: { right: 188, top: 61, width: 383, height: 463 }, phoneW: 357, aspect: "70 / 100" },
  { name: "PurpleCat.jpg", image: "/media/hero-logo.jpg", desk: { left: "calc(55.25% - 179.5px)", top: "calc(46.29% - 250.5px)", width: 359, height: 501 }, phoneW: 357, aspect: "68 / 100" },
];

const FILES = [
  { id: "RenderModule.jpg", src: "/media/hero-keycap.jpg", name: "RenderModule.jpg", aspect: "1 / 1", phone: "left-[23%] top-[37%]", tab: "tab:left-[21%] tab:top-[48%]", desk: "desk:left-[34%] desk:top-[44%]" },
  { id: "Potato.mp4", src: "/media/lab-potato.jpg", name: "Potato.mp4", aspect: "100 / 90", phone: "left-[50%] top-[72%]", tab: "tab:left-[53%] tab:top-[68%]", desk: "desk:left-[52%] desk:top-[62%]" },
  { id: "UberRide.mp4", src: "/media/lab-uberride.jpg", name: "UberRide.mp4", aspect: "2 / 1", phone: "left-[42%] top-[57%]", tab: "tab:left-[45%] tab:top-[57%]", desk: "desk:left-[45%] desk:top-[57%]" },
  { id: "Z08.gif", src: "/media/lab-z08.png", name: "Z08.gif", aspect: "1 / 1", phone: "left-[24%] top-[64%]", tab: "tab:left-[30%] tab:top-[58%]", desk: "desk:left-[35%] desk:top-[58%]" },
  { id: "ByteEvents.gif", src: "/media/lab-byteevents.jpg", name: "ByteEvents.gif", aspect: "1 / 1", phone: "left-[74%] top-[32%]", tab: "tab:left-[77%] tab:top-[35%]", desk: "desk:left-[67%] desk:top-[42%]" },
  { id: "R02.gif", src: "/media/lab-r02.png", name: "R02.gif", aspect: "94 / 100", phone: "left-[40%] top-[43%]", tab: "tab:left-[34%] tab:top-[49%]", desk: "desk:left-[40%] desk:top-[48%]" },
  { id: "PanicCrew.jpg", src: "/media/hero-blue.jpg", name: "PanicCrew.jpg", aspect: "70 / 100", phone: "left-[76%] top-[60%]", tab: "tab:left-[79%] tab:top-[60%]", desk: "desk:left-[65%] desk:top-[55%]" },
  { id: "PurpleCat.jpg", src: "/media/hero-logo.jpg", name: "PurpleCat.jpg", aspect: "68 / 100", phone: "left-[40%] top-[22%]", tab: "tab:left-[38%] tab:top-[33%]", desk: "desk:left-[40%] desk:top-[36%]" },
];
//manual
const APP_WINDOWS = [
  { id: "reminders", Component: LabReminders },
  { id: "music", Component: LabMusic },
  { id: "trash", Component: LabTrash },
  { id: "finder", Component: LabFinder },
  { id: "about", Component: LabAbout },
];

const LabDesk = () => {
  const [open, setOpen] = useState({});
  const [top, setTop] = useState({});
  const deskRef = useRef(null);

  const focus = (id) =>
    setTop((t) => ({ ...t, [id]: Math.max(2, ...Object.values(t), 2) + 1 }));

  const openWindow = (id) => {
    setOpen((o) => ({ ...o, [id]: true }));
    focus(id);
  };

  const closeWindow = (id) => setOpen((o) => ({ ...o, [id]: false }));

  return (
    <section ref={deskRef} id="top" className="relative h-screen w-full overflow-clip">
      <img
        src="/media/lab-wallpaper.png"
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover tab:block"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 tab:hidden"
        style={{
          backgroundImage: "url(/media/lab-wallpaper.png)",
          backgroundSize: "1033px auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />
      {FILES.map((file, index) => (
        <FileIcon
          key={file.id}
          src={file.src}
          name={file.name}
          aspect={file.aspect}
          delay={0.15 + index * 0.05}
          onClick={() => openWindow(file.id)}
          className={`${file.phone} ${file.tab} ${file.desk}`}
        />
      ))}
      <LabTop onAbout={() => (open.about ? closeWindow("about") : openWindow("about"))} />
      <AnimatePresence>
        {PREVIEWS.map((p) =>
          open[p.name] ? (
            <PreviewWindow
              key={p.name}
              file={p}
              onClose={() => closeWindow(p.name)}
              onFocus={() => focus(p.name)}
              zIndex={top[p.name] ?? 2}
              dragRef={deskRef}
            />
          ) : null
        )}
        {APP_WINDOWS.map(({ id, Component }) =>
          open[id] ? (
            <Component
              key={id}
              onClose={() => closeWindow(id)}
              onFocus={() => focus(id)}
              zIndex={top[id] ?? 2}
              dragRef={deskRef}
            />
          ) : null
        )}
      </AnimatePresence>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <LabDock open={open} onApp={(id) => (open[id] ? closeWindow(id) : openWindow(id))} />
      </div>
    </section>
  );
};

export default LabDesk;
