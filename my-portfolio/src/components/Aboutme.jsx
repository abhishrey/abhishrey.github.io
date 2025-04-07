import React, { useEffect } from 'react';
import profilePic from '../assets/abhi_img.png';
import { FaRegEnvelope, FaFileDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Aboutme() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <section className="py-16 px-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mx-4 mt-12 flex flex-col md:flex-row items-start" data-aos="fade-up">
      <div className="md:w-2/3 text-center md:text-left animate-fadeIn">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a <span className="font-bold text-yellow-400">Master's student in Informatik</span> with <span className="font-bold text-yellow-400">3.5+ years</span> of experience in Web & Software Development. Passionate about leveraging technology to solve real-world problems.
        </p>
        <p className="text-lg mt-4">
          My expertise includes <span className="font-semibold text-yellow-400">JavaScript, Python, React, REST API and CI/CD</span>.  
          I thrive in dynamic environments and love building scalable, efficient solutions.
        </p>

        <div className="flex justify-start items-center gap-x-6 mt-6">
          <a href="mailto:abhishreyas10@gmail.com" 
            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105">
            <FaRegEnvelope className="text-3xl" /> 
            <span>Contact Me</span>
          </a>
          {/* <a href="https://drive.google.com/file/d/1JQqScSJFojFO6eAbo_j1kjd11CKSQ159/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105">
            <FaFileDownload className="text-3xl" /> 
            <span>Download Resume</span>
          </a> */}
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
        <img src={profilePic} alt="Profile" 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </section>
  );
}

export default Aboutme;
