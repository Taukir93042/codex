import React from 'react'
import { useState } from 'react';
import { FiEdit, FiTrash2, FiEye, FiMoreVertical } from "react-icons/fi";
import { toast } from "react-toastify";
 
import { useEffect } from 'react';
import { deleteCourse, getCourses } from '../../api/courseApi';
const CourseTable = () => {
  const [courseList, setCourseList] = useState([]);


  useEffect(()=>{
     console.log("useEffect called");
      fetchCourses();
      
  },[])
  const fetchCourses = async()=>{
      try{
        const res = await getCourses();
        console.log(res.data);
        setCourseList(res.data.courses)
      }
      catch(error){
      console.log(error);
      
      }
  }

  const handleClick = async (id)=>{
     const confirmDelete = window.confirm(
    "Are you sure you want to delete this course?"
  );

  if (!confirmDelete) return;
    try{
      console.log(id)
          const res = await deleteCourse(id);
          if(res.data.success){
               toast.success(res.data.message)
      fetchCourses();
          }
          else{
            toast.error(res.data.message)
          }
           

    }
    catch(error){
        toast.error(error.response?.data?.message || "Something went wrong");
      
    }   
  }
  return (
     <div className="overflow-x-auto rounded-[12px] bg-white shadow-sm border border-slate-200">
       
            <table className="min-w-[980px]">
              <thead className="bg-slate-50">
                <tr className="text-left text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  <th className="px-8 py-6">Image</th>
                  <th className="px-8 py-6">Title</th>
                  <th className="px-6 py-6">Category</th>
                  <th className="px-6 py-6">Instructor</th>
                  <th className="px-6 py-6">Level</th>
                  <th className="px-6 py-6">Duration</th>
                  <th className="px-6 py-6">Price</th>
                  <th className="px-6 py-6">Status</th>
                  <th className="px-6 py-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {courseList.map((course) => (
                  <tr
                    key={course._id}
                    className="border-b last:border-b-0 transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <img
                         src={`${import.meta.env.VITE_API_URL}/${course.thumbnail}`}
                        alt={course.title}
                        className="w-24 h-16 rounded-xl object-cover border border-slate-200"
                      />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-800">
                          {course.title}
                        </span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-5">
                      <p className="font-medium text-slate-700">
                        {course.category}
                      </p>
                      
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-800">
                          {course.instructor}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${course.levelClass}`}
                      >
                        {course.level}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-medium text-slate-700">
                      {course.duration}
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-semibold text-emerald-600">
                        {course.price}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${course.statusClass}`}
                      >
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-center gap-2">
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
                          title="View"
                        >
                          <FiEye size={18} />
                        </button>
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition hover:bg-sky-100"
                          title="Edit"
                        >
                          <FiEdit size={18} />
                        </button>
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 transition hover:bg-rose-100"
                          title="Delete"
                          onClick={()=>handleClick(course._id)}
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}

export default CourseTable
