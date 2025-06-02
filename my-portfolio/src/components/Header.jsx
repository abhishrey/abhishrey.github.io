import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-4">
        {/* Name and Position */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-tight leading-tight">
            Abhishreya Sharma
          </span>
          <span className="text-sm sm:text-base text-gray-500 font-medium mt-1 tracking-wide">
            Software Engineer
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex gap-4 sm:gap-8 mt-3 md:mt-0">
          <a href="#about" className="hover:text-blue-600 font-medium transition">About</a>
          <a href="#skills" className="hover:text-blue-600 font-medium transition">Skills</a>
          <a href="#experience" className="hover:text-blue-600 font-medium transition">Experience</a>
          <a href="#projects" className="hover:text-blue-600 font-medium transition">Projects</a>
          <a href="#languages" className="hover:text-blue-600 font-medium transition">Languages</a>
        </nav>
        {/* Socials and Location */}
        <div className="flex items-center gap-4 sm:gap-6 mt-3 md:mt-0">
          <a href="https://github.com/abhishrey/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/abhishreya-sharma" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition">
            <FaLinkedin size={22} />
          </a>
          <span className="hidden sm:flex items-center gap-1 text-gray-500 text-sm ml-2">
            <FaMapLocationDot size={18} />
            Magdeburg, Germany
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
