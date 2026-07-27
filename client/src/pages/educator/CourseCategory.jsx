import React, { useEffect } from "react";
import Header from "../../components/educator/Header";
import Sidebar from "../../components/educator/Sidebar";
import Footer from "../../components/educator/Footer";
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";
import { getCategories } from "../../api/categoryApi";
import { useState } from "react";
const CourseCategory = () => {
  const [categories, setCategories] = useState([]);
  const fetcCategories =async ()=>{
    try{
        const res = await getCategories();
      console.log(res.data.categories);
      

        if(res.data.success){
          setCategories(res.data.categories)
        }
         console.log(categories);
         
     }
    catch(error){

    }
  }
  useEffect(()=>{
    fetcCategories();
    
  },[])
  
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-100 p-8">
          {/* Heading */}

          <div className="mb-4">
            <h1 className="text-3xl font-bold text-slate-900">
              Course Categories
            </h1>

            <p className="mt-2 text-slate-500">
              Add new category and manage existing categories.
            </p>
          </div>

          {/* Add Category */}

          <div className="mb-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-3">
              <h2 className="text-2xl font-semibold">Add New Category</h2>
            </div>

            <div className="flex flex-col gap-5 p-4 lg:flex-row">
              <input
                type="text"
                placeholder="Enter category name"
                className="h-12 flex-1 rounded-xl border border-slate-300 px-5 outline-none focus:border-blue-500"
              />

              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 font-medium text-white transition hover:bg-blue-700">
                <FiPlus size={18} />
                Add Category
              </button>
            </div>
          </div>

          {/* Category List */}

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}

            <div className="flex flex-col gap-5 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-2xl font-semibold">Category List</h2>

              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search categories..."
                  className="h-12 w-80 rounded-xl border border-slate-300 pl-11 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Table */}

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b bg-slate-50">
                  <tr className="text-left text-xs font-semibold uppercase tracking-widest text-slate-500">
                    <th className="px-8 py-5">S.No</th>

                    <th className="px-6 py-5">Category Name</th>

                  

                    <th className="px-6 py-5">Status</th>

                    <th className="px-6 py-5 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {categories.map((category,index) => (
                    <tr
                      key={category._id}
                      className="border-b last:border-0 hover:bg-slate-50"
                    >
                      <td className="px-8 py-3 font-medium">
        {index + 1}
      </td>

                      <td className="px-6 py-5 font-medium text-slate-800">
                        {category.categoryName}
                      </td>

                    

                      <td className="px-6 py-3">
                       <td className="px-6 py-3">
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      category.status
        ? "bg-emerald-100 text-emerald-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {category.status ? "Active" : "Inactive"}
  </span>
</td>
                      </td>

                      <td className="px-6 py-3">
                        <div className="flex justify-center gap-3">
                          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                            <FiEdit2 />
                          </button>

                          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}

            <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 p-6 md:flex-row">
              <p className="text-sm text-slate-500">
                Showing 1 to 10 of 12 entries
              </p>

              <div className="flex gap-2">
                <button className="h-10 w-10 rounded-lg border hover:bg-slate-100">
                  ←
                </button>

                <button className="h-10 w-10 rounded-lg bg-blue-600 text-white">
                  1
                </button>

                <button className="h-10 w-10 rounded-lg border hover:bg-slate-100">
                  2
                </button>

                <button className="h-10 w-10 rounded-lg border hover:bg-slate-100">
                  →
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CourseCategory;
