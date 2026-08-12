import { motion } from "framer-motion";

const ROWS = [
  {
    title: "Sheryians Coding School",
    detail: "Cohort 3/O batch",
    status: "Currently enrolled",
  },
  {
    title: "Class 9th",
    detail: "India",
    status: "Currently studying",
  },
  {
    title: "DCA",
    detail: "Diploma in Computer Applications",
    status: "Completed",
  },
];

const listAnim = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.44, 0, 0.56, 1] },
};

const AboutEducation = () => (
  <section id="abouteducation" className="relative flex w-full flex-col items-center gap-[40px] py-[60px] tab:gap-[50px] tab:py-[90px]">
    <div className="relative flex w-full max-w-[1500px] flex-col items-start gap-[20px] px-[25px] tab:px-[50px]">
      <h2
        className="m-0 text-[60px] text-black tab:text-[129px]"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1em" }}
      >
        education <span style={{ color: "rgb(11, 29, 255)" }}>*</span>
      </h2>
    </div>
    <div className="relative flex w-full max-w-[1500px] flex-col gap-[40px] px-[25px] tab:flex-row tab:items-start tab:gap-[60px] tab:px-[50px] desk:gap-[100px]">
      <motion.div {...listAnim} className="flex min-w-0 flex-1 flex-col">
        {ROWS.map((row, index) => (
          <div key={row.title} className="flex w-full flex-col gap-[6px] border-b border-[#ababab] py-[18px] first:pt-0 last:border-b-0">
            <div className="flex w-full flex-wrap items-center gap-[10px]">
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 900, lineHeight: "1em", letterSpacing: "0.1px", color: "rgb(11, 29, 255)" }}>
                ({String(index + 1).padStart(2, "0")})
              </span>
              <span
                className="text-black"
                style={{ fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "0.8em", whiteSpace: "pre" }}
              >
                {row.title}
              </span>
            </div>
            <div className="flex w-full flex-wrap items-center gap-[10px] pl-[26px]">
              <span
                className="text-[#ababab]"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 400, lineHeight: "1em" }}
              >
                {row.detail}
              </span>
              <span
                className="rounded-[26px] border border-[#ababab] bg-white px-[15px] py-[6px]"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, lineHeight: "1em", color: "#000", whiteSpace: "pre" }}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.a
        {...listAnim}
        href="https://sheryians.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full cursor-pointer no-underline tab:w-[320px]"
      >
        <div
          className="flex flex-col items-start gap-[12px] rounded-[20px] border border-[#e0e0e0] bg-white p-[15px] transition-shadow duration-200 group-hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)]"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="relative w-full overflow-hidden" style={{ borderRadius: 12, aspectRatio: "16 / 10" }}>
            <img
              src="/media/sheryians-cohort3.jpg"
              alt="Sheryians"
              draggable={false}
              className="absolute inset-0 block h-full w-full select-none object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span
              className="absolute top-[10px] left-[10px] rounded-[26px] bg-black px-[12px] py-[6px]"
              style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, lineHeight: "1em", color: "#fff", whiteSpace: "pre" }}
            >
              where I learn
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-[10px]">
            <img
              src="/media/sheryians-logo.webp"
              alt="Sheryians logo"
              draggable={false}
              className="block h-[30px] w-auto select-none"
            />
            <span
              className="flex items-center gap-[5px] underline-offset-[4px] group-hover:underline"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, lineHeight: "1em", color: "#0b1dff" }}
            >
              sheryians.com
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  </section>
);

export default AboutEducation;
