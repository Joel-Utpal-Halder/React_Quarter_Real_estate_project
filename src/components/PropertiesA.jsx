// ✅ Import dependencies
import React from "react";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import { FaExpandArrowsAlt, FaRegHeart, FaPlusCircle } from "react-icons/fa";


// ✅ Import images (property + agents)
import propertyImg1 from "../assets/images/homePage/propertiesA_1.png";
import propertyImg2 from "../assets/images/homePage/propertiesA_2.png";
import propertyImg3 from "../assets/images/homePage/propertiesA_3.png";
import propertyImg4 from "../assets/images/homePage/propertiesA_4.png";

import agentImg1 from "../assets/images/homePage/propertiesA_1p.png";
import agentImg2 from "../assets/images/homePage/propertiesA_2p.png";
import agentImg3 from "../assets/images/homePage/propertiesA_3p.png";
import agentImg4 from "../assets/images/homePage/propertiesA_4p.png";

// ✅ Dynamic data for properties
const propertiesData = [
  {
    id: 1,
    image: propertyImg1,
    title: "New Apartment Nice View",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "3450",
    agent: { name: "William Sekio", image: agentImg1 },
  },
  {
    id: 2,
    image: propertyImg2,
    title: "Light and Modern Apartment",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "3450",
    agent: { name: "Alex Molsha", image: agentImg2 },
  },
  {
    id: 3,
    image: propertyImg3,
    title: "Comfortable Apartment",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "3450",
    agent: { name: "Shamim Osma", image: agentImg3 },
  },
  {
    id: 4,
    image: propertyImg4,
    title: "New Apartment Nice View",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury, Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "3450",
    agent: { name: "Kelvin Clein", image: agentImg4 },
  },
];

const PropertiesA = () => {
  return (
    <div className="py-20 px-2 md:px-4 lg:px-6 max-w-[2200px] mx-auto">
      {/* ✅ Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
          Properties
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Featured Listings
        </h2>
      </div>

      {/* ✅ Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {propertiesData.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-[2px] overflow-hidden hover:shadow-gray-400 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Property Image with Overlay */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-72 object-cover"
              />

              {/* ✅ FOR RENT badge */}
              <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] md:text-xs font-semibold px-3 py-1 rounded">
                FOR RENT
              </div>

              {/* ✅ Transparent overlay bar */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-3 py-2 text-[10px] md:text-xs text-white bg-black/40">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-orange-400" /> {property.location}
                </span>
                <div className="flex gap-3">
                  <span className="flex items-center gap-1">
                    <FaBed className="text-orange-400" /> {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath className="text-orange-400" /> {property.bathrooms}
                  </span>
                </div>
              </div>
            </div>

            {/* Price directly below image */}
            <div className="px-6 py-2">
              <span className="text-orange-500 font-bold text-sm">
                {property.price}
              </span>
            </div>

            {/* Property Content */}
            <div className="px-6 pb-6">
              {/* Title */}
              <h3 className="text-base md:text-[16px] font-semibold text-gray-800 mb-1">
                {property.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[11px] leading-5 mb-4 line-clamp-3">
                {property.description}
              </p>

              {/* ✅ Property Features Row */}
              <div className="flex items-start pt-3">
                {/* Bedrooms */}
                <div className="flex flex-col items-start relative px-3">
                  <div className="flex items-center space-x-1">
                    <h3 className="text-[14px] font-bold text-gray-800">
                      {property.bedrooms}
                    </h3>
                    <span className="text-orange-500 text-sm md:text-base">
                      <FaBed />
                    </span>
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">Bedrooms</p>
                  <div className="absolute right-0 top-0 h-full w-px bg-gray-200"></div>
                </div>

                {/* Bathrooms */}
                <div className="flex flex-col items-start relative px-3">
                  <div className="flex items-center space-x-1">
                    <h3 className="text-[14px] font-bold text-gray-800">
                      {property.bathrooms}
                    </h3>
                    <span className="text-orange-500 text-sm md:text-base">
                      <FaBath />
                    </span>
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">Bathrooms</p>
                  <div className="absolute right-0 top-0 h-full w-px bg-gray-200"></div>
                </div>

                {/* Square Ft */}
                <div className="flex flex-col items-start px-3">
                  <div className="flex items-center space-x-1">
                    <h3 className="text-[14px]  font-bold text-gray-800">
                      {property.area}
                    </h3>
                    <span className="text-orange-500 text-sm md:text-base">
                      <FaRulerCombined />
                    </span>
                  </div>
                  <p className="text-gray-600 text-[11px] mt-1">Sq Ft</p>
                </div>
              </div>

              {/* Agent Info */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-3">
                {/* Left: Agent image + name + designation */}
                <div className="flex items-center gap-3">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-700 text-[13px] font-medium">
                      {property.agent.name}
                    </span>
                    <span className="text-gray-500 text-[11px]">Estate Agent</span>
                  </div>
                </div>

                {/* Right: Action Icons */}
                <div className="flex items-center gap-1">
                  {/* Expand arrows */}
                  <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-orange-500 transition-colors duration-200">
                    <FaExpandArrowsAlt className="text-gray-600 hover:text-white" />
                  </button>

                  {/* Heart outline */}
                  <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-orange-500 transition-colors duration-200">
                    <FaRegHeart className="text-gray-600 hover:text-white" />
                  </button>

                  {/* Plus circle */}
                  <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-orange-500 transition-colors duration-200">
                    <FaPlusCircle className="text-gray-600 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesA;