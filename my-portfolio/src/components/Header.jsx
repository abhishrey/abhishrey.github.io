import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Header() {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);
  return (
    <header className="bg-blue-600 text-white py-16 text-center relative" data-aos="fade-down">
      <h1 className="text-5xl font-bold animate-fadeIn">Abhishreya Sharma</h1>
      <p className="text-2xl mt-3">Software Engineer</p>

      {/* Social Links with Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/abhishrey/" target="_blank" rel="noopener noreferrer" className="!text-white hover:!text-gray-300 flex items-center space-x-2">
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/abhishreya-sharma" target="_blank" rel="noopener noreferrer" className="!text-white hover:!text-gray-300 flex items-center space-x-2">
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a className="!text-white hover:text-gray-300 flex items-center space-x-2">
          <FaMapLocationDot size={24} />
          <span>Magdeburg, Germany</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
