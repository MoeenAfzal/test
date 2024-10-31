import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "../Assets/Images/TwoSmallPhones.png";
import bubbleImage from "../Assets/Images/bubble1.png"; // Make sure to import your bubble image

const products = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image,
  },
  {
    id: 2,
    title: "Iphone 14 Pro Max",
    description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image,
  },
  {
    id: 3,
    title: "Iphone 14 Pro Max",
    description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image,
  },
  {
    id: 4,
    title: "Iphone 14 Pro Max",
    description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image,
  },
  {
    id: 5,
    title: "Iphone 14 Pro Max",
    description: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    image,
  },
  // ... other products
];

export default function CardSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 relative">
      {/* Header Section */}
      <div className="text-center mb-6 relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={bubbleImage}
            alt="Bubble Background"
            className="w-60 h-24 opacity-100 translate-y-[-45%] translate-x-[-40%]" // Move image slightly to the left
          />
        </div>
        <h2 className="text-6xl font-bold text-white relative z-10 inline-flex items-center">
          Mobile
          <span className="ml-2 text-customBlue">Stock</span>
        </h2>
        <p className="text-lg text-gray-800 font-bold relative z-10 mt-10"> {/* Added mt-4 for spacing */}
          We stay up to date with the latest technology trends and offer innovative solutions. <br /> 
          that help you stay ahead in competition
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          renderBullet: (index, className) => {
            // Limit to a maximum of 4 bullets
            if (index < 4) {
              return `<span class="${className} custom-pagination-bullet"></span>`;
            }
            return ""; // Return empty string for excess bullets
          },
        }}
        loop={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-1 rounded-lg bg-gradient-to-t from-blue-500 to-green-500">
              {/* This div will create the gradient border */}
              <div className="border-2 border-transparent rounded-lg p-4 bg-gray-100 shadow-lg text-center transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination and Navigation Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <div className="swiper-button-prev-custom custom-nav-button w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500 text-green-500 rounded-full cursor-pointer">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="swiper-pagination-custom flex space-x-2 !w-auto"></div>
        <div className="swiper-button-next-custom custom-nav-button w-8 h-8 flex items-center justify-center bg-white border-2 border-green-500 text-green-500 rounded-full cursor-pointer ">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      <style>
        {`
          /* Custom pagination bullets */
          .custom-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color:  #BED9F6; /* Tailwind color for bg-blue-200 */
            border-radius: 9999px;
            transition: background-color 0.3s ease, width 0.3s ease, height 0.3s ease;
            display: inline-block;
          }

          /* Active bullet styling */
          .swiper-pagination-bullet-active.custom-pagination-bullet {
            background-color: #22c55e; /* Tailwind color for bg-green-500 */
            width: 40px;
            height: 16px;
          }
        `}
      </style>
    </div>
  );
}
