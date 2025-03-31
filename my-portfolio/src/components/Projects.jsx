import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Projects() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
        <section className="py-20 px-10 bg-white" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-6 rounded shadow-lg hover:bg-gray-300 transition">
            <h3 className="font-semibold">Master Thesis: End-to-End Data Science Pipeline</h3>
            <p className="text-gray-700 mt-2">
              Implementing an anomaly detection pipeline using Google Cloud Platform & MLOps principles.
            </p>
            <span className="text-blue-500 text-sm mt-2">Python | GCP | Docker | Github Actions</span>
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
      
    );
  }
  
  export default Projects;