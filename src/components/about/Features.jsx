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
        className="absolute -left-18 top-65 w-24 md:w-40 lg:w-56"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text + Features */}
          <div className="space-y-8">
            {/* Section label with light orange background */}
            <span className="inline-block bg-orange-100 text-orange-600 text-sm sentenceCase tracking-widest font-semibold px-3 py-1 rounded-full">
              Core Features
            </span>

            {/* Section heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Dream Living Space <br /> Setting New Standards
            </h2>

            {/* Features list as cards */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 transition duration-300 hover:bg-orange-500 hover:text-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center transition duration-300 group-hover:bg-orange-600">
                  <img src={icon1} alt="Residency Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                    The Perfect Residency
                  </h3>
                  <p className="text-[13px] text-gray-600 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 transition duration-300 hover:bg-orange-500 hover:text-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center transition duration-300 group-hover:bg-orange-600">
                  <img src={icon2} alt="Architect Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                    Global Architect Experts
                  </h3>
                  <p className="text-[13px] text-gray-600 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisc do eiusmod
                    tempor incididunt ut labore et
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 transition duration-300 hover:bg-orange-500 hover:text-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center transition duration-300 group-hover:bg-orange-600">
                  <img src={icon3} alt="Storage Icon" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                    Built-in Storage Cupboards
                  </h3>
                  <p className="text-[13px] text-gray-600 group-hover:text-white">
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