import React, { useRef } from "react";
import Container from "../components/CommonComponents/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../components/CommonComponents/Button";
import { FiHome, FiStar, FiMapPin, FiTrendingUp } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import homePage_1 from "../assets/images/homePage/homePage_1.png";
import homePage_2 from "../assets/images/homePage/homePage_2.jpg";
import homePage_3 from "../assets/images/homePage/homePage_3.jpg";
import homePage_4 from "../assets/images/homePage/homePage_4.avif";
import homePageShape_1 from "../assets/images/homePage/homePageShape_1.png"; // ✅ Decorative shape

// === Banner Slides Data ===
const slides = [
  {
    id: 1,
    smallText: "Real Estate Agency",
    bigTitle_1: "Find Your Dream",
    bigTitle_2: "House By Us",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    image: homePage_1,
    icon: FiHome,
  },
  {
    id: 2,
    smallText: "Luxury Living Spaces",
    bigTitle_1: "Modern Homes",
    bigTitle_2: "For Modern Life",
    description: "Discover properties tailored to your lifestyle",
    image: homePage_2,
    icon: FiStar,
  },
  {
    id: 3,
    smallText: "Exclusive Neighborhoods",
    bigTitle_1: "Properties In",
    bigTitle_2: "Prime Locations",
    description: "Choose from hand‑picked listings in the best areas",
    image: homePage_3,
    icon: FiMapPin,
  },
  {
    id: 4,
    smallText: "Smart Investment",
    bigTitle_1: "Secure Future",
    bigTitle_2: "With Real Estate",
    description: "Invest confidently with our trusted guidance",
    image: homePage_4,
    icon: FiTrendingUp,
  },
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ✅ Handlers for buttons
  const handleViewProperties = () => {
    console.log("View Properties clicked");
    // Later: navigate to /properties page
  };

  const handlePlay = () => {
    console.log("Play button clicked");
    // Later: trigger video modal or autoplay slider
  };

  return (
    <div className="relative bg-[#f1f5f6] min-h-[90vh] pb-10 flex items-center bannerbg">
      {/* min-h-screen → increases banner height to full screen */}

      {/* Decorative Shape under left side */}
      <img
        src={homePageShape_1}
        alt="Shape"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-y-2 w-32 md:w-40 h-32 md:h-40 opacity-70 z-0 pointer-events-none"
      />

      {/* Custom Navigation Arrows with box + hover orange */}
      <div
        ref={prevRef}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-md bg-white hover:bg-orange-500 transition group"
      >
        <svg className="w-6 h-6 text-gray-700 group-hover:text-white" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div
        ref={nextRef}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-3 rounded-full shadow-md bg-white hover:bg-orange-500 transition group"
      >
        <svg className="w-6 h-6 text-gray-700 group-hover:text-white" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <Container>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ dynamicBullets: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
                {/* Left side: Text */}
                <div className="max-w-xl mx-auto md:mx-0">
                  {/* Small text with dynamic icon */}
                  <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 font-medium mb-3">
                    {slide.icon && <slide.icon className="text-orange-500" />}
                    <span>{slide.smallText}</span>
                  </div>


                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    {slide.bigTitle_1} <br /> {slide.bigTitle_2}
                  </h1>
                  <p className="text-gray-600 mb-6">{slide.description}</p>

                  {/* Buttons: View Properties + Play */}
                  <div className="flex items-center gap-4 justify-center md:justify-start mt-6">
                    <Button
                      onClick={handleViewProperties}
                      className="bg-[#FF5A3C] py-[15px] px-[25px] text-white"
                    >
                      View Properties
                    </Button>
                    <Button
                      onClick={handlePlay}
                      className="w-12 h-12 flex items-center justify-center rounded-full shadow-md border hover:bg-orange-500 hover:text-white"
                    >
                      ▶
                    </Button>
                  </div>
                </div>

                {/* Right side: Image */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Banner"
                    className="mx-auto w-2/3 sm:w-1/2 md:w-3/4 lg:w-full max-w-[450px] h-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;