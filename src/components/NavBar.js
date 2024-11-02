import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu

// Replace with your logo path
import Logo from "../Assets/Images/logo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative bg-[#F2FBFF] pt-5  fixed w-full shadow-md z-1111   rounded-tl-[50px] rounded-tr-[50px]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium w-full justify-center">
          <li className="hover:underline hover:text-green-600">Home</li>
          <li className="hover:underline hover:text-green-600">About Us</li>
          <li className="hover:underline hover:text-green-600">Wholesale</li>
          <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
          
        </div>
          <li className="hover:underline hover:text-green-600">Service</li>
          <li className="hover:underline hover:text-green-600">News</li>
          <li className="hover:underline hover:text-green-600">How it Works</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl text-gray-800" />
          ) : (
            <FaBars className="text-2xl text-gray-800" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-[#E6F7FF] space-y-4 py-4 text-center">
          <li className="hover:underline hover:text-green-600">Home</li>
          <li className="hover:underline hover:text-green-600">About Us</li>
          <li className="hover:underline hover:text-green-600">Wholesale</li>
          <li className="hover:underline hover:text-green-600">Service</li>
          <li className="hover:underline hover:text-green-600">News</li>
          <li className="hover:underline hover:text-green-600">How it Works</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
