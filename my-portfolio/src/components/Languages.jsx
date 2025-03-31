import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Languages() {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);
  return (
        <section className="py-20 px-10 bg-white" data-aos="fade-up">
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
      
    );
  }
  
  export default Languages;