import React, { useState } from "react";
import Container from "../components/CommonComponents/Container";
import Button from "../components/CommonComponents/Button";

// ✅ Import images
import aboutUsImage from "../assets/images/homePage/aboutUsOne.png";
import aboutIcon1 from "../assets/images/homePage/aboutIcon_1.png";
import aboutIcon2 from "../assets/images/homePage/aboutIcon_2.png";
import aboutIcon3 from "../assets/images/homePage/aboutIcon_3.png";
import aboutIcon4 from "../assets/images/homePage/aboutIcon_4.png";

// ✅ Features data (headline only, no description)
const features = [
  { id: 1, icon: aboutIcon1, title: "Smart Home Design" },
  { id: 2, icon: aboutIcon2, title: "Beautiful Scene Around" },
  { id: 3, icon: aboutIcon3, title: "Exceptional Lifestyle" },
  { id: 4, icon: aboutIcon4, title: "Complete 24/7 Security" },
];

const AboutUsOne = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* ✅ Left Side: Image */}
          <div className="w-full">
            <img
              src={aboutUsImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* ✅ Right Side */}
          <div className="space-y-6">
            {/* Top Heading */}
            <h4 className="text-orange-500 font-semibold uppercase tracking-wide">
              About Us
            </h4>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              The Leading Real Estate Rental Marketplace
            </h2>

            {/* ✅ Features List */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon inside circle */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 hover:bg-orange-500 transition">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* ✅ Two-line text block with light orange background */}
            <div className="bg-orange-100 p-4 rounded-md">
              <p className="text-gray-700 text-sm">
                Over 39,000 people work for us in more than 70 countries all
                over the world. This breadth of global coverage, combined with
                specialist services.
              </p>
            </div>

            {/* ✅ Single Button */}
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-orange-500 text-white px-6 py-3"
            >
              {showMore ? "Show Less" : "Know More"}
            </Button>

            {/* ✅ Toggle extra text */}
            {showMore && (
              <p className="text-gray-600 italic mt-2">
                "Elimad minim veniam, quis nostrud exercitation ullamco laboris.
                Lorem ipsum dolor sit amet."
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsOne;