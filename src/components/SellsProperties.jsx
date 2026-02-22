// ✅ Import dependencies
import React from "react";
import Container from "../components/CommonComponents/Container";

// ✅ Import images
import sellsPropLeft1 from "../assets/images/homePage/sellsPropLeft_1.png";
import sellsPropLeft2 from "../assets/images/homePage/sellsPropLeft_2.png";
import sellsPropLeft3 from "../assets/images/homePage/sellsPropLeft_3.png";

import sellsPropRight1 from "../assets/images/homePage/sellsPropRight_1.png";
import sellsPropRight2 from "../assets/images/homePage/sellsPropRight_2.png";
import sellsPropRight3 from "../assets/images/homePage/sellsPropRight_3.png";

// ✅ Import React Icons
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";

// ✅ Dynamic data
const propertyFeatures = [
  { id: 1, number: "3", icon: <FaBed />, text: "Bedrooms" },
  { id: 2, number: "2", icon: <FaBath />, text: "Bathrooms" },
  { id: 3, number: "2", icon: <FaCar />, text: "Car Parking" },
  { id: 4, number: "3450", icon: <FaRulerCombined />, text: "Square Ft" },
];

const leftImages = [sellsPropLeft1, sellsPropLeft2, sellsPropLeft3];
const rightImages = [sellsPropRight1, sellsPropRight2, sellsPropRight3];

const SellsProperties = () => {
  return (
    <div className="bg-white py-16">
      <Container>
        {/* ✅ Two-Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* ✅ LEFT SIDE */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <span className="inline-block bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Today Sells Properties
              </h2>
              <p className="text-gray-600 mt-2 max-w-md text-sm md:text-base leading-relaxed">
                Houzez allows you to design unlimited panels <br />
                and real estate custom forms to capture leads and keep record of all information.
              </p>
            </div>

            {/* Events */}
            <ul className="space-y-2 mb-6">
              <li className="text-gray-700 font-medium">• Live Music Concerts at Luviana</li>
              <li className="text-gray-700 font-medium">• Our Secret Island Boat Tour is Just for You</li>
              <li className="text-gray-700 font-medium">• Live Music Concerts at Luviana</li>
              <li className="text-gray-700 font-medium">• Live Music Concerts at Luviana</li>
            </ul>

            {/* Property Features Row */}
            <div className="flex items-center">
              {propertyFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center relative px-4"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center space-x-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {feature.number}
                    </h3>
                    <span className="text-orange-500 text-lg">{feature.icon}</span>
                  </div>
                  {/* Text */}
                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    {feature.text}
                  </p>

                  {/* Vertical separator except last */}
                  {index < propertyFeatures.length - 1 && (
                    <div className="absolute right-0 top-0 h-full w-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Small Images */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {leftImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Property Left ${index + 1}`}
                  className="rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* ✅ RIGHT SIDE: Big + Two stacked smaller */}
          <div className="grid grid-cols-2 gap-4">
            {/* Big Image */}
            <div className="col-span-1">
              <img
                src={rightImages[0]}
                alt="Big Property"
                className="w-full h-full rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Two stacked smaller */}
            <div className="flex flex-col gap-4">
              <img
                src={rightImages[1]}
                alt="Property Small 1"
                className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src={rightImages[2]}
                alt="Property Small 2"
                className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SellsProperties;