// File: src/components/about/PropertyAgents.jsx

import React from "react";
// Importing the Container component for consistent layout
import Container from "../commonComponents/Container";

// Importing images
import houseIcon from "../../assets/images/commonHouseIcon.png";
import agentImage from "../../assets/images/aboutPage/propertyAgents_1.png";

// Importing react-icons (already installed in your project)
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const PropertyAgents = () => {
  // Data-driven approach: easier to scale if you add more agents later
  const agents = [
    {
      name: "Nayem Mahmud",
      role: "Real Estate Broker",
      image: agentImage,
      highlight: false,
    },
    {
      name: "Saidul Islam Sajid",
      role: "Selling Agent",
      image: agentImage,
      highlight: true, // highlighted with red background
    },
    {
      name: "Tahmina Rummi",
      role: "Property Seller",
      image: agentImage,
      highlight: false,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 font-nunito">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-10">
          <img
            src={houseIcon}
            alt="House Icon"
            className="mx-auto mb-4 w-12 h-12"
          />
          <h2 className="text-3xl font-bold text-gray-800">Property Agents</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet our
            trusted agents who help you with property transactions.
          </p>
        </div>

{/* Agents Grid */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {agents.map((agent, index) => (
    <div
      key={index}
      className={`rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-4 border-white ${
        agent.highlight ? "bg-red-100" : "bg-white"
      }`}
    >
      {/* Agent Image */}
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-64 object-contain bg-gray-100" 
        /* 
          - w-full: takes full width of card
          - h-64: fixed height (adjust as needed)
          - object-contain: shows full image without cropping
          - bg-gray-100: adds a neutral background so empty space looks clean
        */
      />

      {/* Agent Info */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {agent.name}
        </h3>
        <p className="text-gray-600">{agent.role}</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4 text-gray-500">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaPinterestP />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </Container>
    </section>
  );
};

export default PropertyAgents;