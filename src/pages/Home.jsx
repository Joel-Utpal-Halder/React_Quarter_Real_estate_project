import React from "react";
import Banner from "../components/home/Banner";
import FindNow from "../components/home/FindNow";
import RentalMarketplace from "../components/home/RentalMarketplace";
import Review from "../components/home/Review";
import SellsProperties from "../components/home/SellsProperties";
import Services from "../components/home/Services";
import PropertiesA from "../components/home/PropertiesA";
import ApartmentSketch from "../components/home/ApartmentSketch";
import VideoBanner from "../components/home/VideoBanner";
import PropertiesB from "../components/home/PropertiesB";
import Testimonial from "../components/home/Testimonial";
import NewsBlogs from "../components/home/NewsBlogs";

const Home = () => {
  return (
    <>
      <Banner />
      <FindNow />
      <RentalMarketplace />
      <Review />
      <SellsProperties />
      <Services />
      <PropertiesA />
      <ApartmentSketch />
      <VideoBanner />
      <PropertiesB />
      <Testimonial />
      <NewsBlogs />
    </>
  );
};

export default Home;