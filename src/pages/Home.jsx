import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import FindNow from '../components/FindNow'
import RentalMarketplace from '../components/RentalMarketplace'
import Review from '../components/Review'
import SellsProperties from '../components/SellsProperties'
import Services from '../components/Services'


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
   </>
  )
}

export default Home