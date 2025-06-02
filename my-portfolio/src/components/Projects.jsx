import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-14 sm:py-24 px-2 sm:px-8 bg-gradient-to-br" data-aos="fade-up">
      <div className="">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-blue-700">Projects</h2>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">Selected works & research</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border">
            <h3 className="text-lg font-semibold text-gray-800">Master Thesis: End-to-End Data Science Pipeline</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Designed and implemented a scalable, automated machine learning pipeline for anomaly detection in PCB assembly using Google Cloud and MLOps.
            </p>
            <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
              <li>Used GCP services: Vertex AI, Cloud Run, GCS, Cloud Build</li>
              <li>Developed and tuned a K-Nearest Neighbors (KNN) model for anomaly detection</li>
              <li>Automated training, evaluation, deployment & batch predictions</li>
              <li>Enabled CI/CD with GitHub Actions and Dockerized components</li>
              <li>Integrated model monitoring and experiment tracking</li>
            </ul>
            <span className="text-blue-600 text-sm mt-4 block">Python | GCP | Docker | GitHub Actions | Pandas</span>
          </div>

          {/* Project Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border">
            <h3 className="text-lg font-semibold text-gray-800">Meowtopia: Social Media for Cat Lovers</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Full-stack social media app tailored for cat enthusiasts to share content, follow users, and interact.
            </p>
            <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
              <li>Developed frontend with React JSX and responsive Tailwind styling</li>
              <li>Utilized React Hooks for state management and lifecycle handling</li>
              <li>Implemented client-side routing using React Router</li>
              <li>Backend REST API with Flask; handled auth, posts, and media uploads</li>
              <li>Implemented SQLite for lightweight persistence and session management</li>
              <li>Used GitLab for version control</li>
            </ul>
            <span className="text-blue-600 text-sm mt-4 block">React | Python | Flask | SQLite | GitLab</span>
          </div>

          {/* Project Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border">
            <h3 className="text-lg font-semibold text-gray-800">Learning Engagement Pattern Mining</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Data-driven project analyzing student behavior in e-learning platforms to derive engagement insights.
            </p>
            <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
              <li>Cleaned and processed large-scale learner interaction data with Pandas</li>
              <li>Performed clustering and pattern analysis to group engagement styles</li>
              <li>Built an interactive Streamlit dashboard for visualizing key patterns</li>
              <li>Stored and queried data with MySQL for efficient retrieval</li>
            </ul>
            <span className="text-blue-600 text-sm mt-4 block">MySQL | Python | Streamlit | Pandas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
