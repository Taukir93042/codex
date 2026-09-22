import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HeroFeatureBar from '../components/HeroFeatureBar';
import CourseCategories from '../components/CourseCategories';
import PopularCourses from '../components/PopularCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUsSection from '../components/AboutUsSection';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';
import BottomCTABanner from '../components/BottomCTABanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* Top Navbar */}
      <Header />

      {/* Main Page Content */}
      <main className="relative overflow-hidden bg-[#030712]">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/10 via-cyan-600/5 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* 1. Hero Section */}
        <Hero />

        {/* Feature Highlights Bar with Icons */}
        <HeroFeatureBar />

        {/* 2. Explore By Category Section */}
        <CourseCategories />
        {/* 5. About Us Section (Story, Pillars, Stats, Workspace Visual) */}
        <AboutUsSection />

        {/* 3. Most Popular Courses Section */}
        <PopularCourses />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Testimonials Section */}
        <Testimonial />

        {/* 8. Call To Action (CTA) Banner */}
        <BottomCTABanner />

      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default Home;
