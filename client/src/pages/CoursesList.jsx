import React, { useContext, useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  ChevronRight,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { CourseContext } from "../context/Appcontext";
import { assets, courses as staticCourses } from "../assets/assets.js";
import BottomCTABanner from "../components/BottomCTABanner.jsx";

const CATEGORIES = [
  "All",
  "Web Development",
  "Programming",
  "Backend",
  "Frontend",
  "Full Stack",
  "DSA",
  "Design",
  "Database",
];

const CoursesList = () => {
  const { courses: apiCourses } = useContext(CourseContext);
  const [searchParams, setSearchParams] = useSearchParams();

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  // Sync state if URL search param changes
  useEffect(() => {
    const query = searchParams.get("search");
    if (query !== null) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Merge context courses with static fallback
  const allCourses = useMemo(() => {
    if (Array.isArray(apiCourses) && apiCourses.length > 0) {
      return apiCourses;
    }
    return staticCourses || [];
  }, [apiCourses]);

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    return allCourses
      .filter((course) => {
        // Category Filter
        const matchesCategory =
          selectedCategory === "All" ||
          course.category?.toLowerCase() === selectedCategory.toLowerCase();

        // Search Query Filter
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          course.title?.toLowerCase().includes(query) ||
          course.name?.toLowerCase().includes(query) ||
          course.instructor?.toLowerCase().includes(query) ||
          course.category?.toLowerCase().includes(query) ||
          course.description?.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "rating") {
          return (b.rating || 0) - (a.rating || 0);
        }
        if (sortBy === "price-low") {
          return (a.price || 0) - (b.price || 0);
        }
        if (sortBy === "price-high") {
          return (b.price || 0) - (a.price || 0);
        }
        if (sortBy === "popular") {
          return (b.students || 0) - (a.students || 0);
        }
        return 0;
      });
  }, [allCourses, selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("popular");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col selection:bg-blue-600 selection:text-white">
      <Header />

      {/* ================= THIN HERO BANNER SECTION (CLEAR IMAGE) ================= */}
      <section className="relative w-full overflow-hidden bg-[#030712] border-b border-slate-800/80">
        {/* Background Image with Crisp & Clear Visibility */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: `url(${assets.courses_banner_hero || assets.hero_developer || assets.banner_img})`,
          }}
        />

        {/* Very Light Subtle Tint For High Image Clarity & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

        {/* Ambient Neon Cyan / Blue Subtle Glow Behind Centered Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-28 bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />

        {/* Banner Content Container (Centered) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-11 md:py-12 z-10 flex flex-col items-center justify-center text-center">
        
          {/* Section Tag */}
          <div className="flex items-center justify-center gap-2 mb-2 drop-shadow-md">
            <div className="w-8 h-[2px] bg-gradient-to-l from-[#38bdf8] to-transparent rounded-full" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#fff] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              EXPLORE CATALOG
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#fff] to-transparent rounded-full" />
          </div>

          {/* H2 Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Our Courses
          </h2>
            
          {/* Breadcrumb Navigation with Home Link */}
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-200 mt-2.5 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <Link
              to="/"
              className="text-slate-200 hover:text-cyan-400 font-semibold transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-cyan-400 font-bold">Courses</span>
            {selectedCategory !== "All" && (
              <>
                <ChevronRight size={14} className="text-slate-300" />
                <span className="text-white font-semibold">{selectedCategory}</span>
              </>
            )}
          </nav>

        </div>
      </section>

      {/* ================= CONTROLS & FILTER SECTION (SEAMLESS & PROFESSIONAL) ================= */}
      <section className="sticky top-[61px] sm:top-[69px] z-30 bg-[#030712]/95 backdrop-blur-2xl py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
          
          {/* Top Row: Info & Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Left: Results Count & Dynamic Status */}
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                Showing {filteredCourses.length} Courses
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-500 font-medium">
                • Curated for industry excellence
              </span>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-medium transition cursor-pointer ml-1"
                >
                  <RotateCcw size={11} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* Right: Search Box + Sort Dropdown */}
            <div className="flex items-center gap-2.5">
              
              {/* Search Box */}
              <div className="relative flex-1 sm:w-64 md:w-72">
                <Search
                  size={14}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, topic or mentor..."
                  className="w-full bg-[#080e29]/90 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="relative shrink-0 flex items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#080e29]/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium rounded-xl pl-3.5 pr-8 py-2 outline-none focus:border-blue-500 cursor-pointer appearance-none hover:border-slate-700 transition-colors shadow-inner"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <SlidersHorizontal
                  size={13}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>

            </div>

          </div>

          {/* Bottom Row: Full-Width Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar scroll-smooth py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20 scale-[1.02]"
                      : "bg-[#090f26]/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= MAIN COURSES GRID SECTION ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Courses Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course._id || course.id || index} course={course} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              We couldn't find any courses matching your search "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              Clear Search & View All Courses
            </button>
          </div>
        )}

      </main>
  
<BottomCTABanner/>
      <Footer />
    </div>
  );
};

export default CoursesList;