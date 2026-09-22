import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CourseContext } from "../context/Appcontext";
import CourseCard from "./CourseCard";
import { assets } from "../assets/assets";

const PopularCourses = () => {
  const { courses } = useContext(CourseContext);

  // Default featured courses matching the mockup
  const defaultPopularCourses = [
    {
      id: "mern-stack-development",
      _id: courses?.[0]?._id || "mern-stack-development",
      title: "Complete MERN Stack Development",
      description: "Master React, Node.js, Express, MongoDB and build modern full-stack web applications from scratch.",
      category: "Web Development",
      instructor: "Rahul Sharma",
      instructorAvatar: assets.profile_img_1 || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      rating: 4.8,
      reviewsCount: "1.2K",
      studentsCount: "1.2K",
      price: 1499,
      originalPrice: 2999,
      duration: "12h 30m",
      isBestseller: true,
      image: assets.mern_thumb,
    },
    {
      id: "ui-ux-design-masterclass",
      _id: courses?.[1]?._id || "ui-ux-design-masterclass",
      title: "UI/UX Design Masterclass",
      description: "Learn Figma, user research, wireframing, interactive prototyping, and design systems.",
      category: "Design",
      instructor: "Priya Verma",
      instructorAvatar: assets.profile_img_2 || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      rating: 4.7,
      reviewsCount: "856",
      studentsCount: "856",
      price: 999,
      originalPrice: 1999,
      duration: "8h 15m",
      isBestseller: false,
      image: assets.uiux_thumb,
    },
    {
      id: "data-analysis-python",
      _id: courses?.[2]?._id || "data-analysis-python",
      title: "Data Analysis with Python",
      description: "Analyze datasets, build visualizations, and master pandas, numpy, and matplotlib.",
      category: "Data Science",
      instructor: "Aman Khan",
      instructorAvatar: assets.profile_img_3 || "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
      rating: 4.6,
      reviewsCount: "642",
      studentsCount: "642",
      price: 1299,
      originalPrice: 2499,
      duration: "10h 20m",
      isBestseller: false,
      image: assets.python_thumb,
    },
    {
      id: "devops-aws-docker",
      _id: courses?.[3]?._id || "devops-aws-docker",
      title: "DevOps with AWS & Docker",
      description: "Master CI/CD pipelines, Docker containers, Kubernetes orchestration, and AWS cloud deployment.",
      category: "DevOps",
      instructor: "Sneha Gupta",
      instructorAvatar: assets.profile_img || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100",
      rating: 4.9,
      reviewsCount: "1K",
      studentsCount: "1K",
      price: 799,
      originalPrice: 1499,
      duration: "14h 10m",
      isBestseller: false,
      image: assets.devops_thumb,
    },
  ];

  const displayList = defaultPopularCourses;

  return (
    <section className="w-full py-5 sm:py-7 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-5 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                POPULAR COURSES
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Most Popular Courses
            </h2>
          </div>

          <Link
            to="/course-list"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group self-start sm:self-auto"
          >
            <span>View All Courses</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayList.map((course) => (
            <CourseCard key={course._id || course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;