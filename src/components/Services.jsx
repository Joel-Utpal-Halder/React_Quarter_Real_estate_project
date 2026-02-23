// ✅ Import dependencies
import React from "react";
import Container from "../components/CommonComponents/Container";

// ✅ Import images
import servicesIcon1 from "../assets/images/homePage/servicesIcon_1.png";
import servicesIcon2 from "../assets/images/homePage/servicesIcon_2.png";
import servicesIcon3 from "../assets/images/homePage/servicesIcon_3.png";
import homePageShape1 from "../assets/images/homePage/homePageShape_1.png";

// ✅ Import React Icons
import { FaArrowRight } from "react-icons/fa";

// ✅ Dynamic data for services
const servicesData = [
  {
    id: 1,
    icon: servicesIcon1,
    title: "Buy a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
  {
    id: 2,
    icon: servicesIcon2,
    title: "Rent a Home",
    description:
      "Over 1 million+ homes for rent available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
  {
    id: 3,
    icon: servicesIcon3,
    title: "Sell a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
];

const Services = () => {
  return (
    <div className="relative bg-gray-50 py-25">
      {/* ✅ Decorative Shape on Left Side */}
      <img
        src={homePageShape1}
        alt="Decorative Shape"
        className="absolute left-0 top-15 h-full w-32 object-cover opacity-80 hidden md:block"
      />

      <Container>
        {/* ✅ Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Our Main Focus
          </h2>
        </div>

        {/* ✅ Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative bg-white shadow-md p-10 flex flex-col items-center text-center 
                         hover:shadow-gray-400 hover:shadow-lg transition-shadow duration-300
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                         after:h-[3px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {/* Service Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="h-20 w-20 mb-4" // ⬆️ Increased size
              />

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs md:text-sm leading-6 mb-4">
                {service.description}
              </p>

              {/* Link with Arrow Icon */}
              <button className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                {service.linkText}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;