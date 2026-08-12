import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const PROJECT_DETAILS = {
  prodash: {
    title: "ProDash",
    client: "Productivity Dashboard",
    cover: "/media/project-prodash.png",
    tags: ["React", "Redux Toolkit", "React Router", "Local Storage"],
    live: "https://track-productivity-two.vercel.app/",
    about:
      "Prodash is a modern productivity dashboard built with React, Redux Toolkit, React Router, and Local Storage, bringing tasks, habits, goals, planning, Pomodoro sessions, and other tools into one workspace. During development, I faced challenges such as structuring the Redux store for multiple independent modules, keeping Local Storage data synchronized with global state, preventing state inconsistencies after refreshes, handling dynamic routes, and making shared components reusable across different sections. I also had to manage derived dashboard statistics, form states, and UI updates without creating unnecessary complexity. Solving these problems helped me develop a stronger understanding of React architecture, state management, persistence, component reusability, and frontend problem-solving.",
  },
  fintrack: {
    title: "FinTrakaro",
    client: "Finance Management Dashboard",
    cover: "/media/project-fintrack.png",
    tags: ["React", "State Management", "CRUD", "Data Persistence"],
    live: "https://sherstore.vercel.app/",
    about:
      "FinTrakaro is a personal finance management dashboard designed to make everyday money tracking simple and organized. Built as a full frontend project, it includes transaction management, income and expense tracking, category-based analysis, monthly budgeting, financial calculations, CSV data export, authentication, and customizable settings. During development, I faced challenges such as maintaining consistent financial data across multiple dashboard sections, calculating balances and spending statistics dynamically, handling transaction filtering and sorting, persisting user settings and records, and keeping the UI synchronized whenever transactions were added or updated. Building these features strengthened my understanding of state management, data persistence, CRUD operations, dynamic calculations, filtering logic, and scalable React component architecture.",
  },
  sherstore: {
    title: "SherStore",
    client: "E-Commerce Website",
    cover: "/media/project-sherstore.png",
    tags: ["React", "Routing", "E-Commerce", "Local Storage"],
    live: "https://fintrackaro.vercel.app/",
    about:
      "SherStore is a modern e-commerce website focused on creating a clean and intuitive online shopping experience. It includes product browsing, search and filtering, category navigation, product details, cart management, authentication, checkout flow, and responsive layouts. While building it, I faced challenges such as managing cart state across different routes, keeping product quantities and totals synchronized, handling persistent cart and user data with Local Storage, implementing search and category filtering efficiently, and maintaining consistent UI states across the shopping flow. This project helped me strengthen my understanding of React, routing, state management, CRUD-style operations, persistent client-side data, reusable components, and e-commerce UX.",
  },
  "dreamcore-tts": {
    title: "Dreamcore TTS",
    client: "Text-to-Speech Web App",
    cover: "/media/project-ttsdream.png",
    tags: ["Web APIs", "Asynchronous JS", "Audio Controls", "Experimental UI"],
    live: null,
    about:
      "Dreamcore TTS Converter is a creative text-to-speech web application that combines functional voice generation with a surreal, dreamcore-inspired visual experience. Users can enter text, customize voice-related settings, and convert written content into speech through an intentionally atmospheric interface. While building it, I faced challenges such as integrating the Text-to-Speech API, handling asynchronous voice generation, managing available voices and browser compatibility, controlling playback states, and keeping the interface responsive while audio was being generated or played. The project allowed me to explore Web APIs, asynchronous JavaScript, audio controls, state management, and experimental UI/UX design while turning a simple utility into a more distinctive digital experience.",
  },
};

const WorkDetail = () => {
  const { slug } = useParams();
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1
            className="text-black"
            style={{ fontFamily: "var(--font-sans)", fontSize: 48, fontWeight: 600 }}
          >
            Project Not Found
          </h1>
          <Link
            to="/work"
            className="mt-4 inline-block rounded-full border-[2px] border-black px-6 py-3 no-underline"
          >
            <span className="text-black" style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500 }}>
              Back to Work
            </span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-white">
      <section className="mx-auto flex max-w-[1200px] flex-col items-start gap-[40px] px-[100px] pt-[150px] pb-[100px] tab:px-[50px] phone:px-4 phone:pt-[100px] phone:pb-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-col items-start gap-[20px]"
        >
          <Link
            to="/work"
            data-cursor="enter"
            className="mb-[10px] inline-flex items-center gap-[8px] no-underline"
          >
            <span className="text-[#ababab]" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500 }}>
              ← Back to Work
            </span>
          </Link>
          <p
            className="text-black"
            style={{ fontFamily: "var(--font-sans)", fontSize: 48, fontWeight: 600, lineHeight: "1.1em", margin: 0 }}
          >
            {project.title}
          </p>
          <p
            className="text-[#ababab]"
            style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, margin: 0 }}
          >
            {project.client}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="w-full"
        >
          <img
            src={project.cover}
            alt={project.title}
            className="block w-full rounded-[20px] object-cover"
            style={{ backgroundColor: "rgb(224, 224, 224)", aspectRatio: "16 / 9" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex w-full flex-col items-start gap-[25px]"
        >
          <div className="flex w-full flex-col items-start gap-[8px]">
            <p
              className="text-black"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
            >
              <span style={{ color: "rgb(254, 60, 1)" }}>*</span>about
            </p>
            <div className="h-[1px] w-full bg-[#ababab]" />
          </div>
          <p
            className="text-black"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "1.6em",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            {project.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex w-full flex-col items-start gap-[8px]"
        >
          <p
            className="text-black"
            style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
          >
            <span style={{ color: "rgb(254, 60, 1)" }}>*</span>tags
          </p>
          <div className="h-[1px] w-full bg-[#ababab]" />
          <div className="flex flex-wrap gap-[10px] pt-[10px]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border-[2px] border-black px-[15px] py-[8px] text-black"
                style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {project.live && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="flex w-full flex-col items-start gap-[8px]"
          >
            <p
              className="text-black"
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "pre" }}
            >
              <span style={{ color: "rgb(254, 60, 1)" }}>*</span>live link
            </p>
            <div className="h-[1px] w-full bg-[#ababab]" />
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="enter"
              className="group mt-[10px] inline-flex items-center gap-[10px] rounded-[28px] border-[3px] border-black no-underline"
            >
              <span
                className="relative z-[1] px-[25px] pb-[4px] text-black"
                style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, lineHeight: "44px", whiteSpace: "pre" }}
              >
                Live Preview
              </span>
              <div className="absolute inset-0 z-0 h-0 bg-[#fe3c01] transition-all duration-[350ms] ease-out group-hover:h-full" />
            </a>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default WorkDetail;
