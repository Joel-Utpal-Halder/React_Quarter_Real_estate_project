// ✅ Import dependencies
import React from "react";
import Container from "./commonComponents/Container";
import { FaArrowRight } from "react-icons/fa";

// ✅ Import amenity icons
import icon1 from "../assets/images/homePage/PropertiesBIco_1.png";
import icon2 from "../assets/images/homePage/PropertiesBIco_2.png";
import icon3 from "../assets/images/homePage/PropertiesBIco_3.png";
import icon4 from "../assets/images/homePage/PropertiesBIco_4.png";
import icon5 from "../assets/images/homePage/PropertiesBIco_5.png";
import icon6 from "../assets/images/homePage/PropertiesBIco_6.png";
import icon7 from "../assets/images/homePage/PropertiesBIco_7.png";
import icon8 from "../assets/images/homePage/PropertiesBIco_8.png";

// ✅ Dynamic data
const amenitiesData = [
  { id: 1, label: "Parking Space", icon: icon1 },
  { id: 2, label: "Swimming Pool", icon: icon2 },
  { id: 3, label: "Private Security", icon: icon3 },
  { id: 4, label: "Medical Center", icon: icon4 },
  { id: 5, label: "Library Area", icon: icon5 },
  { id: 6, label: "King Size Beds", icon: icon6 },
  { id: 7, label: "Smart Homes", icon: icon7 },
  { id: 8, label: "Kid's Playland", icon: icon8 },
];

const PropertiesB = () => {
  return (
    <Container>
      <div className="mt-20 mb-20">
        {/* ✅ Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
            Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Featured Listings
          </h2>
        </div>

        {/* ✅ Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {amenitiesData.map((item) => (
            <div key={item.id} className="relative">
              {/* Card */}
              <div className="group flex flex-col items-center justify-between bg-white shadow-xl rounded-lg p-6 transition-all duration-300 hover:bg-orange-500">
                {/* Icon circle */}
                <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-full bg-orange-50 transition-colors duration-300 group-hover:bg-white">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Label */}
                <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-8 transition-colors duration-300 group-hover:text-white">
                  {item.label}
                </h3>
              </div>

              {/* ✅ Arrow button (independent hover only, orange by default) */}
              <button className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-orange-500 transition-colors duration-300 hover:bg-orange-600 hover:text-white">
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PropertiesB;