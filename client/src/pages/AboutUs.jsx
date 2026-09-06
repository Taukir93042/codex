import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/Appcontext";
import {
  FaBookOpen,
  FaCertificate,
  FaChartLine,
  FaGlobe,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { assets } from "../assets/assets.js";

const highlights = [
  {
    icon: <FaGraduationCap className="text-blue-400" size={22} />,
    title: "Industry-Relevant Curriculum",
    desc: "Courses are designed to match today’s job market and real-world expectations.",
  },
  {
    icon: <FaLaptopCode className="text-blue-400" size={22} />,
    title: "Practical Learning",
    desc: "Learners build projects, solve problems, and apply concepts with confidence.",
  },
  {
    icon: <FaChartLine className="text-blue-400" size={22} />,
    title: "Progress Tracking",
    desc: "Every learner can follow growth, milestones, and achievements along the way.",
  },
  {
    icon: <FaCertificate className="text-blue-400" size={22} />,
    title: "Recognized Certifications",
    desc: "Completing a course opens the door to credible proof of your new skills.",
  },
];

const offerings = [
  "Comprehensive online courses",
  "Project-based learning experiences",
  "Industry-recognized certificates",
  "Interactive quizzes and assessments",
  "Lifetime access to enrolled courses",
  "Mobile-friendly learning environment",
  "Expert instructor guidance",
  "Regularly updated course content",
];

const values = [
  {
    title: "Excellence",
    desc: "We are committed to delivering educational experiences that meet the highest standards of quality.",
  },
  {
    title: "Innovation",
    desc: "We continuously adopt new technologies and teaching methods to improve learning.",
  },
  {
    title: "Integrity",
    desc: "Honesty, transparency, and ethical practices guide every decision we make.",
  },
  {
    title: "Accessibility",
    desc: "We believe education should be available to everyone, regardless of background or location.",
  },
];

const AboutUs = () => {
  const { setShowAuthModal, setAuthType } = useContext(CourseContext);
  return (
    <div className="min-h-screen bg-[#050816] text-white font-sans">
      <Header />

      <main className="mx-auto max-w-full">
        <section
          className="bg-[#050816] bg-no-repeat bg-cover bg-[center_right] px-4 sm:px-10 relative overflow-hidden border-b border-slate-800/80"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #050816 35%, rgba(5, 8, 22, 0.75) 65%, rgba(5, 8, 22, 0.15) 100%), url(${assets.about_banner})`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="max-w-xl lg:max-w-2xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  <FaRocket className="text-blue-400 animate-pulse" /> Transforming Education
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
                  About <span className="text-blue-500">CodeCampus</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-350">
                  At CodeCampus, we believe education should be accessible,
                  engaging, and career-focused for learners across the globe. Our
                  platform combines academic excellence with practical, real-world
                  learning.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/course-list"
                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    to="/contact-us"
                    className="rounded-xl border border-slate-700 bg-slate-800/40 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 hover:border-slate-600"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-10 bg-[#050816]">
          <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                  <FaBookOpen size={20} />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Story</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                CodeCampus was founded to make quality education available
                anytime, anywhere, and on any device. We saw that learners often
                faced limited access to quality resources, inflexible schedules,
                and outdated methods, so we created a platform that turns learning
                into a flexible and meaningful experience.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Today, our mission continues to grow as we help students,
                professionals, and aspiring creators gain practical expertise,
                build confidence, and achieve measurable career growth.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0b1129]/60 p-4 shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={assets.about_us_img1}
                alt="Learning journey illustration"
                className="w-full rounded-2xl object-cover hover:scale-[1.02] transition duration-500 brightness-95"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-10 bg-[#03050c]/40 border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="px-6 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold mt-6 text-white">Why CodeCampus?</h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                We provide a learning environment that is designed to help you succeed in the real world.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-800/80 bg-[#0b1129]/60 p-6 shadow-md hover:border-blue-500/40 hover:-translate-y-1 transition duration-300"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 shadow-sm group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission & Offerings Section */}
        <section className="py-20 px-10 bg-[#050816] border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#0b1129]/40 p-8 text-white shadow-xl relative overflow-hidden border border-slate-800/60 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-400">🎯</span> Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-blue-400 text-sm uppercase tracking-wider">Our Mission</h3>
                    <p className="mt-2 text-slate-300 leading-relaxed text-base">
                      Our mission is to empower learners by providing affordable,
                      accessible, and industry-relevant education that prepares them for
                      real-world success.
                    </p>
                  </div>
                  <div className="border-t border-slate-800/60 pt-6">
                    <h3 className="font-semibold text-blue-400 text-sm uppercase tracking-wider">Our Vision</h3>
                    <p className="mt-2 text-slate-300 leading-relaxed text-base">
                      Our vision is to become one of the world’s most trusted digital
                      learning platforms, recognized for excellence in online education,
                      innovation, and learner success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-[#0b1129]/60 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <FaGlobe size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">What We Offer</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {offerings.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#050816]/40 p-4 text-sm font-medium text-slate-300 shadow-sm hover:border-blue-500/30 transition duration-250"
                  >
                    <span className="text-blue-400 font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values & Community Stats Section */}
        <section className="py-20 px-10 bg-[#050816] border-t border-slate-800/40">
          <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Our Core Values</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                These principles guide how we build our courses, interact with our community, and operate as a company.
              </p>
              <div className="grid gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="group rounded-xl border border-slate-800/60 bg-[#0b1129]/40 p-5 hover:bg-[#0b1129]/65 hover:border-blue-500/30 transition duration-300"
                  >
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-[#0b1129]/60 p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Learning Community
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Whether you are taking your first step into technology, preparing
                for your dream career, or expanding your professional expertise,
                CodeCampus is here to support your journey.
              </p>

              <div className="mt-8 grid gap-4 grid-cols-3">
                <div className="rounded-2xl bg-[#050816]/40 p-5 text-center border border-slate-800/80 shadow-sm hover:border-blue-500/20 transition">
                  <p className="text-3xl font-extrabold text-blue-400">10k+</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Learners</p>
                </div>
                <div className="rounded-2xl bg-[#050816]/40 p-5 text-center border border-slate-800/80 shadow-sm hover:border-blue-500/20 transition">
                  <p className="text-3xl font-extrabold text-blue-400">120+</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Courses</p>
                </div>
                <div className="rounded-2xl bg-[#050816]/40 p-5 text-center border border-slate-800/80 shadow-sm hover:border-blue-500/20 transition">
                  <p className="text-3xl font-extrabold text-blue-400">95%</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Success</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setAuthType("signup");
                    setShowAuthModal(true);
                  }}
                  className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20 text-center flex-grow sm:flex-grow-0 cursor-pointer"
                >
                  Join Now
                </button>
                <Link
                  to="/instructor-auth"
                  className="rounded-xl border border-slate-700 bg-slate-800/40 px-6 py-3.5 font-bold text-white transition hover:bg-slate-800 hover:border-slate-600 text-center flex-grow sm:flex-grow-0"
                >
                  Become an Instructor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
