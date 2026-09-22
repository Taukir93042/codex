import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#030712] text-white aspect-[1920/700] min-h-[480px] sm:min-h-[540px] md:min-h-[600px] lg:min-h-[660px] xl:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image - Whole Image (100% uncropped) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={assets.bannar_img || assets.banner_img}
          alt="CodeCampus Hero Banner"
          className="w-full h-full object-cover lg:object-fill object-center"
        />
      </div>

      {/* Subtle dark gradient on the left to keep text readable without hiding background details */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/85 via-[#030712]/45 to-transparent pointer-events-none z-10" />

      {/* Left-Side Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-16">
        <div className="max-w-xl lg:max-w-[560px] flex flex-col items-start text-left">
          
          {/* Tagline / Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/10 border border-blue-400/25 backdrop-blur-md mb-4 sm:mb-5 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#38bdf8]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#38bdf8] uppercase">
              Code • Learn • Practice • Grow
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold tracking-[-0.025em] leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Your Coding <br />
            Journey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#3b82f6] drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              Starts Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-300/90 leading-relaxed max-w-lg font-normal drop-shadow">
            Learn from industry experts, build real-world projects, and gain the in-demand skills to launch your dream tech career.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/course-list"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2563eb] to-[#0284c7] hover:from-[#1d4ed8] hover:to-[#0369a1] border border-white/15 transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Explore Courses</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 bg-[#070e22]/85 hover:bg-[#0d1a3a] border border-slate-700/80 hover:border-slate-500/90 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5 group"
            >
              <div className="w-5 h-5 rounded-full bg-[#0070f3]/25 text-[#38bdf8] flex items-center justify-center text-[8px] border border-[#0070f3]/40 group-hover:scale-110 transition-transform">
                <FaPlay size={7} className="ml-0.5 text-[#38bdf8]" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Social Proof Student Avatars Badge */}
          <div className="mt-8 sm:mt-9 flex items-center gap-3.5">
            <div className="flex -space-x-2.5 shrink-0">
              <img
                src={assets.profile_img_1 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"}
                alt="Student"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#050816] object-cover ring-1 ring-blue-500/30"
              />
              <img
                src={assets.profile_img_2 || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"}
                alt="Student"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#050816] object-cover ring-1 ring-blue-500/30"
              />
              <img
                src={assets.profile_img_3 || "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100"}
                alt="Student"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#050816] object-cover ring-1 ring-blue-500/30"
              />
              <img
                src={assets.profile_img || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100"}
                alt="Student"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#050816] object-cover ring-1 ring-blue-500/30"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black text-white leading-tight">10,000+</span>
                <span className="text-xs sm:text-sm font-semibold text-[#38bdf8]">Learners</span>
                <div className="flex items-center text-amber-400 text-xs ml-0.5">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="ml-1 text-[11px] font-bold text-slate-300">(4.9/5)</span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-normal">
                Students already learning with Code Campus
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Preview */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#090e26] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <span className="font-bold text-sm text-white">Welcome to Code Campus Academy</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Code Campus Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
