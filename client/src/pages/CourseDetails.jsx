import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CourseContext } from "../context/Appcontext";
import { getCourseDetails } from "../assets/courseDetailsData";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CourseContent from "../components/CourseContent";
import CourseSidebar from "../components/CourseSidebar";
import Footer from "../components/Footer";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);

  // Find the base course matching the route ID
  const baseCourse = courses?.find((c) => c.id === parseInt(id));

  // Retrieve comprehensive details (falls back to generic generator if custom metadata doesn't exist)
  const course = getCourseDetails(baseCourse);

  if (!course) {
    return (
      <>
        <Header />
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            <span className="text-6xl">🔍</span>
            <h2 className="text-3xl font-black text-slate-800 mt-6">Course Not Found</h2>
            <p className="text-slate-500 mt-3 mb-8">
              We couldn't find the course you were looking for. It might have been moved or deleted.
            </p>
            <Link 
              to="/course-list" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/20"
            >
              Browse All Courses
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Header />
      <HeroSection course={course} />

      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* Main Left Details Content */}
          <div className="lg:col-span-2">
            <CourseContent course={course} />
          </div>

          {/* Sticky Sidebar Right Column */}
          <div className="hidden lg:block lg:col-span-1">
            <CourseSidebar course={course} />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;