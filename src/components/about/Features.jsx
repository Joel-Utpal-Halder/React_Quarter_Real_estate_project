// File: src/components/about/Features.jsx

import React from "react";
import Container from "../commonComponents/Container";

// Import images
import leftShape from "../../assets/images/aboutPage/features_1.png";
import rightImage from "../../assets/images/aboutPage/features_2.png";
import icon1 from "../../assets/images/aboutPage/featuresIcon_1.png";
import icon2 from "../../assets/images/aboutPage/featuresIcon_2.png";
import icon3 from "../../assets/images/aboutPage/featuresIcon_3.png";

const Features = () => {
  return (
    <section className="relative bg-gray-100 py-16 font-nunito">
      {/* Left decorative shape */}
      <img
        src={leftShape}
        alt="Decorative shape"
        className="absolute left-0 top-0 w-24 md:w-40 lg:w-56"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text + Features */}
          <div className="space-y-6">
            {/* Section label with light orange background */}
            <span className="inline-block bg-orange-100 text-orange-600 text-sm uppercase tracking-widest font-semibold px-3 py-1 rounded">
              Core Features
            </span>

            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Dream Living Space <br /> Setting New Standards
            </h2>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img src={icon1} alt="Residency Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    The Perfect Residency
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              {/* Feature 2 (highlighted in red) */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img src={icon2} alt="Architect Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600">
                    Global Architect Experts
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img src={icon3} alt="Storage Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Built-in Storage Cupboards
                  </h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: House image */}
          <div className="relative">
            <img
              src={rightImage}
              alt="Modern House"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;