import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/ConstructionBanner";
import AboutSection from "./components/AboutSection"

function App() {
  return (
    <div className="App">
      {/* <Banner></Banner> */}
      <NavBar />
      <AboutSection />
    </div>
  );
}

export default App;
