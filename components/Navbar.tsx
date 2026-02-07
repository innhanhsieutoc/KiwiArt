import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform duration-300" aria-label="Home">
          KiwiArt
        </a>
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ease-in-out relative group
                ${activeSection === item.href.substring(1) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
              aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 transform transition-transform duration-300 ease-out
                ${activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              ></span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2 transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out w-full text-center
                ${activeSection === item.href.substring(1) ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
              aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};