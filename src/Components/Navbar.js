import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            BrandLogo
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <ul className="grid grid-cols-4 gap-4 text-white">
              <li>
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-gray-300">Flowers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">About</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col gap-2 mt-4 text-white">
              <li>
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#flowers" className="hover:text-gray-300">Flowers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">About</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
