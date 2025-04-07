import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
function App() {
  useEffect(() => {
    ReactGA.initialize('G-Q4GKRT5FE2');
    ReactGA.send('pageview');
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header /> 
      <Aboutme /> 
      <Skills />
      <Experience />
      <Projects />
      <Languages />
      
      <footer className="bg-gray-900 text-white py-6 text-center mt-12">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishreya Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
