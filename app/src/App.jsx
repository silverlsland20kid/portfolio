import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import IntroOverlay from "./components/IntroOverlay";

import WorkPage from "./pages/WorkPage";
import LabPage from "./pages/LabPage";
import AboutPage from "./pages/AboutPage";
import WorkDetailPage from "./pages/WorkDetailPage";

import "./styles/App.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroDone = () => {
    setShowIntro(false);
  };

  // 인트로가 진행 중일 때는 인트로만 렌더링
  if (showIntro) {
    return <IntroOverlay onDone={handleIntroDone} />;
  }

  // 인트로 끝나면 그때부터 Layout + Routes 렌더링
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
      </Routes>
    </Layout>
  );
}
