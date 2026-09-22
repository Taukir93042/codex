import React, { useState } from "react";
import { Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

const CourseCard = ({ course }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const fallbackImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80";

  let thumbnailSrc = fallbackImage;
  if (!imageError && course?.thumbnail) {
    thumbnailSrc = course.thumbnail.startsWith("http")
      ? course.thumbnail
      : `https://code-campus-backend.onrender.com/${course.thumbnail}`;
  } else if (!imageError && course?.image) {
    thumbnailSrc = course.image;
  }

  const courseId = course?._id || course?.id || "1";
  const formattedPrice = course?.price ? `₹${course.price.toLocaleString("en-IN")}` : "₹1,499";
  const originalPrice = course?.originalPrice ? `₹${course.originalPrice.toLocaleString("en-IN")}` : "₹2,999";

  return (
    <div className="group flex flex-col justify-between w-full overflow-hidden rounded-2xl bg-[#080d22]/95 border border-slate-800/90 shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300">
      
      {/* Top Image Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#050816]">
        
        {/* Bestseller Badge */}
        {course?.isBestseller && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-extrabold text-black shadow-md">
            Bestseller
          </span>
        )}

        {/* Duration Pill in bottom right of image */}
        <span className="absolute right-3 bottom-3 z-20 rounded-md bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-slate-200 border border-white/10">
          {course?.duration || "12h 30m"}
        </span>

        {/* Thumbnail image */}
        <img
          src={thumbnailSrc}
          alt={course?.title || "Course"}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block text-[11px] font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
            {course?.category || "Web Development"}
          </span>
        </div>

        {/* Course Title */}
        <Link to={`/courses/${courseId}`}>
          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {course?.title || course?.name || "Complete MERN Stack Development"}
          </h3>
        </Link>

        {/* Course Description */}
        <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed font-normal">
          {course?.description || course?.desc || "Learn industry-ready skills with hands-on projects, practical exercises and guided mentorship."}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <Star size={14} className="text-amber-400 fill-amber-400 shrink-0" />
          <span className="text-xs font-bold text-white">
            {course?.rating || "4.8"}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            ({course?.reviewsCount || course?.reviews || course?.studentsCount || "1.2K"} reviews)
          </span>
        </div>

        {/* Price & Action Button */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-black text-white">
              {formattedPrice}
            </span>
            <span className="text-xs text-slate-500 line-through font-medium">
              {originalPrice}
            </span>
          </div>

          <Link
            to={`/checkout/${courseId}`}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md shadow-blue-600/20 cursor-pointer"
          >
            Enroll Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;
