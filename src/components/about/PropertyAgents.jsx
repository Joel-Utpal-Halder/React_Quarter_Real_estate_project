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
              className="relative rounded-sm shadow-gray-400 shadow-md transition-transform border-16 border-white"
            >
              {/* Full Image fills the card */}
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-96 object-cover z-0"
              />

              {/* Floating Info Box */}
              <div
                className="group absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm px-4 py-2 rounded-sm shadow flex items-center gap-4 bg-white transition-colors duration-300 hover:bg-orange-500 z-20"
              >
                {/* Social Icons Column */}
                <div className="flex flex-col gap-1 bg-orange-500 my-1 text-[14px] rounded-sm transition-colors duration-300 group-hover:bg-white">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <FaPinterestP />
                  </a>
                </div>

                {/* Text on Right */}
                <div className="text-left transition-colors duration-300 text-gray-800 group-hover:text-white">
                  <h3 className="text-md text-center font-semibold">{agent.name}</h3>
                  <div className="w-full border-t-[1.5px] border-gray-200"></div>
                  <p className="text-[13px] text-center mt-2">{agent.role}</p>
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