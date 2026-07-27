import React from 'react'
import { useContext } from 'react'
import { CourseContext } from '../context/Appcontext'
import TestimonialsCard from './TestimonialsCard'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const {testimonials}  = useContext(CourseContext)
  return (
    <section className="py-16 bg-[#f8fbff] px-10">
      <div  className="max-w-7xl mx-auto px-6">
        <div className="text-center">

          <span className="px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6 text-slate-900">
            What Our Learners Say
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            Thousands of students are transforming their careers with
            CodeCampus. Here's what they have to say.
          </p>

        </div>

        <div className="mt-12">
          <Swiper modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
                    breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((testimonial) => (
  <SwiperSlide key={testimonial.id}>
    <TestimonialsCard testimonial={testimonial} />
  </SwiperSlide>
))}
            </Swiper>

        </div>

      </div>

    </section>
  )
}

export default Testimonial
