import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Experience() {
    useEffect(() => {
    AOS.init({
      duration: 3000, 
    });
  }, []);
  return (
        <section className="py-20 px-10 bg-gray-100" data-aos="fade-right">
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
            <h3 className="font-semibold text-xl">Research Assistant: Otto-von-Guericke-University - AI LAB</h3>
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
            <h3 className="font-semibold text-xl">Senior Systems Engineer: Infosys</h3>
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
      
    );
  }
  
  export default Experience;