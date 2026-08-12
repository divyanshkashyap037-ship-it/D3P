import WorkItem from "./WorkItem";
import { WORKS } from "./works-data";

const DividerLine = () => (
  <div className="flex w-full max-w-[1500px] flex-col items-start gap-[5px] px-[100px] pt-[20px] pb-[5px] tab:px-[50px] phone:px-4">
    <div className="h-[1px] w-full bg-[#ababab]" />
  </div>
);

const WorkList = () => (
  <section
    id="selectedwork"
    className="relative flex w-full flex-col items-center gap-[10px] overflow-clip pb-[80px] phone:gap-0"
  >
    <div className="flex w-full max-w-[1500px] flex-col items-start gap-[15px] px-[100px] pb-[5px] tab:px-[50px] phone:px-4">
      <p
        className="text-black"
        style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, lineHeight: "1em", margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      >
        <span style={{ color: "rgb(254, 60, 1)" }}>*</span>selected works
      </p>
      <div className="h-[1px] w-full bg-[#ababab]" />
    </div>
    {WORKS.map((work) => (
      <div key={work.slug} className="flex w-full max-w-[1500px] flex-col items-center">
        <WorkItem work={work} />
        <DividerLine />
      </div>
    ))}
    <div className="flex w-full max-w-[1500px] flex-col items-center px-[100px] pt-[40px] tab:px-[50px] phone:px-4">
      <p
        className="text-[#ababab]"
        style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0 }}
      >
        Adding more in few days...
      </p>
    </div>
  </section>
);

export default WorkList;
