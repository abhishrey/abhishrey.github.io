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
    <section className="py-24 px-6 bg-white" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300">
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
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300">
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
          <span className="text-blue-600 text-sm mt-4 block">React | Flask | SQLite | GitLab</span>
        </div>

        {/* Project Card */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Learning Engagement Pattern Mining</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Data-driven project analyzing student behavior in e-learning platforms to derive engagement insights.
          </p>
          <ul className="text-gray-700 text-sm mt-4 list-disc list-outside pl-5 space-y-1">
            <li>Cleaned and processed large-scale learner interaction data with Pandas</li>
            <li>Performed clustering and pattern analysis to group engagement styles</li>
            <li>Built an interactive Streamlit dashboard for visualizing key patterns</li>
            <li>Stored and queried data with MySQL for efficient retrieval</li>
            <li>Developed the UI using Streamlit for intuitive interaction and exploration</li>
          </ul>
          <span className="text-blue-600 text-sm mt-4 block">MySQL | Python | Streamlit | Pandas</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
