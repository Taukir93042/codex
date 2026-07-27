import React, { useContext } from "react";

import CourseCard from "./CourseCard";
import { Link, useNavigate } from "react-router-dom";
import { CourseContext } from "../context/Appcontext.jsx";

const PopularCourses = () => {
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate();
  return (
    <section className="py-6 px-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Popular Courses</h2>
         <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
      Explore our most popular courses designed by industry experts.
      Master in-demand skills, build real-world projects, and take the next
      step toward achieving your career goals.
    </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-10">
  <Link
    to="/course-list"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    View All Courses
  </Link>
</div>
      </div>
    </section>
  );
};

export default PopularCourses;
