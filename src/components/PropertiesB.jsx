// ✅ Import dependencies
import React from "react";
import Container from "./commonComponents/Container";
import {
  FaCar, FaSwimmingPool, FaShieldAlt, FaHospital,
  FaBook, FaBed, FaHome, FaChild
} from "react-icons/fa";

// ✅ Import amenity icons (8 icons provided in assets)
import icon1 from "../assets/images/homePage/PropertiesBIco_1.png";
import icon2 from "../assets/images/homePage/PropertiesBIco_2.png";
import icon3 from "../assets/images/homePage/PropertiesBIco_3.png";
import icon4 from "../assets/images/homePage/PropertiesBIco_4.png";
import icon5 from "../assets/images/homePage/PropertiesBIco_5.png";
import icon6 from "../assets/images/homePage/PropertiesBIco_6.png";
import icon7 from "../assets/images/homePage/PropertiesBIco_7.png";
import icon8 from "../assets/images/homePage/PropertiesBIco_8.png";

// ✅ Dynamic data for amenities
const amenitiesData = [
  { id: 1, label: "Parking Space", icon: icon1, reactIcon: <FaCar /> },
  { id: 2, label: "Swimming Pool", icon: icon2, reactIcon: <FaSwimmingPool /> },
  { id: 3, label: "Private Security", icon: icon3, reactIcon: <FaShieldAlt /> },
  { id: 4, label: "Medical Center", icon: icon4, reactIcon: <FaHospital /> },
  { id: 5, label: "Library Area", icon: icon5, reactIcon: <FaBook /> },
  { id: 6, label: "King Size Beds", icon: icon6, reactIcon: <FaBed /> },
  { id: 7, label: "Smart Homes", icon: icon7, reactIcon: <FaHome /> },
  { id: 8, label: "Kid's Playland", icon: icon8, reactIcon: <FaChild /> },
];

const PropertiesB = () => {
  return (
    <Container>
      {/* ✅ Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
          Properties
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Featured Listings
        </h2>
      </div>

      {/* ✅ Amenities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenitiesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:shadow-gray-400 transition-shadow duration-300"
          >
            {/* Amenity Icon (image + react icon for fallback/decoration) */}
            <div className="w-16 h-16 flex items-center justify-center mb-3">
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Label */}
            <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center">
              {item.label}
            </h3>

            {/* Optional React Icon (secondary visual aid) */}
            <span className="text-orange-500 text-lg mt-2">
              {item.reactIcon}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PropertiesB;