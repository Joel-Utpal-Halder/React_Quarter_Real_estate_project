import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExploreProperties = () => {
  return (
    <section className="relative pt-0 pb-30 px-6 lg:px-20 -mt-10">
      
      <div className="max-w-[1050px] mx-auto bg-orange-600 text-white shadow-lg p-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Headings */}
        <div className="text-center md:text-left md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Looking for a Dream Home?
          </h2>
          <p className="text-lg md:text-sm">
            We help you make the dream of a new house a reality
          </p>
        </div>

        {/* Right Side: Button with simple link */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <a
            href="/properties" // navigates to another page
            className="flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-[2px] font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Properties <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreProperties;