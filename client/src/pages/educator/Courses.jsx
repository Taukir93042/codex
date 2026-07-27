import React, { useState } from "react";
import Sidebar from "../../components/educator/Sidebar";
import Header from "../../components/educator/Header";
import Footer from "../../components/educator/Footer";
import { FiEdit, FiTrash2, FiEye, FiMoreVertical } from "react-icons/fi";
import CourseTable from "../../components/educator/CourseTable";
import AddCourse from "../../components/educator/AddCourse";
import { FiPlus, FiArrowLeft } from "react-icons/fi";

const Courses = () => {
  const [showAddCourse, setShowAddCourse] = useState(false);
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        {/* main */}

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-6 hide-scrollbar ">
          {/* Heading */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                {showAddCourse ? <>Add New Courses</> : <>Courses</>}
              </h1>
              <p className="text-gray-500">Manage all your courses</p>
            </div>

            <button
              onClick={() => setShowAddCourse(!showAddCourse)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition-all duration-300
                 ${
                   showAddCourse
                 ? "bg-slate-800 hover:bg-slate-900"
                   : "bg-blue-600 hover:bg-blue-700"
                 }`}
            >
              {showAddCourse ? (
                <>
                  <FiArrowLeft size={18} />
                  Back to Courses
                </>
              ) : (
                <>
                  <FiPlus size={18} />
                  Add Course
                </>
              )}
            </button>
          </div>
          {showAddCourse ? <AddCourse /> : <CourseTable />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
