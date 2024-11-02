import React from 'react';
import BottomImage from "../Assets/Images/Vector-bottom.png";
import RightImage from "../Assets/Images/buuble-b.png"; // Path to the right-side image

export default function Example() {
  return (
    <div className="relative min-h-[130vh] flex justify-center items-center bg-gradient-to-b from-[#F2FBFF] to-[#F2FBFF26] overflow-hidden">
      {/* Main content */}
      <div className="text-center p-8 z-10">
        <h1 className="text-4xl font-bold text-gray-800">Your Main Content Here</h1>
        <p className="text-lg text-gray-600 mt-4">
          This is where you can place your content.
        </p>
      </div>

      {/* Bottom vector image */}
      <img
        src={BottomImage}
        alt="Bottom Vector Shape"
        className="absolute bottom-0 w-full"
      />

      {/* Right-side spinning background */}
      <div
        className="absolute -top-10 -right-[20%] h-full w-[70%] bg-no-repeat bg-right bg-contain animate-spin-slow opacity-70"
        style={{
          backgroundImage: `url(${RightImage})`
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
          
          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
