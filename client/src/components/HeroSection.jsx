import { useState } from "react";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaShareAlt,
  FaPlayCircle,
  FaTimes,
  FaStarHalfAlt
} from "react-icons/fa";

import {
  HiOutlineUsers,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

import { MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = ({ course }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  if (!course) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  // Helper to render stars
  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
      } else if (i === floorRating + 1 && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-500 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <section className="bg-gradient-to-br from-[#0b1129] to-[#050816] text-white relative border-b border-slate-800/80">
      
      {/* Toast Notification */}
      {showShareToast && (
        <div className="fixed bottom-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-2xl z-50 animate-bounce text-sm font-semibold flex items-center gap-2">
          <span>📋</span> Link copied to clipboard!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">

        {/* Breadcrumb */}
        <p className="text-sm text-slate-400 mb-6 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-blue-400 transition duration-200">Home</Link>
          <span className="text-slate-600">/</span>
          <Link to="/course-list" className="hover:text-blue-400 transition duration-200">Courses</Link>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">{course.category}</span>
        </p>

        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* Left */}
          <div className="lg:col-span-2">
            
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {course.level}
              </span>
              {course.rating >= 4.8 && (
                <span className="bg-amber-500/90 text-slate-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Bestseller
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-black mt-6 leading-tight text-white tracking-tight">
              {course.title}
            </h1>

            <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              {course.subtitle}
            </p>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              
              <div className="flex items-center gap-2 bg-slate-800/20 px-4 py-2 rounded-xl border border-slate-800">
                <span className="font-bold text-yellow-400 text-lg">
                  {course.rating}
                </span>
                <div className="flex items-center gap-0.5">
                  {renderStars(course.rating)}
                </div>
                <span className="text-gray-400 text-sm ml-1">
                  ({(course.students * 0.15).toFixed(0)} reviews)
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <HiOutlineUsers size={22} className="text-indigo-400" />
                <span className="font-semibold text-sm">
                  {course.students.toLocaleString()} Students Enrolled
                </span>
              </div>

            </div>

            {/* Extra Info */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400 border-t border-slate-800 pt-6">
              
              <div className="flex items-center gap-2">
                <MdOutlineUpdate className="text-indigo-400 text-lg" />
                Last updated July 2026
              </div>

              <div className="flex items-center gap-2">
                <HiOutlineGlobeAlt className="text-indigo-400 text-lg" />
                English
              </div>

              <div className="text-gray-300">
                Created by <span className="font-bold text-white hover:text-indigo-400 transition cursor-pointer">{course.instructor?.name || course.instructor}</span>
              </div>

            </div>

            {/* Action Buttons for Mobile View */}
            <div className="flex flex-wrap gap-4 mt-8 lg:hidden">
              <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 flex-grow">
                Enroll Now
              </button>
              
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="border border-slate-700 hover:bg-slate-800 transition p-3 rounded-xl flex items-center justify-center"
              >
                {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-300" />}
              </button>

              <button 
                onClick={handleShare}
                className="border border-slate-700 hover:bg-slate-800 transition p-3 rounded-xl flex items-center justify-center"
              >
                <FaShareAlt className="text-gray-300" />
              </button>
            </div>

          </div>

          {/* Right Image Container */}
          <div className="relative group cursor-pointer" onClick={() => setShowVideoModal(true)}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10 rounded-3xl"></div>
            
            <img
              src={course.image}
              alt={course.title}
              className="rounded-3xl shadow-2xl h-[280px] md:h-[350px] w-full object-cover border border-slate-800 group-hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 flex justify-center items-center z-20">
              <button className="bg-white text-indigo-600 rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition duration-300 relative">
                <FaPlayCircle size={45} className="ml-0.5" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white font-bold text-xs uppercase tracking-widest whitespace-nowrap bg-slate-900/90 px-3 py-1 rounded-md">
                  Preview Course
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Backdrop */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex justify-center items-center z-50 p-4 animate-fade-in">
          <div className="bg-slate-950 w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-850 bg-slate-900/50">
              <h3 className="font-bold text-gray-200 line-clamp-1">{course.title} - Preview</h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-400 hover:text-white transition p-1 hover:bg-slate-800 rounded-lg"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Video Content */}
            <div className="aspect-video w-full bg-slate-950 relative flex items-center justify-center">
              {/* Using a nice placeholder iframe / mock canvas that simulates an active video player */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-900/40">
                <div className="w-20 h-20 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 animate-pulse">
                  <FaPlayCircle size={48} />
                </div>
                <h4 className="text-xl font-bold text-white">Interactive Course Intro Video</h4>
                <p className="text-sm text-gray-400 max-w-md mt-2">
                  This mock preview plays the intro lecture containing course outcomes, chapters overview, and key features.
                </p>
                <div className="flex gap-3 mt-6">
                  <button 
                    onClick={() => setShowVideoModal(false)} 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition"
                  >
                    Start Learning
                  </button>
                  <button 
                    onClick={() => setShowVideoModal(false)} 
                    className="border border-slate-700 hover:bg-slate-800 text-gray-300 px-6 py-2.5 rounded-xl font-semibold text-sm transition"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default HeroSection;