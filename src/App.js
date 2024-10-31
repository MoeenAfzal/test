// src/App.js
import React from "react";

import HeroSection from "./components/HeroSection";
import Slider from "./components/slider";
import CardSlider from "./components/CardSlider";
function App() {
  return (
    <div>
      <div
        className="w-full min-h-[130vh] flex items-center justify-center relative "
      >
       
        <HeroSection />
       
      </div>
      
      <div className="-mt-28 z-50 relative">
      <Slider/>
      
      </div>
      <CardSlider/>
      
       
    </div>
  );
}

export default App;
