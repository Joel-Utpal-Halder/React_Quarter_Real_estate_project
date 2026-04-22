// File: src/components/properties/PropertiesList.jsx

import React from "react";
import { FaSearch, FaBed, FaDollarSign, FaHome } from "react-icons/fa"; 
import Container from "../commonComponents/Container";

// Import property images (example assets you mentioned)
import property1 from "../../assets/images/propertiesPage/properties_1.png";
import property2 from "../../assets/images/propertiesPage/properties_2.png";

// Dummy data for properties (in real project, this can come from API)
const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    location: "Los Angeles",
    price: "$240,000.00",
    image: property1,
  },
  {
    id: 2,
    title: "House Highland Ave Angeles",
    location: "Los Angeles",
    price: "$340,000.00",
    image: property2,
  },
  {
    id: 3,
    title: "Farm in Centro St Los Angeles",
    location: "Los Angeles",
    price: "$180,000.00",
    image: property1,
  },
  {
    id: 4,
    title: "Luxury Villa in Los Angeles",
    location: "Los Angeles",
    price: "$340,000.00",
    image: property2,
  },
];

const PropertiesList = () => {
  return (
    <Container>
      {/* Search bar */}
      <div className="flex items-center gap-2 mb-6">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search for new properties"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Responsive grid for property cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Property image */}
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />

            {/* Property details */}
            <div className="p-4 font-nunito">
              <h3 className="text-lg font-semibold text-gray-800">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500">{property.location}</p>

              {/* Price row with icon */}
              <div className="flex items-center gap-2 mt-2">
                <FaDollarSign className="text-green-600" />
                <span className="text-gray-700 font-medium">
                  {property.price}
                </span>
              </div>

              {/* Example extra info row */}
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaBed /> 3 Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaHome /> 2,000 sqft
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls (simple placeholder) */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
          Prev
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
          Next
        </button>
      </div>
    </Container>
  );
};

export default PropertiesList;
