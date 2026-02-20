import React, { useState } from "react";
import Container from "../components/CommonComponents/Container";
import Button from "../components/CommonComponents/Button";

// ✅ Import images (adjust paths if needed)
import aboutUsImage from "../assets/images/homePage/aboutUsOne.png";
import aboutIcon1 from "../assets/images/homePage/aboutIcon_1.png";
import aboutIcon2 from "../assets/images/homePage/aboutIcon_1.png";
import aboutIcon3 from "../assets/images/homePage/aboutIcon_1.png";
import aboutIcon4 from "../assets/images/homePage/aboutIcon_1.png";

// ✅ Data-driven approach: icons + text stored in an array
const features = [
  {
    id: 1,
    icon: aboutIcon1,
    title: "Smart Home Design",
    description: "Modern layouts with intelligent automation features.",
  },
  {
    id: 2,
    icon: aboutIcon2,
    title: "Beautiful Scene Around",
    description: "Properties surrounded by scenic and peaceful environments.",
  },
  {
    id: 3,
    icon: aboutIcon3,
    title: "Exceptional Lifestyle",
    description: "Enjoy premium living standards with world-class amenities.",
  },
  {
    id: 4,
    icon: aboutIcon4,
    title: "Complete 24/7 Security",
    description: "Round-the-clock protection for peace of mind.",
  },
];

const AboutUsOne = () => {
  // ✅ Example of using useState for dynamic interaction
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

          {/* ✅ Right Side: Text + Features */}
          <div className="space-y-6">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              The Leading Real Estate Rental Marketplace
            </h2>
            <p className="text-gray-600">
              Over 39,000 people work for us in more than 70 countries all over
              the world. This breadth of global coverage, combined with
              specialist services.
            </p>

            {/* ✅ Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Dynamic "Show More" toggle */}
            {showMore && (
              <p className="text-gray-600 italic">
                "Elimad minim veniam, quis nostrud exercitation ullamco laboris.
                Lorem ipsum dolor sit amet."
              </p>
            )}

            {/* ✅ Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={() => setShowMore(!showMore)}
                className="bg-orange-500 text-white px-6 py-3"
              >
                {showMore ? "Show Less" : "Know More"}
              </Button>
              <Button className="bg-gray-800 text-white px-6 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsOne;