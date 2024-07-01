// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import ProjectDetail from './components/ProjectDetail';
import NavBar from './components/NavBar';
import ConstructionBanner from './components/ConstructionBanner';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* Add a fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
