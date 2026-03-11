// ✅ Import dependencies
import React from "react";
import Container from "../commonComponents/Container";

// ✅ Import images
import mainFocusIcon1 from "../../assets/images/aboutPage/mainFocusIcon_1.png";
import mainFocusIcon2 from "../../assets/images/aboutPage/mainFocusIcon_2.png";
import mainFocusIcon3 from "../../assets/images/aboutPage/mainFocusIcon_3.png";

// ✅ Import React Icons
import { FaArrowRight } from "react-icons/fa";

// ✅ Dynamic data for services
const mainFocusData = [
  {
    id: 1,
    icon: mainFocusIcon1,
    title: "Buy a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
  {
    id: 2,
    icon: mainFocusIcon2,
    title: "Rent a Home",
    description:
      "Over 1 million+ homes for rent available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
  {
    id: 3,
    icon: mainFocusIcon3,
    title: "Sell a Home",
    description:
      "Over 1 million+ homes for sale available on the website. We can match you with a house you will want to call home.",
    linkText: "Find A Home",
  },
];
const MainFocus = () => {
  return (
    <div className="relative py-23">
      <Container>
        {/* ✅ Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Our Main Focus
          </h2>
          <p className="text-gray-600 text-[14px] pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
        </div>

        {/* ✅ Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFocusData.map((mainFocus) => (
            <div
              key={mainFocus.id}
              className="relative bg-white shadow-gray-300 shadow-lg p-10 flex flex-col items-center text-center 
                         hover:shadow-gray-400 hover:shadow-lg transition-shadow duration-300
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                         after:h-[3px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {/* Focus Icon */}
              <img
                src={mainFocus.icon}
                alt={mainFocus.title}
                className="h-20 w-20 mb-4"
              />

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {mainFocus.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs md:text-sm leading-6 mb-4">
                {mainFocus.description}
              </p>

              {/* Link with Arrow Icon */}
              <button className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                {mainFocus.linkText}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MainFocus;