import React, { useState } from "react";
import { FaSearch, FaDollarSign, FaBed, FaBath } from "react-icons/fa";
import { FaHeart, FaExpand, FaPowerOff, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../commonComponents/Container";

// Dummy property data (replace with API later)
const properties = [
  {
    id: 1,
    title: "New Apartment Nice View",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Rent",
    image: "/src/assets/images/propertiesPage/properties_1.png",
    isVideo: true,
  },
  {
    id: 2,
    title: "House Highland Ave Angeles",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Sale",
    image: "/src/assets/images/propertiesPage/properties_2.png",
  },
  {
    id: 3,
    title: "Farm in Castro St Los Angeles",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Rent",
    image: "/src/assets/images/propertiesPage/properties_2.png",
  },
  {
    id: 4,
    title: "Luxury Villa in Los Angeles",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Sale",
    image: "/src/assets/images/propertiesPage/properties_1.png",
  },
  {
    id: 5,
    title: "Casa Lomas de Machalí",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Sale",
    image: "/src/assets/images/propertiesPage/properties_1.png",
  },
  {
    id: 6,
    title: "Single House Near Angeles",
    location: "Belmont Gardens, Chicago",
    price: "$349.00/Month",
    beds: 3,
    baths: 2,
    area: 3450,
    status: "For Sale",
    image: "/src/assets/images/propertiesPage/properties_2.png",
  },
];

const PropertiesList = () => {
  const [price, setPrice] = useState(8000); // dynamic slider value

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Sidebar filters */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Advance Information</h2>
          <p className="text-xs text-gray-500 mb-4">
            About 6,920 results (0.52 seconds)
          </p>

          <aside className="bg-white rounded-lg shadow-md px-6 py-4">
            {/* Property Type */}
            <div className="mb-4 max-h-40 overflow-y-auto">
              <h3 className="font-medium text-gray-700 mb-2">Property Type</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> House
                  </label>
                  <span className="text-gray-500 pr-4">3,924</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Single Family
                  </label>
                  <span className="text-gray-500 pr-4">3,610</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Apartment
                  </label>
                  <span className="text-gray-500 pr-4">2,912</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Office Villa
                  </label>
                  <span className="text-gray-500 pr-4">2,687</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Luxury Home
                  </label>
                  <span className="text-gray-500 pr-4">1,853</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Studio
                  </label>
                  <span className="text-gray-500 pr-4">893</span>
                </li>
              </ul>
              <hr className="border-t border-gray-200 mt-2" />
            </div>

            {/* Amenities */}
            <div className="mb-4 max-h-40 overflow-y-auto">
              <h3 className="font-medium text-gray-700 mb-2">Amenities</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Dishwasher
                  </label>
                  <span className="text-gray-500 pr-4">3,924</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Floor Coverings
                  </label>
                  <span className="text-gray-500 pr-4">3,610</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Internet
                  </label>
                  <span className="text-gray-500 pr-4">2,912</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Build Wardrobes
                  </label>
                  <span className="text-gray-500 pr-4">2,687</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Supermarket
                  </label>
                  <span className="text-gray-500 pr-4">1,853</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Kids Zone
                  </label>
                  <span className="text-gray-500 pr-4">893</span>
                </li>
              </ul>
              <hr className="border-t border-gray-200 mt-2" />
            </div>

            {/* Price Range */}
            <div className="mb-4 max-h-40 overflow-y-auto">
              <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Low Budget
                  </label>
                  <span className="text-gray-500 pr-4">3,924</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Medium
                  </label>
                  <span className="text-gray-500 pr-4">3,610</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> High Budget
                  </label>
                  <span className="text-gray-500 pr-4">2,912</span>
                </li>
              </ul>
              <hr className="border-t border-gray-200 mt-2" />
            </div>

            {/* Price/Sq Ft Filter */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Price/Sq Ft Filter</h3>
              <input
                type="range"
                min="0"
                max="8000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-orange-500"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">From $0</span>
                <span className="text-sm text-gray-600 mr-3">To ${price}</span>
              </div>
              <hr className="border-t border-gray-200 mt-2" />
            </div>

            {/* Bed/Bath */}
            <div className="mb-4 max-h-40 overflow-y-auto">
              <h3 className="font-medium text-gray-700 mb-2">Bed/Bath</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Single
                  </label>
                  <span className="text-gray-500 pr-4">3,924</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Double
                  </label>
                  <span className="text-gray-500 pr-4">3,610</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Up To 3
                  </label>
                  <span className="text-gray-500 pr-4">2,912</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Up To 5
                  </label>
                  <span className="text-gray-500 pr-4">2,819</span>
                </li>
              </ul>
              <hr className="border-t border-gray-200 mt-2" />
            </div>

            {/* Category */}
            <div className="mb-4 max-h-40 overflow-y-auto">
              <h3 className="font-medium text-gray-700 mb-2">Category</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Buying
                  </label>
                  <span className="text-gray-500 pr-4">3,924</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Renting
                  </label>
                  <span className="text-gray-500 pr-4">3,610</span>
                </li>
                <li className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Selling
                  </label>
                  <span className="text-gray-500 pr-4">2,912</span>
                </li>
              </ul>
              <hr className="border-t border-gray-200 mt-2" />
            </div>
          </aside>
        </div>

        {/* RIGHT SIDE: Controls + search + property cards */}
        <section className="lg:col-span-2 space-y-6">
          {/* Top controls */}
          <div className="flex items-center justify-between mb-2">
            {/* Left side (optional, can hold filters or stay empty) */}
            <div></div>

            {/* Right side: Per Page + Sort By + Icons */}
            <div className="flex items-center gap-4">
              {/* Per Page */}
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700">Per Page:</label>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>12</option>
                  <option>24</option>
                  <option>48</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-2">
                <label className="font-medium text-gray-700">Sort By:</label>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Best Match</option>
                  <option>Lowest Price</option>
                  <option>Highest Price</option>
                </select>
              </div>

              {/* View toggle icons */}
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
                  {/* Grid icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h4v4H4V6zm0 8h4v4H4v-4zm6-8h4v4h-4V6zm0 8h4v4h-4v-4zm6-8h4v4h-4V6zm0 8h4v4h-4v-4z" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
                  {/* List icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Search For More Properties"
              className="w-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          {/* Property cards grid */}
<div className="grid sm:grid-cols-2 gap-6">
  {properties.map((property) => (
    <div
      key={property.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Property media (image or video thumbnail) */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {/* Optional play icon overlay if it's a video */}
        {property.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Property details */}
      <div className="p-4 font-nunito">
        {/* Status */}
        <span className="text-xs text-orange-600 font-bold">
          {property.status}
        </span>

        <h3 className="text-lg font-semibold text-gray-800">
          {property.title}
        </h3>

        {/* Location with icon */}
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <FaMapMarkerAlt className="text-orange-500" />
          {property.location}
        </p>

        {/* Beds, Baths, Sq Ft with bold numbers */}
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-bold">{property.beds}</span> Bedrooms •{" "}
          <span className="font-bold">{property.baths}</span> Bathrooms •{" "}
          <span className="font-bold">{property.area}</span> Sq Ft
        </p>

        {/* Action icons row above price */}
        <div className="flex gap-3 mt-4">
          <button className="p-2 border rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition">
            <FaExpand />
          </button>
          <button className="p-2 border rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition">
            <FaHeart />
          </button>
          <button className="p-2 border rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition">
            <FaPowerOff />
          </button>
        </div>

        {/* Divider line below icons */}
        <hr className="border-t border-gray-200 mt-3" />

        {/* Price row (orange text, no dollar icon) */}
        <div className="mt-2">
          <span className="text-orange-600 font-semibold">
            {property.price}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>




          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">1</button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">2</button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">3</button>
            <button className="px-3 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition">4</button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default PropertiesList;
