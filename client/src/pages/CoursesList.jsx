import { useState, useContext } from "react";
import { CourseContext } from "../context/Appcontext";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
 

const CourseList = () => {
  const { courses } = useContext(CourseContext);
  const [search, setSearch] = useState("");
 

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Header/>
    <section className="max-w-7xl mx-auto px-16 py-10">

      {/* Top */}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">

        <div>
  <h1 className="text-2xl font-bold">Course List</h1>

  <p className="text-gray-500 mt-2">
    <Link
      to="/"
      className="hover:text-blue-600 transition"
    >
      Home
    </Link>

    <span className="mx-2">/</span>

    <span className="text-blue-600 font-medium">
      Course List
    </span>
  </p>
</div>

        {/* Search */}

        <div className="flex w-full md:w-[420px]">

          <input
            type="text"
            placeholder="Search for courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-l-lg px-4 py-3 outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 rounded-r-lg">
            Search
          </button>

        </div>

      </div>

      {/* Grid */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-12">

       {
        filteredCourses.map((course)=>(
          <CourseCard key={course.id} course={course}/>
        ))
       }
      </div>

      {/* Button */}

     

    </section>
    <Footer/>
    
    </>
    
  );
};

export default CourseList;