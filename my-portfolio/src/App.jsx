import React, { useEffect } from 'react';
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Languages from "./components/Languages";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-Q4GKRT5FE2`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Q4GKRT5FE2');
      window.onpopstate = () => {
        gtag('config', 'G-Q4GKRT5FE2', {
          page_path: window.location.pathname,
        });
      };
    };
  }, []);
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 text-gray-900">
     {/* Animated background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute w-[60vw] h-[60vw] bg-blue-200 rounded-full blur-3xl opacity-40 top-[-10vw] left-[-20vw] animate-pulse" />
        <div className="absolute w-[40vw] h-[40vw] bg-indigo-100 rounded-full blur-2xl opacity-30 bottom-[-10vw] right-[-10vw] animate-pulse" />
      </div>
      <Header />
      <main className="relative z-10 flex-1 pt-28 pb-12 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          <section id="about" className="transition-all duration-500">
            <Aboutme />
          </section>
          <section id="skills" className="transition-all duration-500">
            <Skills />
          </section>
          <section id="experience" className="transition-all duration-500">
            <Experience />
          </section>
          <section id="projects" className="transition-all duration-500">
            <Projects />
          </section>
          <section id="languages" className="transition-all duration-500">
            <Languages />
          </section>
        </div>
      </main>
      <footer className="relative z-10 bg-gray-900 text-white py-8 text-center shadow-inner w-full mt-auto">
        <p className="text-base font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Abhishreya Sharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
