import { Routes, Route, useLocation } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import BottomNav from "./components/nav/BottomNav";
import DragCursor from "./components/cursor/DragCursor";
import useLenis from "./hooks/useLenis";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Lab from "./pages/lab";
import WorkDetail from "./components/work/WorkDetail";

const App = () => {
  useLenis();
  const { pathname } = useLocation();
  const isLab = pathname === "/lab";

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      {!isLab && <TopNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
      {!isLab && <BottomNav />}
      {!isLab && <DragCursor />}
    </div>
  );
};

export default App;
