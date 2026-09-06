import React, { useContext } from "react";
import { CourseContext } from "../context/Appcontext";
import CourseCard from "./CourseCard";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PopularCourses = () => {
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate()

  return (
    <section className="w-full px-6   sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Courses */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            /> 
          ))}
        </div>

        {/* More Courses Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="group flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-600/10 px-7 py-3 text-sm font-semibold text-indigo-400 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-600/20"
            onClick={()=>navigate("course-list")}
          >
            More Courses
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;