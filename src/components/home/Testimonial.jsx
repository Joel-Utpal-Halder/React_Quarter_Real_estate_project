// ✅ Import dependencies
import React, { useState } from "react";
import Container from "../commonComponents/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Import images
import quoteIcon from "../../assets/images/homePage/TestimonialIco_1.png";
import leftShape from "../../assets/images/homePage/homePageShape_1.png";
import rightShape from "../../assets/images/homePage/Testimonial_1.png"; // decorative only
import img1 from "../../assets/images/homePage/Testimonial_2.png";
import img2 from "../../assets/images/homePage/Testimonial_3.png";
import img3 from "../../assets/images/homePage/Testimonial_4.png";
import img4 from "../../assets/images/homePage/Testimonial_2.png";

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
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative">
      {/* ✅ Background split */}
      <div className="absolute inset-0 -z-10">
        <div className="h-[60%] bg-gray-100"></div>
        <div className="h-[40%] bg-white"></div>
      </div>

      {/* ✅ Decorative images */}
      <img
        src={leftShape}
        alt="left decorative shape"
        className="absolute -top-25 left-0 w-32 md:w-44 opacity-100 pointer-events-none -z-10"
      />
      <img
        src={rightShape}
        alt="right decorative shape"
        className="absolute top-20 right-20 w-40 md:w-56 opacity-75 pointer-events-none -z-10"
      />

      <Container>
        <div className="relative py-20">
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
          <div className="relative">
            {/* Track viewport */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out items-stretch"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] p-4 flex"
                  >
                    <div className="group relative bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-full w-full transition-all duration-300">
                      {/* Quote Icon */}
                      <img
                        src={quoteIcon}
                        alt="quote"
                        className="w-8 h-8 mb-4 opacity-70"
                      />

                      {/* Feedback */}
                      <p className="text-gray-600 italic mb-6 flex-grow">
                        {item.feedback}
                      </p>

                      {/* ✅ Profile row */}
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {item.role}
                          </span>
                        </div>
                      </div>

                      {/* ✅ Animated bottom border */}
                      <div className="absolute bottom-0 left-0 h-[3px] bg-orange-500 w-0 transition-all duration-500 ease-linear group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 -left-16 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 -right-16 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md text-orange-500 hover:bg-orange-600 hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;