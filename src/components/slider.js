// src/components/Slider.js
import React from "react";
import img1 from "../Assets/Images/Vector1.png";
import img2 from "../Assets/Images/vector2.png";
import img3 from "../Assets/Images/Vector3.png";

export default function Slider() {
  // Original image array
  const images = [img1, img2, img3]; // Add more images if you have them
  const totalImages = 1000; // Total images to show on the screen

  // Create an array with sufficient images to fill the slider
  const displayImages = Array.from({ length: totalImages }, (_, index) => images[index % images.length]);

  return (
    <div className="slider-container overflow-hidden py-4">
      <div className="slider-track flex animate-scroll">
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sliding image ${index + 1}`}
            className="inline-block mx-2 w-16 h-20 object-contain p-2" // Adjust size as needed
          />
        ))}
      </div>
    </div>
  );
}
