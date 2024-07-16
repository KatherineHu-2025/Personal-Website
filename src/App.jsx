import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/ConstructionBanner";
import AboutSection from "./components/AboutSection";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <AboutSection />
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
