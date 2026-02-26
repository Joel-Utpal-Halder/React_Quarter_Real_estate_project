// ✅ Import dependencies
import React, { useState } from "react";
import Container from "./commonComponents/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import images
import quoteIcon from "../assets/images/homePage/TestimonialIco_1.png";
import img1 from "../assets/images/homePage/Testimonial_1.png";
import img2 from "../assets/images/homePage/Testimonial_2.png";
import img3 from "../assets/images/homePage/Testimonial_3.png";
import img4 from "../assets/images/homePage/Testimonial_4.png";

// ✅ Dynamic testimonial data
const testimonials = [
  {
    id: 1,
    name: "Lee Barners",
    role: "Selling Agenting",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img1,
  },
  {
    id: 2,
    name: "Sophia Turner",
    role: "Property Owner",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: img2,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Investor",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: img3,
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Tenant",
    feedback:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: img4,
  },
];

const Testimonial = () => {
  // ✅ State to track current starting index of carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Show 3 testimonials at a time
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  // ✅ Handlers for navigation
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <Container>
      <div className="relative mt-20 mb-20">
        {/* ✅ Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
            Our Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Clients Feedback
          </h2>
        </div>

        {/* ✅ Carousel Wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-12 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-orange-500 transition-colors duration-300 hover:bg-orange-600 hover:text-white"
          >
            <FaArrowLeft />
          </button>

          {/* ✅ Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-50"
              >
                {/* Quote Icon */}
                <img
                  src={quoteIcon}
                  alt="quote"
                  className="w-8 h-8 mb-4 opacity-70"
                />

                {/* Feedback */}
                <p className="text-gray-600 italic mb-6">{item.feedback}</p>

                {/* Profile */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-orange-500 transition-colors duration-300 hover:bg-orange-600 hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;