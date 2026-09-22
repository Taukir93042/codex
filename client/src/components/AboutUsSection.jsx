import React from "react";
import { assets } from "../assets/assets.js";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="w-full py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Setup (50% width) */}
          <div className="relative flex flex-col items-center w-full order-2 lg:order-1">
            {/* Workspace Image Frame */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-700/80 bg-[#080d24]">
              <img
                src={assets.about_us_workspace}
                alt="CodeCampus Workspace"
                className="w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Content (50% width) */}
          <div className="flex flex-col items-start justify-center order-1 lg:order-2">
            
            {/* Tag + Glowing Line */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                ABOUT US
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Building a Brighter <br />
              Future <span className="text-[#0084ff]">Through Learning</span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              At Code Campus, we believe in the power of practical education. We help learners gain in-demand skills through high-quality courses, real-world projects and expert guidance, so they can build better careers and bring their ideas to life.
            </p>

            {/* 4 Individual Transparent Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#070e24]/60 border border-[#172554]/60 hover:border-blue-500/40 hover:bg-[#0a1538]/70 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0084ff] tracking-tight block">
                  10K+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Students
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#070e24]/60 border border-[#172554]/60 hover:border-blue-500/40 hover:bg-[#0a1538]/70 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0084ff] tracking-tight block">
                  200+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Courses
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#070e24]/60 border border-[#172554]/60 hover:border-blue-500/40 hover:bg-[#0a1538]/70 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0084ff] tracking-tight block">
                  50+
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Expert Instructors
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#070e24]/60 border border-[#172554]/60 hover:border-blue-500/40 hover:bg-[#0a1538]/70 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0084ff] tracking-tight block">
                  95%
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Student Satisfaction
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
