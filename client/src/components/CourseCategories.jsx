import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CourseCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "web-development",
      title: "Web Development",
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 9L4 16L11 23" />
          <path d="M21 9L28 16L21 23" />
          <path d="M18 6L14 26" />
        </svg>
      ),
      link: "/course-list?category=Web%20Development",
    },
    {
      id: "backend-development",
      title: "Backend Development",
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect x="5" y="4" width="22" height="6" rx="2" fill="#3B82F6" />
          <circle cx="9" cy="7" r="1" fill="#BFDBFE" />
          <circle cx="12" cy="7" r="1" fill="#BFDBFE" />

          <rect x="5" y="13" width="22" height="6" rx="2" fill="#3B82F6" />
          <circle cx="9" cy="16" r="1" fill="#BFDBFE" />
          <circle cx="12" cy="16" r="1" fill="#BFDBFE" />

          <rect x="5" y="22" width="22" height="6" rx="2" fill="#3B82F6" />
          <circle cx="9" cy="25" r="1" fill="#BFDBFE" />
          <circle cx="12" cy="25" r="1" fill="#BFDBFE" />
        </svg>
      ),
      link: "/course-list?category=Backend%20Development",
    },
    {
      id: "mern-stack",
      title: "MERN Stack",
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      link: "/course-list?category=MERN%20Stack",
    },
    {
      id: "python",
      title: "Python",
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path
            fill="#387eb8"
            d="M63.02 0c-17.7 0-31.25 1.5-31.25 14.53v10.97h31.84v3.66H19.78C6.69 29.16 0 37.1 0 54.34c0 14.47 7.9 23.44 20.5 23.44h7.03V66.69c0-12.75 10.87-23.75 23.63-23.75h31.41V31.28c0-12.87-11.47-31.28-39.55-31.28zm-11.5 8.91c2.72 0 4.94 2.22 4.94 4.94 0 2.73-2.22 4.94-4.94 4.94s-4.94-2.21-4.94-4.94c0-2.72 2.22-4.94 4.94-4.94z"
          />
          <path
            fill="#ffe873"
            d="M64.98 128c17.7 0 31.25-1.5 31.25-14.53v-10.97H64.39v-3.66h43.83c13.09 0 19.78-7.94 19.78-25.18 0-14.47-7.9-23.44-20.5-23.44h-7.03v11.09c0 12.75-10.87 23.75-23.63 23.75H45.43v11.66c0 12.87 11.47 31.28 39.55 31.28zm11.5-8.91c-2.72 0-4.94-2.22-4.94-4.94 0-2.73 2.22-4.94 4.94-4.94s4.94 2.21 4.94 4.94c0 2.72-2.22 4.94-4.94 4.94z"
          />
        </svg>
      ),
      link: "/course-list?category=Python",
    },
    {
      id: "java",
      title: "Java",
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          {/* Red steam */}
          <path
            d="M12.5 3.5C11 6 14.5 8 13 10.5C12 12 10.5 12.5 11.5 14.5"
            stroke="#EF4444"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.5 4.5C16 7 19.5 9 18 11.5C17 13 15.5 13.5 16.5 15.5"
            stroke="#EF4444"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Blue cup & saucer */}
          <path
            d="M8 18C10.5 18 19 18 23 18C23 23 18.5 25.5 15.5 25.5C12.5 25.5 8 23 8 18Z"
            fill="#3B82F6"
          />
          <path
            d="M7 27C12 28.5 19 28.5 24 27C21 28.5 11 29 7 27Z"
            fill="#3B82F6"
            stroke="#3B82F6"
            strokeWidth="0.8"
          />
          <path
            d="M22 19C24 19 25.5 20.5 25 22C24.5 23 23 23.5 21.5 23"
            stroke="#3B82F6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      link: "/course-list?category=Java",
    },
    {
      id: "devops",
      title: "DevOps",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-2-3-4.5-4.5-7-4.5C2.5 7.5 1 9.5 1 12s1.5 4.5 4 4.5c2.5 0 5-1.5 7-4.5 2 3 4.5 4.5 7 4.5 2.5 0 4-2 4-4.5s-1.5-4.5-4-4.5c-2.5 0-5 1.5-7 4.5z" />
        </svg>
      ),
      link: "/course-list?category=DevOps",
    },
    {
      id: "data-structures",
      title: "Data Structures",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="2.5" fill="currentColor" />
          <circle cx="6" cy="19" r="2.5" fill="currentColor" />
          <circle cx="18" cy="19" r="2.5" fill="currentColor" />
          <path d="M12 7.5V13" />
          <path d="M6 16.5V13h12v3.5" />
        </svg>
      ),
      link: "/course-list?category=Data%20Structures",
    },
    {
      id: "git-github",
      title: "Git & GitHub",
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect
            x="16"
            y="2.5"
            width="18"
            height="18"
            rx="3.5"
            transform="rotate(45 16 2.5)"
            fill="#F05032"
          />
          <circle cx="16" cy="11.5" r="1.5" fill="white" />
          <circle cx="11.5" cy="16" r="1.5" fill="white" />
          <circle cx="16" cy="20.5" r="1.5" fill="white" />
          <path d="M16 11.5V20.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 14.5L11.5 16" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      link: "/course-list?category=Git%20&%20GitHub",
    },
  ];

  // Multiple duplicates for flawless continuous infinite marquee
  const displayCategories = [...categories, ...categories, ...categories];

  return (
    <section className="w-full pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#38bdf8] uppercase">
                CATEGORIES
              </span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#38bdf8] to-transparent rounded-full" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Popular Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Choose from a wide range of courses and start learning today.
            </p>
          </div>

          <Link
            to="/course-list"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors group shrink-0"
          >
            <span>View All</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Continuous Smooth Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Left & Right Edge Vignette Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-infinite gap-4">
            {displayCategories.map((cat, index) => (
              <div
                key={`${cat.id}-${index}`}
                onClick={() => navigate(cat.link)}
                className="w-[140px] sm:w-[160px] lg:w-[170px] shrink-0 py-5 px-3 rounded-xl bg-[#091024]/80 border border-[#172554]/60 hover:border-blue-500/50 hover:bg-[#0e1a3a] transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer shadow-md hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 min-h-[125px] select-none"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white leading-tight">
                  {cat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;

