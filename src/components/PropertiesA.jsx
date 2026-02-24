// ✅ Import dependencies
import React from "react";

// ✅ Import images (property + agents)
import propertyImg1 from "../assets/images/homePage/propertiesA_1.png";
import propertyImg2 from "../assets/images/homePage/propertiesA_2.png";
import propertyImg3 from "../assets/images/homePage/propertiesA_3.png";
import propertyImg4 from "../assets/images/homePage/propertiesA_4.png";

import agentImg1 from "../assets/images/homePage/propertiesA_1p.png";
import agentImg2 from "../assets/images/homePage/propertiesA_2p.png";
import agentImg3 from "../assets/images/homePage/propertiesA_3p.png";
import agentImg4 from "../assets/images/homePage/propertiesA_4p.png";

// ✅ Import React Icons
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

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
    area: "3450 Sq Ft",
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
    area: "3450 Sq Ft",
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
    area: "3450 Sq Ft",
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
    area: "3450 Sq Ft",
    agent: { name: "Kelvin Clein", image: agentImg4 },
  },
];

const PropertiesA = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {propertiesData.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />

            {/* Property Content */}
            <div className="p-6">
              {/* Title + Price */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {property.title}
                </h3>
                <span className="text-orange-500 font-bold text-sm">
                  {property.price}
                </span>
              </div>

              {/* Location */}
              <p className="text-gray-500 text-sm mb-2">{property.location}</p>

              {/* Description */}
              <p className="text-gray-600 text-xs md:text-sm leading-6 mb-4">
                {property.description}
              </p>

              {/* Specifications */}
              <div className="flex justify-between text-gray-600 text-xs md:text-sm mb-4">
                <span className="flex items-center gap-1">
                  <FaBed className="text-orange-500" /> {property.bedrooms} Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaBath className="text-orange-500" /> {property.bathrooms} Baths
                </span>
                <span className="flex items-center gap-1">
                  <FaRulerCombined className="text-orange-500" /> {property.area}
                </span>
              </div>

              {/* Agent Info */}
              <div className="flex items-center gap-3 border-t pt-3">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-700 text-sm font-medium">
                  {property.agent.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesA;