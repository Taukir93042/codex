import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const BannerSlider = () => {
  const swiperRef = useRef(null);

  const bannerImages = [
    {
      id: 1,
      image: assets.banner_slide_1,
      alt: "LMS Learning Station",
    },
    {
      id: 2,
      image: assets.banner_slide_2,
      alt: "Collaborative Student Lab",
    },
    {
      id: 3,
      image: assets.banner_slide_3,
      alt: "Tech Network & Cloud Infrastructure",
    },
    {
      id: 4,
      image: assets.banner_slide_4,
      alt: "Professional Developer Engineering",
    },
  ];

  return (
    <section className="w-full bg-[#050816] p-0 m-0 overflow-hidden relative">
      {/* Full Width Banner Slider */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Custom Navigation Arrows */}
        <button
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight size={26} />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[660px]"
        >
          {bannerImages.map((banner) => (
            <SwiperSlide key={banner.id} className="relative w-full h-full overflow-hidden bg-[#050816]">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover object-center transform scale-[1.01] hover:scale-103 transition-transform duration-1000 ease-out"
              />
              {/* Subtle gradient vignette at top and bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-black/30 pointer-events-none" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;
