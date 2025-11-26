import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WorkPage from "./pages/WorkPage";
import LabPage from "./pages/LabPage";
import AboutPage from "./pages/AboutPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import "./styles/style_bak.css";

export default function App() {
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
