import React, { useContext } from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { CourseContext } from "../context/Appcontext";
import { assets } from "../assets/assets";

const BottomCTABanner = () => {
  const { setShowAuthModal, setAuthType, isLoggedIn } = useContext(CourseContext);

  const handleAction = () => {
    if (!isLoggedIn) {
      setAuthType("signup");
      setShowAuthModal(true);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden border-y border-blue-500/20 bg-fixed bg-cover bg-center bg-no-repeat py-16 sm:py-16 lg:py-20  "
      style={{
        backgroundImage: `url(${assets.banner_slide_1 || assets.banner_img})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Light Overlay so image is clearly visible while keeping text readable */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex items-center lg:items-start gap-5 sm:gap-6 text-center lg:text-left flex-col sm:flex-row">
             

            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-black text-white tracking-tight leading-[1.18] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                 Have Questions? Get in Touch With Us
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200/95 mt-3 font-normal leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  Have questions about our courses, programs, or services? Our team is here to help. Reach out to us and we’ll be happy to assist you.
              </p>
            </div>
          </div>

          {/* Right Transparent Glassmorphic Button */}
          <button
            onClick={handleAction}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 sm:py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 hover:border-cyan-400 backdrop-blur-md transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 cursor-pointer shrink-0 group"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200 text-cyan-300" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default BottomCTABanner;
