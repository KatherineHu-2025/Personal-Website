import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Updated to match the link */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
