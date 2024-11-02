import React, { useEffect, useState } from "react";

// Import your images here
import PhoneImage from "../Assets/Images/TwoLargePhones.png";
import BubbleTopLeft from "../Assets/Images/Mask group1.png";
import BubbleBottomLeft from "../Assets/Images/Mask group2.png";
import BubbleTopRight from "../Assets/Images/bubble1.png";
import BubbleBottomRight from "../Assets/Images/bubble1.png";
import BubbleBackground1 from "../Assets/Images/bubble1.png";
import BubbleBackground2 from "../Assets/Images/bubble1.png";
import BottomImage from "../Assets/Images/Vector-bottom.png";
import RightImage from "../Assets/Images/buuble-b.png"; // Path to the right-side image

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
    <div className="w-full min-h-[135vh] flex items-center justify-center relative bg-gradient-to-b from-[#F2FBFF] to-[#F2FBFF26] overflow-hidden">
      <div className="w-[90%]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 relative">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-4 relative z-10 text-center md:text-left">
            <h1 className="text-[2rem] md:text-[3.3rem] font-bold text-gray-800 leading-[0.6] sm:leading-[0.6]">
              <span className="flex justify-center md:justify-start gap-4">
                Largest <span className="text-customBlue">Wholesalers</span>
              </span>
              <br />
              <span className="flex justify-center md:justify-start gap-4">
                <span className="block">of</span>
                <span className="block text-customBlue animation-container">
                  {heading}
                </span>
              </span>
            </h1>

            <p className="text-gray-900 pt-5 text-base md:text-lg">
              Supply that meets Demand. Get the best wholesale prices of used
              and refurbished Mobile Stocks.
            </p>
            <a
              href="/"
              className="text-blue-600 flex justify-center md:justify-start items-center space-x-2"
            >
              <span>Learn More</span>
              <span>&rarr;</span>
            </a>

            {/* Email Input and Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-2">
              <div className="flex items-center border border-green-400 rounded-3xl overflow-hidden w-full md:w-auto">
                <i className="fas fa-envelope text-green-400 px-4"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-2 flex-1 rounded-3xl border-0 focus:outline-none focus:ring-0"
                />
              </div>
              <button className="w-full md:w-auto px-5 py-2 bg-subscribe border-2 text-lg text-white rounded-3xl hover:bg-white hover:text-subscribe hover:border-subscribe flex items-center justify-center">
                Subscribe
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="w-full md:w-auto px-5 py-2 bg-stocklist border-2 text-lg text-white rounded-3xl hover:bg-white hover:text-stocklist hover:border-stocklist flex items-center justify-center">
                <i className="fas fa-arrow-down mr-2"></i>
                Stock List
              </button>
            </div>

            {/* Social Icons and People Registered */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-4 mt-4">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="icon-gradient p-2 rounded-full text-white"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="/"
                  className="icon-gradient p-2 rounded-full text-white"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="/"
                  className="icon-gradient p-2 rounded-full text-white"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
                <a
                  href="/"
                  className="icon-gradient p-2 rounded-full text-white"
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
              </div>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7CC140 0%, #388FCB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-bold text-center"
              >
                <i className="fas fa-users text-subscribe mr-2"></i>
                400k people Registered
              </span>
            </div>

            {/* Background Bubbles for Left Section */}
            <img
              src={BubbleTopLeft}
              alt="Top Left Bubble"
              className="absolute -top-24 -left-20 w-24 md:w-32 h-24 md:h-32 opacity-70"
            />
            <img
              src={BubbleBottomLeft}
              alt="Bottom Left Bubble"
              className="absolute z-[-1] -top-5 left-4 w-44 h-32 md:w-72 md:h-44 opacity-80"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mb-10 md:mb-0">
            <img
              src={PhoneImage}
              alt="Phone Display"
              className="w-48 md:w-64 h-auto z-10"
            />

            {/* Background Bubbles for Right Section */}
            <img
              src={BubbleTopRight}
              alt="Top Right Bubble"
              className="absolute top-0 -right-5 w-20 md:w-28 h-20 md:h-28 opacity-70 animate-spin"
            />
            <img
              src={BubbleBottomRight}
              alt="Bottom Right Bubble"
              className="absolute top-0 -right-5 w-20 md:w-28 h-16 md:h-24 opacity-70 animate-spin-reverse"
            />
            <img
              src={BubbleBackground1}
              alt="Background Bubble"
              className="absolute top-10 left-8 md:left-28 w-[16rem] h-[16rem] md:w-[24rem] md:h-[23rem] opacity-70 animate-spin"
            />
            <img
              src={BubbleBackground2}
              alt="Background Bubble"
              className="absolute top-10 left-8 md:left-32 w-[16rem] h-[16rem] md:w-[24rem] md:h-[23rem] opacity-70 animate-spin-reverse"
            />
          </div>
        </div>
      </div>

      {/* Bottom vector image */}
      <img
        src={BottomImage}
        alt="Bottom Vector Shape"
        className="absolute bottom-5 w-full"
      />

      {/* Right-side rotating background */}
      <div
        className="hidden md:block absolute -top-10 -right-[20%] h-full w-[70%] bg-no-repeat bg-right bg-contain animate-rocking opacity-70"
        style={{
          backgroundImage: `url(${RightImage})`,
        }}
      />

      {/* Animation Styles */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-spin {
            animation: spin 30s linear infinite;
          }

          @keyframes rocking {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(10deg);
            }
            75% {
              transform: rotate(-10deg);
            }
          }

          .animate-rocking {
            animation: rocking 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
