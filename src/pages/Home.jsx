import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import FindNow from '../components/FindNow'
import RentalMarketplace from '../components/RentalMarketplace'
import Review from '../components/Review'
import SellsProperties from '../components/SellsProperties'
import Services from '../components/Services'
import PropertiesA from '../components/PropertiesA'
import ApartmentSketch from '../components/ApartmentSketch'


const Home = () => {
  return (
   <>
    <Header />
    <Menu />
    <Banner />
    <FindNow />
    <RentalMarketplace />
    <Review />
    <SellsProperties />
    <Services />
    <PropertiesA />
    <ApartmentSketch />
   </>
  )
}

export default Home