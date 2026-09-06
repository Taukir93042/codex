import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustedCompanies from '../components/TrustedCompanies'
import PopularCourses from '../components/PopularCourses'
import Testimonial from '../components/Testimonial'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const Home = () => {
  
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />
      <Hero />
      
      <TrustedCompanies />
      <PopularCourses />
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
};
export default Home
