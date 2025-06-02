import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-8 bg-gradient-to-br" data-aos="fade-right">
      <div className="">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-blue-700">Experience</h2>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">Professional journey & key roles</p>
        <div className="relative border-l-4 border-blue-400 pl-4 sm:pl-8">
          {/* Job 1 */}
          <div className="mb-12 group">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-200 group-hover:shadow-xl transition transform hover:scale-105 hover:shadow-xl duration-300">
              <h3 className="font-semibold text-xl">WerkStudent: Robert Bosch</h3>
              <p className="text-gray-600">10/2023 - Present</p>
              <p className="text-gray-600">Renningen, Germany</p>
              <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
                <li>Developed a custom GitHub Action to cache and restore project dependencies, reducing build and deployment time by 50%.</li>
                <li>Leveraged software development skills to design and implement a web app for managing GitHub repositories, optimizing deployment through CI/CD pipelines.</li>
                <li>Designed and developed a Streamlit web app for a Machine Learning classifier.</li>
                <li>Prototyped a React JS-based annotation tool for image region selection.</li>
                <li>Ensured software reliability through comprehensive unit and system testing.</li>
              </ul>
              <div className="text-blue-600 text-sm mt-4 block">
                Tech stack: GitHub Actions | Python | Streamlit | React | CI/CD | Docker | Unit Testing | REST | GraphQL | JIRA | Agile | GIT
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="mb-12 group">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-200 group-hover:shadow-xl transition transform hover:scale-105 hover:shadow-xl duration-300">
              <h3 className="font-semibold text-xl">Research Assistant: Otto-von-Guericke-University - AI LAB</h3>
              <p className="text-gray-600">03/2023 - 12/2023</p>
              <p className="text-gray-600">Magdeburg, Germany</p>
              <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
                <li>Designed and developed a React JS-based user study toolbox to load audio waveforms and conduct seamless annotations.</li>
                <li>Improved the user interface of an existing web app to enhance usability and aesthetics.</li>
              </ul>
              <div className="text-blue-600 text-sm mt-4 block">
                Tech stack: React | HTML5 | Tailwind | JavaScript | UI/UX | GitLab
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="mb-12 group">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-200 group-hover:shadow-xl transition transform hover:scale-105 hover:shadow-xl duration-300">
              <h3 className="font-semibold text-xl">Senior Systems Engineer: Infosys</h3>
              <p className="text-gray-600">11/2019 - 08/2022</p>
              <p className="text-gray-600">Bangalore, India</p>
              <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
                <li>Implemented and maintained web applications for the Indian government’s tax portal, using Angular, AngularJS, TypeScript, JavaScript, HTML5, CSS3.</li>
                <li>Managed database interaction with MySQL and integrated RESTful Web Services, ensuring secure and efficient data handling.</li>
                <li>Participated in all phases of project development, collaborating with cross-functional teams in Agile workflows to gather requirements, address bugs, and manage deployments using JIRA.</li>
              </ul>
              <div className="text-blue-600 text-sm mt-4 block">
                Tech stack: Angular | AngularJS | TypeScript | JavaScript | HTML5 | CSS3 | MySQL | REST | JIRA | Agile | SVN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;