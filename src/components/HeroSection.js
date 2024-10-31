import React, { useEffect, useState } from "react";

// Import your images here
import PhoneImage from "../Assets/Images/TwoLargePhones.png";
import BubbleTopLeft from "../Assets/Images/Mask group1.png";
import BubbleBottomLeft from "../Assets/Images/Mask group2.png";
import BubbleTopRight from "../Assets/Images/bubble1.png";
import BubbleBottomRight from "../Assets/Images/bubble1.png";
import BubbleBackground1 from "../Assets/Images/bubble1.png";
import BubbleBackground2 from "../Assets/Images/bubble1.png";
// import Slider from "./slider";

export default function HeroSection() {
  const [heading, setHeading] = useState("Mobile Phones");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeading((prev) =>
        prev === "Mobile Phones" ? "Laptops" : "Mobile Phones"
      );
    }, 4000); // Change heading every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-[90%]">
      <div className="flex w-full flex-col md:flex-row items-center justify-between p-4 relative">
        {/* Left Section */}
        <div className="w-1/2 md:w-1/2 space-y-4 relative z-10">
          <h1 className={`text-[3.3rem] font-bold text-gray-800 relative z-10 leading-[0.6]`}>
            <span className="flex gap-4">
              Largest <span className="text-customBlue">Wholesalers</span>
            </span>
            <br /> {/* Line break to move the following text to a new line */}
            <span className="flex gap-4">
              {" "}
              <span className="block">of</span>
              <span className="block text-customBlue animation-container">
                {heading}
              </span>{" "}
              {/* Dynamic heading */}
            </span>
          </h1>

          <p className="text-gray-900 pt-5">
            Supply that meets Demand. Get the best wholesale prices of used and
            refurbished Mobile Stocks.
          </p>
          <a href="/" className="text-blue-600 flex items-center space-x-2">
            <span>Learn More</span>
            <span>&rarr;</span>
          </a>

          {/* Email Input and Buttons */}
          <div className="flex space-x-2">
            <div className="flex items-center border border-green-400 rounded-3xl overflow-hidden">
              <i className="fas fa-envelope text-green-400 px-4"></i>
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-2 flex-1 rounded-3xl border-0 focus:outline-none focus:ring-0"
              />
            </div>
            <button className="px-5 py-2 bg-subscribe border-2 text-lg text-white rounded-3xl hover:bg-white hover:text-subscribe hover:border-subscribe flex items-center">
              Subscribe
              <i className="fas fa-arrow-right ml-2"></i> {/* Forward arrow */}
            </button>
            <button className="px-5 py-2 bg-stocklist border-2 text-lg text-white rounded-3xl hover:bg-white hover:text-stocklist hover:border-stocklist flex items-center">
              <i className="fas fa-arrow-down mr-2"></i>
              Stock List
              {/* Down arrow */}
            </button>
          </div>

          {/* Social Icons and People Registered */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex space-x-4">
              <a href="#" className="icon-gradient p-2 rounded-full text-white">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="icon-gradient p-2 rounded-full text-white">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a href="#" className="icon-gradient p-2 rounded-full text-white">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" className="icon-gradient p-2 rounded-full text-white">
                <i className="fab fa-twitter text-white"></i>
              </a>
            </div>
            <span
              style={{
                background: "linear-gradient(90deg, #7CC140 0%, #388FCB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-bold"
            >
              <i className="fas fa-users text-subscribe mr-2"></i>{" "}
              {/* User icon */}
              400k people Registered
            </span>
          </div>

          {/* Background Bubbles for Left Section */}
          <img
            src={BubbleTopLeft}
            alt="Top Left Bubble"
            className="absolute -top-24 -left-20 w-32 h-32 opacity-1-0 "
          />
          <img
            src={BubbleBottomLeft}
            alt="Bottom Left Bubble"
            className="absolute -top-5 left-12 w-72 h-44 opacity-80 "
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 md:w-1/2 relative flex justify-center items-center">
          {/* Main Phone Image */}
          <img
            src={PhoneImage}
            alt="Phone Display"
            className="w-64 h-auto z-10"
          />

          {/* Background Bubbles for Right Section */}
          <img
            src={BubbleTopRight}
            alt="Top Right Bubble"
            className="absolute top-0 -right-5 w-28 h-28 opacity-70 animate-spin"
          />
          <img
            src={BubbleBottomRight}
            alt="Bottom Right Bubble"
            className="absolute top-0 -right-5 w-28 h-24 opacity-70 animate-spin-reverse"
          />
          <img
            src={BubbleBackground1}
            alt="Background Bubble"
            className="absolute top-10 left-10 w-108 h-90 opacity-70 animate-spin"
          />
          <img
            src={BubbleBackground2}
            alt="Background Bubble"
            className="absolute top-10 left-16 w-108 h-90 opacity-70 animate-spin-reverse"
          />
        </div>
      </div>
      {/* <Slider/> */}
    </div>
  );
}
