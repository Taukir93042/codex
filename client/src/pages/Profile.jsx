import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  PlayCircle,
  User,
  Mail,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { CourseContext } from "../context/Appcontext";

const Profile = () => {
  const { storeUser, isLoggedIn, enrolledCourses, setEnrolledCourses } =
    useContext(CourseContext);

  if (!isLoggedIn || !storeUser) {
    return <Navigate to="/" replace />;
  }

  console.log("enrolled course profile", enrolledCourses);

 

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* =====================================================
            MY LEARNING - FIRST SECTION
        ====================================================== */}
        <section>
          {/* Heading */}
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Learning Dashboard
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Enrolled Courses
              </h1>

              <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
                Continue learning from where you left off and build your skills
                with CodeCampus.
              </p>
            </div>

            <Link
              to="/course-list"
              className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            >
              Browse Courses
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Course Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <article
                key={course.id}
                className="group overflow-hidden rounded-[22px] border border-indigo-500/30 bg-[#070d1d] shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/60"
              >
                {/* Image Section */}
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#070d1d]" />

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg">
                    {course.category}
                  </span>

                  {/* Bookmark */}
                  <button
                    type="button"
                    className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/90 text-slate-300 backdrop-blur-md transition hover:bg-indigo-600 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c.368 0 .667.299.667.667v16.02a.667.667 0 01-1.02.564L12 17.307l-5.24 3.266a.667.667 0 01-1.02-.564V3.989c0-.368.299-.667.667-.667h11.186z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="px-7 pb-7 pt-6">
                  {/* Title + Rating */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="min-h-[76px] text-[27px] font-bold leading-[1.4] text-white">
                      {course.title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-2 pt-1">
                      <span className="text-xl text-yellow-400">★</span>

                      <span className="text-lg font-semibold text-white">
                        5.0
                      </span>

                      <span className="text-sm text-slate-500">(3)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 line-clamp-2 text-base leading-7 text-slate-400">
                    Learn complete frontend and backend development with
                    practical projects and industry-focused concepts.
                  </p>

                  {/* Meta */}
                  <div className="mt-7 flex items-center gap-5 text-base text-slate-400">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-6 w-6 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                        />
                      </svg>

                      {course.duration}
                    </div>

                    <span className="h-1 w-1 rounded-full bg-slate-600" />

                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-6 w-6 text-indigo-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 19V5m0 14h16M8 16v-5m4 5V8m4 8v-7"
                        />
                      </svg>
                      Beginner
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    to={`/course/${course.id}`}
                    className="mt-7 flex h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-lg font-semibold text-white shadow-lg shadow-indigo-900/20 transition hover:from-indigo-500 hover:to-blue-500"
                  >
                    Continue Learning
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROFILE OVERVIEW
        ====================================================== */}
        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
              Account
            </p>

            <h2 className="mt-1 text-2xl font-bold">Profile Overview</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            {/* Profile Card */}
            <div className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-2xl font-bold">
                  {storeUser?.avatar ? (
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${storeUser.avatar}`}
                      alt={storeUser.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    storeUser?.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold">{storeUser.name}</h3>

                <p className="mt-1 text-sm text-slate-500">{storeUser.email}</p>

                <span className="mt-4 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold capitalize text-indigo-400">
                  {storeUser.role}
                </span>
              </div>
            </div>

            {/* Account Details */}
            <div className="rounded-2xl border border-white/10 bg-[#080d1d] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <User size={14} />
                    Full Name
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-slate-200">
                    {storeUser.name}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <Mail size={14} />
                    Email Address
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-slate-400">
                    {storeUser.email}
                  </div>
                </div>

                {/* Role */}
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <ShieldCheck size={14} />
                    Account Type
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm capitalize text-slate-300">
                    {storeUser.role}
                  </div>
                </div>

                {/* Student ID */}
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Student ID
                  </div>

                  <div className="break-all rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 font-mono text-xs text-slate-500">
                    {storeUser._id}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
