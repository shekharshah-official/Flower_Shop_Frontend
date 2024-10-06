import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-6 hidden md:block"> {/* Hidden on small screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg md:text-xl font-bold">BrandLogo</h1>
          </div>

          {/* Navigation Links */}
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium">
              Contact
            </a>
            <a href="#flower" className="text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium">
              Flower
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white px-3 py-1 rounded-md text-sm font-medium">
              Gallery
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-4 text-center md:text-left">
          <p className="text-gray-400 text-sm md:text-base">1234 Street Name, City, State, 12345</p>
          <p className="text-gray-400 text-sm md:text-base">Email: info@yourdomain.com</p>
          <p className="text-gray-400 text-sm md:text-base">Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
