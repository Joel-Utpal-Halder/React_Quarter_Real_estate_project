// File: src/components/about/Features.jsx

import React from "react";
// Import the Container component you already created for consistent layout
import Container from "../commonComponents/Container";

// Import images (adjust paths if needed)
import leftShape from "../../assets/images/aboutPage/features_1.png";
import rightImage from "../../assets/images/aboutPage/features_2.png";
import icon1 from "../../assets/images/aboutPage/featuresIcon_1.png";
import icon2 from "../../assets/images/aboutPage/featuresIcon_2.png";
import icon3 from "../../assets/images/aboutPage/featuresIcon_3.png";

const Features = () => {
  return (
    <section className="relative bg-white py-16 font-nunito">
      {/* Left decorative shape */}
      <img
        src={leftShape}
        alt="Decorative shape"
        className="absolute left-0 top-0 w-24 md:w-40 lg:w-56"
      />

      {/* Use your common Container for consistent padding and max-width */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text + Features */}
          <div className="space-y-6">
            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Dream Living Space <br /> Setting New Standards
            </h2>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <img src={icon1} alt="Residency Icon" className="w-10 h-10" />
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
                <img src={icon2} alt="Architect Icon" className="w-10 h-10" />
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
                <img src={icon3} alt="Storage Icon" className="w-10 h-10" />
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