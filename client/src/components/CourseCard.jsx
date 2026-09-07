import React from "react";
import { Bookmark, Clock3, BarChart3, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="group w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1c] shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40">
      {/* Image Section */}
      <div className="relative h-[195px] overflow-hidden bg-[#020817]">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.15),transparent_65%)]" />

        {/* Category */}
        <span className="absolute left-5 top-5 z-10 rounded-full bg-blue-600/90 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
          {course.category}
        </span>

        {/* Bookmark */}
        <button className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111827]/80 text-gray-300 backdrop-blur transition hover:bg-indigo-600 hover:text-white">
          <Bookmark size={19} />
        </button>

        {/* Course Image */}
        <img
     src={`https://code-campus-backend.onrender.com/${course?.thumbnail}`}
          alt={course?.title}
          className="relative h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-[24px] font-bold capitalize text-white">
            {course.title}
          </h2>

          <div className="flex shrink-0 items-center gap-1.5 pt-1">
            <Star size={18} fill="currentColor" className="text-yellow-400" />

            <span className="text-base font-medium text-white">
              {course?.rating || "5.0"}
            </span>

            <span className="text-sm text-gray-500">
              ({course?.reviewsCount || 3})
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-2 min-h-[24px] text-[15px] text-gray-400">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="mt-8 flex items-center gap-5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock3 size={18} className="text-gray-400" />
            <span>{course.duration}</span>
          </div>

          <span className="text-gray-600">•</span>

          <div className="flex items-center gap-2">
            <BarChart3 size={18} className="text-indigo-400" />
            <span>Beginner</span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/courses/${course._id}`}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-500/30"
        >
          View Course
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
