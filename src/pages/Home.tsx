import AboutSection from '@/components/AboutSection'
import Contact from '@/components/Contact'
import FeatureCard from '@/components/FeatureCard'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OurTeam from '@/components/OurTeam'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FeatureCard/>
        <AboutSection/>
        <ServicesSection/>
        <OurTeam/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home