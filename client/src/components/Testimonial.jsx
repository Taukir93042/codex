import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const testimonialsList = [
    {
      id: 1,
      name: "Rohan Mehta",
      role: "Frontend Developer",
      image: assets.profile_img_1 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
      quote: "Code Campus has completely changed the way I learn. The courses are practical and beginner-friendly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Neha Singh",
      role: "UI/UX Designer",
      image: assets.profile_img_2 || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
      quote: "Amazing platform with great instructors. I gained real skills and built my portfolio.",
      rating: 5,
    },
    {
      id: 3,
      name: "Aditya Kumar",
      role: "Data Analyst",
      image: assets.profile_img_3 || "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120",
      quote: "The best investment I've made in my career. Highly recommended for anyone who wants to upskill.",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Full Stack Engineer",
      image: assets.profile_img || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120",
      quote: "The MERN stack curriculum is top-notch. I cracked my first developer job within 3 months!",
      rating: 5,
    },
    {
      id: 5,
      name: "Aman Verma",
      role: "Backend Developer",
      image: assets.profile_img2 || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
      quote: "Step-by-step backend and API architecture explained with real-world project deployments.",
      rating: 5,
    },
    {
      id: 6,
      name: "Sneha Patel",
      role: "Cloud Architect",
      image: assets.profile_img_1 || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120",
      quote: "Hands-on cloud & DevOps labs gave me the confidence to handle production environments.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-4 sm:mb-5">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                TESTIMONIALS
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              What Our Learners Say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Swiper Carousel */}
        <div className="w-full relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full !pb-4"
          >
            {testimonialsList.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#080d22]/95 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-950/40 group">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-700 group-hover:border-cyan-400/50 transition-colors shrink-0"
                    />
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
