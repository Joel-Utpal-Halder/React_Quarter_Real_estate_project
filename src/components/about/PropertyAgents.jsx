// File: src/components/about/PropertyAgents.jsx

import React from "react";
import Container from "../commonComponents/Container";

// Images
import houseIcon from "../../assets/images/commonHouseIcon.png";
import agentImage from "../../assets/images/aboutPage/propertyAgents_1.png";

// React Icons
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const PropertyAgents = () => {
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
      highlight: true,
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
              className={`rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-4 border-white`}
            >
              {/* Full Image fills the card */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-64 object-cover"
              />

              {/* Smaller Info Box */}
              <div
                className={`mx-auto mt-[-20px] relative z-10 p-4 w-11/12 max-w-xs rounded-md shadow bg-white ${
                  agent.highlight ? "bg-red-100" : "bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600">{agent.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-3 text-gray-500">
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