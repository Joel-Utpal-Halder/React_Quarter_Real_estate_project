// File: src/components/about/TopPart.jsx

import React from "react";
import Container from "../commonComponents/Container"; // ✅ Reuse your existing container
import aboutPageShape from "../../assets/images/aboutPage/aboutPageShape.png"; // ✅ Import decorative shape image

const TopPart = () => {
  return (
    <section className="bg-gray-100 font-nunito">
      <Container>
        <div className="flex flex-col items-center justify-center text-center py-12 relative">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            About us
          </h1>

          {/* Breadcrumb navigation */}
          <p className="text-sm sm:text-base text-gray-600 flex items-center gap-2">
            {/* Red icon placeholder (replace with SVG if needed) */}
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Pages <span className="text-gray-400">›</span> About Us
          </p>

          {/* Decorative image (top-right corner) */}
          <img
            src={aboutPageShape}
            alt="Decorative shape"
            className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
        </div>
      </Container>
    </section>
  );
};

export default TopPart;