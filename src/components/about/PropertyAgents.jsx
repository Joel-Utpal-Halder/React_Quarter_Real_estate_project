import React from "react";
import Container from "../commonComponents/Container";

// Images
import houseIcon from "../../assets/images/commonHouseIcon.png";
import agentImage from "../../assets/images/aboutPage/propertyAgents_1.png";

// React Icons
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const PropertyAgents = () => {
  const agents = [
    { name: "Nayem Mahmud", role: "Real Estate Broker", image: agentImage },
    { name: "Saidul Islam Sajid", role: "Selling Agent", image: agentImage },
    { name: "Tahmina Rummi", role: "Property Seller", image: agentImage },
  ];

  return (
    <section className="py-38 font-nunito">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-10">
          <img
            src={houseIcon}
            alt="House Icon"
            className="mx-auto w-12 h-12"
          />
          <h2 className="text-3xl font-bold text-gray-800 -mt-6">Property Agents</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="relative rounded-sm shadow-gray-400 shadow-md overflow-hidden transition-transform border-15 border-white"
            >
              {/* Full Image fills the card */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-96 object-cover"
              />

              {/* Floating Info Box */}
              <div
                className="group absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm p-4 rounded-md shadow flex items-center gap-4 bg-white transition-colors duration-300 hover:bg-orange-500"
              >
                {/* Social Icons Column */}
                <div className="flex flex-col gap-3 bg-orange-500 p-2 rounded-sm transition-colors duration-300 group-hover:bg-white">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white group-hover:text-orange-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white group-hover:text-orange-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white group-hover:text-orange-500"
                  >
                    <FaPinterestP />
                  </a>
                </div>

                {/* Text on Right */}
                <div className="text-left transition-colors duration-300 text-gray-800 group-hover:text-white">
                  <h3 className="text-md font-semibold">{agent.name}</h3>
                  <p className="text-sm">{agent.role}</p>
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