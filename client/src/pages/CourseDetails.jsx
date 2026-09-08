import Header from "../components/Header";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
import { CourseContext } from "../context/Appcontext";
import { useContext } from "react";

function CourseDetails() {
  const {id} = useParams();
  const { courses }= useContext(CourseContext)
 const course = courses.find((item) =>  item._id === id);

 const navigate = useNavigate();
 
  
  return (
    <div className="min-h-screen bg-[#050817] text-white">
      <Header />

      {/* Banner */}
      <section
        className="relative overflow-hidden  "
        style={{
          backgroundImage: `url(${assets.banner_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050817]/65" />

        {/* Content */}
        <div className="relative flex min-h-[380px] items-center px-8 py-8 md:px-12">
          <div>
            <p className="text-sm font-medium text-indigo-400">
              Courses / React
            </p>

            <h1 className="mt-3 text-3xl font-bold md:text-5xl">
              React.Js Masterclass
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Learn React from fundamentals to advanced concepts and build
              modern web applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <span>
                ⭐ <span className="text-yellow-400">5.0</span> (3)
              </span>

              <span>◷ 20 Hours</span>

              <span>Beginner</span>
            </div>
          </div>
        </div>
      </section>

    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
  <section>
    <div className="grid gap-8 lg:grid-cols-3">

      {/* ================= LEFT CONTENT ================= */}
      <div className="space-y-8 lg:col-span-2">

        {/* About Course */}
        <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">
          <h2 className="text-2xl font-bold">
            About This Course
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            {course.description}
          </p>
        </section>

        {/* Course Overview */}
        <section>
          <h2 className="text-2xl font-bold">
            Course Overview
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {/* Category */}
            <div className="rounded-xl border border-white/10 bg-[#080d1d] p-5">
              <p className="text-sm text-slate-500">
                Category
              </p>

              <p className="mt-2 font-semibold text-white">
                {course.category}
              </p>
            </div>

            {/* Level */}
            <div className="rounded-xl border border-white/10 bg-[#080d1d] p-5">
              <p className="text-sm text-slate-500">
                Level
              </p>

              <p className="mt-2 font-semibold text-white">
                {course.level}
              </p>
            </div>

            {/* Duration */}
            <div className="rounded-xl border border-white/10 bg-[#080d1d] p-5">
              <p className="text-sm text-slate-500">
                Duration
              </p>

              <p className="mt-2 font-semibold text-white">
                {course.duration}
              </p>
            </div>

            {/* Instructor */}
            <div className="rounded-xl border border-white/10 bg-[#080d1d] p-5">
              <p className="text-sm text-slate-500">
                Instructor
              </p>

              <p className="mt-2 font-semibold text-white">
                {course.instructor}
              </p>
            </div>

          </div>
        </section>

        {/* What You Will Learn */}
        <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">
          <h2 className="text-2xl font-bold">
            What You'll Learn
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              "Build scalable backend applications",
              "Create REST APIs with Node.js",
              "Work with Express.js",
              "Understand backend architecture",
              "Create and manage API routes",
              "Build real-world backend applications",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-400"
              >
                <span className="mt-0.5 text-green-400">
                  ✓
                </span>

                <span>{item}</span>
              </div>
            ))}

          </div>
        </section>

        {/* Course Content */}
        <section>
          <h2 className="text-2xl font-bold">
            Course Content
          </h2>

          <div className="mt-5 space-y-3">

            {[
              "Node.js Fundamentals",
              "Express.js Basics",
              "Creating REST APIs",
              "Routing & Middleware",
              "Request & Response Handling",
              "Building Scalable Backend Applications",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#080d1d] p-5 transition hover:border-indigo-500/40"
              >
                <div className="flex items-center gap-4">

                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-sm font-semibold text-indigo-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-medium text-white">
                    {item}
                  </span>

                </div>

                <span className="text-sm text-slate-500">
                  🔒
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* Instructor */}
        <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">
          <h2 className="text-2xl font-bold">
            Instructor
          </h2>

          <div className="mt-5 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 text-lg font-bold">
              {course.instructor?.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {course.instructor}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Course Instructor
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* ================= RIGHT COURSE CARD ================= */}
      <div>

        <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] shadow-xl">

          {/* Course Image */}
          <div className="relative">
            <img
               src={`${import.meta.env.VITE_API_URL}/${course.thumbnail}`}
              alt={course.title}
              className="h-56 w-full object-cover"
            />

            <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
              {course.category}
            </div>
          </div>

          <div className="p-6">

            {/* Title */}
            <h2 className="text-xl font-bold text-white">
              {course.title}
            </h2>

            {/* Course Stats */}
            <div className="mt-4 space-y-3 text-sm text-slate-400">

              <div className="flex justify-between">
                <span>Level</span>
                <span className="font-medium text-white">
                  {course.level}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium text-white">
                  {course.duration}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Instructor</span>
                <span className="font-medium text-white">
                  {course.instructor}
                </span>
              </div>

            </div>

            {/* Price */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm text-slate-500">
                Course Price
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                ₹{course.price}
              </p>
            </div>

            {/* Enroll */}
            <button
            onClick={()=>navigate(`/checkout/${course._id}`)}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:opacity-90"
            >
              Enroll Now →
            </button>

            {/* Includes */}
            <div className="mt-6 border-t border-white/10 pt-5">

              <h3 className="mb-4 font-semibold text-white">
                This course includes
              </h3>

              <div className="space-y-3 text-sm text-slate-400">

                <p>✓ {course.duration} of learning</p>

                <p>✓ Lifetime Access</p>

                <p>✓ Mobile & Desktop Access</p>

                <p>✓ Certificate of Completion</p>

                <p>✓ Downloadable Resources</p>

              </div>

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
}

export default CourseDetails;
