import React, { useEffect } from 'react';
import { FaLanguage } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Languages() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-8" data-aos="fade-up">
      <div className="">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-blue-700">Languages</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 bg-blue-500 text-white rounded-full px-8 py-4 shadow-lg text-lg font-semibold">
            <FaLanguage className="text-2xl" /> English - Professional
          </div>
          <div className="flex items-center gap-3 bg-green-500 text-white rounded-full px-8 py-4 shadow-lg text-lg font-semibold">
            <FaLanguage className="text-2xl" /> German - Intermediate
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;