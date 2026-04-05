// File: src/components/services/Services.jsx

import React from "react";
import Container from "../commonComponents/Container";


// ✅ Import the home icon
import homeIcon from "../../assets/images/commonHouseIcon.png";

// Importing service icons
import serviceIcon1 from "../../assets/images/servicePage/serviceIcon_1.png";
import serviceIcon2 from "../../assets/images/servicePage/serviceIcon_2.png";
import serviceIcon3 from "../../assets/images/servicePage/serviceIcon_3.png";
import serviceIcon4 from "../../assets/images/servicePage/serviceIcon_4.png";
import serviceIcon5 from "../../assets/images/servicePage/serviceIcon_5.png";
import serviceIcon6 from "../../assets/images/servicePage/serviceIcon_6.png";

// Array of services
const services = [
  {
    id: 1,
    title: "Property Management",
    description:
      "We provide professional property management services to help you maximize value and minimize hassle.",
    icon: serviceIcon1,
  },
  {
    id: 2,
    title: "Mortgage Service",
    description:
      "Our mortgage experts guide you through financing options tailored to your needs.",
    icon: serviceIcon2,
  },
  {
    id: 3,
    title: "Consulting Service",
    description:
      "Get expert consulting for real estate investments, planning, and decision-making.",
    icon: serviceIcon3,
  },
  {
    id: 4,
    title: "Home Buying",
    description:
      "We simplify the home buying process with personalized support and trusted advice.",
    icon: serviceIcon4,
  },
  {
    id: 5,
    title: "Home Selling",
    description:
      "Our team helps you sell your property quickly and at the best possible value.",
    icon: serviceIcon5,
  },
  {
    id: 6,
    title: "Escrow Services",
    description:
      "Secure and reliable escrow services to protect both buyers and sellers.",
    icon: serviceIcon6,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 font-nunito">
      <Container>
        {/* Section Heading with Home Icon */}
        <div className="text-center mb-12 flex flex-col items-center">
          {/* Home Icon above the title */}
          <img
            src={homeIcon}
            alt="Home Icon"
            className="w-12 h-12 mb-4"
          />

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Core Services
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Explore the range of services we provide to support your real estate journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;