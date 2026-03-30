import React from 'react'
import TopPart from '../components/about/TopPart'
import AboutUs from '../components/about/AboutUs'
import Features from '../components/about/Features'
import MainFocus from '../components/about/MainFocus'
import PropertyDetails from '../components/about/PropertyDetails'
import PropertyAgents from '../components/about/PropertyAgents'
import Testimonial from '../components/about/Testimonial'
import Blogs from '../components/about/Blogs'

const About = () => {
  return (
    <>
      <TopPart />
      <AboutUs />
      <Features />
      <MainFocus />
      <PropertyDetails />
      <PropertyAgents />
      <Testimonial />
      <Blogs />
    </>
  )
}

export default About