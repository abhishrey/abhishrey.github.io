import React, { useEffect } from 'react';
import profilePic from '../assets/abhi_img.png';
import { FaRegEnvelope, FaFileDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutme() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-8 py-14 sm:py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 rounded-3xl shadow-2xl" data-aos="fade-up">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">Hi, I'm Abhishreya 👋</h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
          I am a <span className="font-bold text-yellow-300">Software Engineer</span> with <span className="font-bold text-yellow-300">3.5+ years</span> of experience in Web & Software Development. Passionate about leveraging technology to solve real-world problems.
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-6">
          My expertise includes <span className="font-semibold text-yellow-200">React, JavaScript, Python, REST API, and CI/CD</span>. I thrive in dynamic environments and love building scalable, efficient solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="mailto:abhishreyas10@gmail.com"
            className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-600 hover:text-white transition">
            <FaRegEnvelope className="text-2xl" />
            Contact Me
          </a>
          {/* <a href="https://drive.google.com/file/d/1JQqScSJFojFO6eAbo_j1kjd11CKSQ159/view?usp=drive_link"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-blue-600 hover:text-white transition">
            <FaFileDownload className="text-2xl" />
            Download Resume
          </a> */}
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
        <img src={profilePic} alt="Profile"
          className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: "radial-gradient(circle at 80% 20%, #fff3, transparent 70%)"}} />
    </section>
  );
}

export default Aboutme;
