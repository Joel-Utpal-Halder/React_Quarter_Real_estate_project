import React from "react";
import { FaSearch, FaDollarSign, FaBed, FaBath } from "react-icons/fa";
import Container from "../commonComponents/Container";

// Dummy property data (replace with API later)
const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    location: "California",
    price: "$2400.00/month",
    beds: 2,
    baths: 1,
    status: "For Rent",
    image: "/src/assets/images/propertiesPage/properties_1.png",
  },
  {
    id: 2,
    title: "House Highland Ave Angeles",
    location: "California",
    price: "$340,000.00",
    beds: 3,
    baths: 2,
    status: "For Sale",
    image: "/src/assets/images/propertiesPage/properties_2.png",
  },
  {
    id: 3,
    title: "Farm in Castro St Los Angeles",
    location: "California",
    price: "$2400.00/month",
    beds: 3,
    baths: 2,
    status: "For Rent",
    image: "/src/assets/images/propertiesPage/properties_1.png",
  },
];

const PropertiesList = () => {
  return (
    <Container>
      {/* Main layout: 3 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
{/* LEFT COLUMN: Heading + text OUTSIDE card */}
<div>
  {/* Heading + text */}
  <h2 className="text-lg font-semibold mb-1">Advance Information</h2>
  <p className="text-xs text-gray-500 mb-4">
    About 6,920 results (0.52 seconds)
  </p>

  {/* Filters inside card */}
  <aside className="bg-white rounded-lg shadow-md p-4">
    {/* Example filter group */}
    <div className="mb-4">
      <h3 className="font-medium text-gray-700 mb-2">Property Type</h3>
      <ul className="space-y-1 text-sm text-gray-600">
        <li><input type="checkbox" /> House (3,924)</li>
        <li><input type="checkbox" /> Single Family (3,610)</li>
        <li><input type="checkbox" /> Apartment (2,912)</li>
      </ul>
    </div>

    <div className="mb-4">
      <h3 className="font-medium text-gray-700 mb-2">Amenities</h3>
      <ul className="space-y-1 text-sm text-gray-600">
        <li><input type="checkbox" /> Air Conditioning</li>
        <li><input type="checkbox" /> Gym</li>
        <li><input type="checkbox" /> Internet</li>
      </ul>
    </div>
  </aside>
</div>


        {/* RIGHT SIDE: Search bar + labels + property cards */}
        <section className="lg:col-span-2 space-y-6">
          {/* Top bar with search + labels */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search field */}
            <div className="flex items-center gap-2 w-full sm:w-1/2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search For House Properties"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Labels */}
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Per Page: 12</span>
              <span>Sort By: Best Match</span>
            </div>
          </div>

          {/* Property cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
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
                  <span className="text-xs text-orange-600 font-bold uppercase">
                    {property.status}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500">{property.location}</p>

                  {/* Price row */}
                  <div className="flex items-center gap-2 mt-2">
                    <FaDollarSign className="text-green-600" />
                    <span className="text-gray-700 font-medium">
                      {property.price}
                    </span>
                  </div>

                  {/* Beds & Baths */}
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaBed /> {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBath /> {property.baths} Baths
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
              1
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
              2
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
              3
            </button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">
              4
            </button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default PropertiesList;
