// src/App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import Slider from "./components/slider";
import CardSlider from "./components/CardSlider";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Contact/>
      <div className=" rounded-tl-[50px] rounded-tr-[50px]">
        <NavBar />
        <HeroSection />
      </div>

      <div className=" -mt-20 md:-mt-[170px] z-50 relative">
        <Slider />
      </div>
      <CardSlider />
    </div>
  );
}

export default App;
