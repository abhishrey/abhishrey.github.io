import React, { useEffect } from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3, FaFlask, FaReact, FaAngular, FaDocker, FaGit, FaJira } from 'react-icons/fa';
import { SiStreamlit, SiPandas, SiNumpy, SiGithubactions, SiJfrogpipelines, SiGooglecloud } from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { FaSyncAlt } from "react-icons/fa";
import { MdEventAvailable, MdLeaderboard } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-8 bg-gradient-to-br" data-aos="fade-up">
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-blue-700">Skills</h2>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">A snapshot of my technical and soft skills</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {/* Language Skills */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Languages & Data</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[ 
                { icon: <FaPython />, label: "Python", color: "bg-blue-500" },
                { icon: <FaJs />, label: "JavaScript", color: "bg-yellow-500" },
                { icon: <FaHtml5 />, label: "HTML5", color: "bg-red-500" },
                { icon: <FaCss3 />, label: "CSS3", color: "bg-blue-600" },
                { icon: <FaFlask />, label: "Flask", color: "bg-orange-700" },
                { icon: <TbSql  />, label: "SQL", color: "bg-blue-600" },
                { icon: <SiPandas />, label: "Pandas", color: "bg-green-600" },
                { icon: <SiNumpy />, label: "NumPy", color: "bg-blue-600" },
              ].map((skill, index) => (
                <div key={index} className={`${skill.color} text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  {skill.icon} <span className="font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[ 
                { icon: <FaReact />, label: "React JS", color: "bg-blue-700" },
                { icon: <FaAngular />, label: "Angular", color: "bg-green-600" },
                { icon: <SiStreamlit />, label: "Streamlit", color: "bg-red-600" },
              ].map((skill, index) => (
                <div key={index} className={`${skill.color} text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  {skill.icon} <span className="font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Tools & Methodologies */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Tools & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[ 
                { icon: <FaDocker />, label: "Docker", color: "bg-blue-700" },
                { icon: <FaGit />, label: "Git", color: "bg-orange-500" },
                { icon: <SiGithubactions />, label: "GitHub Actions", color: "bg-cyan-700" },
                { icon: <TbApi />, label: "REST API", color: "bg-indigo-600" },
                { icon: <SiJfrogpipelines />, label: "CI/CD", color: "bg-red-600" },
                { icon: <SiGooglecloud />, label: "Google Cloud", color: "bg-cyan-400" },
                { icon: <FaJira />, label: "Jira", color: "bg-yellow-600" },
              ].map((skill, index) => (
                <div key={index} className={`${skill.color} text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  {skill.icon} <span className="font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2 text-blue-600">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[ 
                { icon: <FaSyncAlt  />, label: "Agile", color: "bg-cyan-900" },
                { icon: <MdLeaderboard />, label: "Leadership", color: "bg-blue-400" },
                { icon: <MdEventAvailable />, label: "Event Coordination", color: "bg-green-500" },
                { icon: <AiOutlineTeam />, label: "Team Coordination", color: "bg-blue-500" },
              ].map((skill, index) => (
                <div key={index} className={`${skill.color} text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  {skill.icon} <span className="font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
