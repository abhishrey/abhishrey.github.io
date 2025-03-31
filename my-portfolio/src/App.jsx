import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaDocker, FaFlask, FaAngular, FaGit, FaJira,FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiStreamlit, SiPandas , SiNumpy , SiGithubactions, SiJfrogpipelines } from "react-icons/si";
import { FaUserGraduate, FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineTeam } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import profilePic from './assets/abhi_img.png';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-16 text-center relative">
        <h1 className="text-5xl font-bold animate-fadeIn">Abhishreya Sharma</h1>
        <p className="text-2xl mt-3">Software Engineer</p>

        {/* Social Links with Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/abhishrey/" className="!text-white hover:text-gray-300 flex items-center space-x-2">
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abhishreya-sharma" className="!text-white hover:text-gray-300 flex items-center space-x-2">
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://drive.google.com/file/d/1JQqScSJFojFO6eAbo_j1kjd11CKSQ159/view?usp=drive_link"
            className="!text-white hover:text-gray-300 flex items-center space-x-2">
            <FaFileDownload size={24} />
            <span>Resume</span>
          </a>
        </div>


      </header>
      

      <section className="py-16 px-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mx-4 mt-12 flex flex-col md:flex-row items-center">
        {/* Left Section - Text Content */}
        <div className="md:w-2/3 text-center md:text-left animate-fadeIn">
          <h2 className="text-4xl font-extrabold mb-4 tracking-wide">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a <span className="font-bold text-yellow-400">Master's student in Informatik</span> with <span className="font-bold text-yellow-400">3.5+ years</span> of experience in Web & Software Development.  
            I'm Passionate about leveraging technology to solve real-world problems.
          </p>
          <p className="text-lg mt-4">
            My expertise includes <span className="font-semibold text-yellow-400">JavaScript, Python, React, Angular, and CI/CD</span>.  
            I thrive in dynamic environments and love building scalable, efficient solutions.
          </p>
          
          {/* Contact Button */}
          <a href="mailto:abhishreyas10@gmail.com" 
            className="flex justify-center gap-6 mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:bg-blue-600 hover:text-white hover:scale-105 ">
            <FaRegEnvelope className="text-3xl" /> Contact Me
          </a>
        </div>

        {/* Right Section - (Optional: Add an Image Here) */}
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img src={profilePic} alt="Profile" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-110" />
        </div>
      </section>

      

      {/* Skills Section */}
      <section className="py-20 px-10 bg-gray-100">
  
        <h2 className="text-2xl font-bold text-center mb-6">Skills</h2>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-center gap-6">
          
          {/* Language Skills */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <FaPython />, label: "Python", color: "bg-blue-500" },
                { icon: <FaJs />, label: "JavaScript", color: "bg-yellow-500" },
                { icon: <FaHtml5 />, label: "HTML5", color: "bg-red-500" },
                { icon: <FaCss3 />, label: "CSS3", color: "bg-blue-600" },
                { icon: <FaFlask />, label: "Flask", color: "bg-orange-700" },
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
            <div className="flex flex-wrap justify-center gap-4">
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
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <FaDocker />, label: "Docker", color: "bg-blue-700" },
                { icon: <FaGit />, label: "Git", color: "bg-orange-500" },
                { icon: <SiGithubactions />, label: "GitHub Actions", color: "bg-cyan-700" },
                { icon: <TbApi />, label: "REST API", color: "bg-indigo-600" },
                { icon: <SiJfrogpipelines />, label: "CI/CD", color: "bg-red-600" },
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
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <MdLeaderboard />, label: "Leadership", color: "bg-blue-300" },
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
      </section>

      {/* Experience Section */}
      <section className="py-20 px-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Experience</h2>
        
        <div className="relative border-l-4 border-blue-500 mx-8">
          {/* Job 1 */}
          <div className="ml-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">WerkStudent: Robert Bosch</h3>
            <p className="text-gray-600">10/2023 - Present</p>
            <p className="text-gray-600">Renningen, Germany</p>
            <ul className="list-disc pl-5 mt-3 text-gray-800">
              <li>Developed a custom GitHub Action to cache and restore project dependencies, reducing build and deployment time by 50%.</li>
              <li>Leveraged software development skills to design and implement a web app for managing GitHub repositories, optimizing deployment through CI/CD pipelines.</li>
              <li>Designed and developed a Streamlit web app for a Machine Learning classifier.</li>
              <li>Prototyped a React JS-based annotation tool for image region selection.</li>
              <li>Ensured software reliability through comprehensive unit and system testing.</li>
            </ul>
          </div>
          </div>

          {/* Job 2 */}
          <div className="ml-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Research Assistant: OVGU - A.I LAB</h3>
            <p className="text-gray-600">03/2023 - 12/2023</p>
            <p className="text-gray-600">Magdeburg, Germany</p>
            <ul className="list-disc pl-5 mt-3 text-gray-800">
              <li>Designed and developed a React JS-based user study toolbox to load audio waveforms and conduct seamless annotations.</li>
              <li>Improved the user interface of an existing web app to enhance usability and aesthetics.</li>
            </ul>
          </div>
          </div>

          {/* Job 3 */}
          <div className="ml-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Senior Systems Engineer: INFOSYS</h3>
            <p className="text-gray-600">11/2019 - 08/2022</p>
            <p className="text-gray-600">Bangalore, India</p>
            <ul className="list-disc pl-5 mt-3 text-gray-800">
              <li>Implemented and maintained web applications for the Indian government’s tax portal, using Angular, AngularJS, TypeScript, JavaScript, HTML5, CSS3.</li>
              <li>Managed database interaction with MySQL and integrated RESTful Web Services, ensuring secure and efficient data handling.</li>
              <li>Participated in all phases of project development, collaborating with cross-functional teams in Agile workflows to gather requirements, address bugs, and manage deployments using JIRA.</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      

      {/* Projects Section */}
      <section className="py-20 px-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6 rounded shadow-lg hover:bg-gray-300 transition">
            <h3 className="font-semibold">Master Thesis: End-to-End Data Science Pipeline</h3>
            <p className="text-gray-700 mt-2">
              Implementing an anomaly detection pipeline using GCP & MLOps.
            </p>
            <span className="text-blue-500 text-sm mt-2">Python | GCP | Docker</span>
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-lg hover:bg-gray-300 transition">
            <h3 className="font-semibold">Meowtopia: Social media for cat lovers</h3>
            <p className="text-gray-700 mt-2">Built a social media web application with React JSX and Flask</p>
            <span className="text-blue-500 text-sm mt-2">React | Flask | SQLite | GitLab</span>
          </div>
          <div className="bg-gray-200 p-6 rounded shadow-lg hover:bg-gray-300 transition">
            <h3 className="font-semibold">Learning Engagement Pattern Mining</h3>
            <p className="text-gray-700 mt-2">Analyzed and identified patterns in learner engagement with educational content.</p>
            <span className="text-blue-500 text-sm mt-2">MySQL | Python | Streamlit | Pandas</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Languages</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-blue-500 text-white rounded-full px-6 py-3 shadow-md">
            English - Professional
          </div>
          <div className="bg-green-500 text-white rounded-full px-6 py-3 shadow-md">
            German - Intermediate
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-12">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishreya Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
