import React, { useState } from "react";
import { FiBookOpen, FiUploadCloud, FiImage, FiLink2 } from "react-icons/fi";
import { createCourse } from "../../api/courseApi";
import { toast } from "react-toastify";
const AddCourse = () => {
  const [loding, setLoding] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    instructor: "",
    duration: "",
    price: "",
    videoUrl: "",
  });

  const handelInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try{
       setLoding(true);

       const data = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("thumbnail", thumbnail);

    const res = await createCourse(data);


    if(res.data.success){
      toast.success(res.data.message);
        // Reset Form
      setFormData({
        title: "",
        description: "",
        category: "",
        level: "",
        instructor: "",
        duration: "",
        price: "",
        videoUrl: "",
      });

      setPreview("");
      setThumbnail(null)

    }
    }
    catch(error){
toast.error(error.response?.data?.message || "Something went wrong");
    }
     finally {
    setLoding(false);
  }
  };

  const handelThumbnail = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnail(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FiBookOpen size={20} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800">
              Course Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Fill in the details to create a new course.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        <form
          onSubmit={handelSubmit}
          className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2"
        >
          {/* Course Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Course Title <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handelInput}
              placeholder="Enter course title"
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handelInput}
                placeholder="Enter course description"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500"
              />

              <span className="absolute bottom-3 right-4 text-xs text-slate-400">
                0/1000
              </span>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Category <span className="text-red-500">*</span>
            </label>

            <select
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
              name="category"
              value={formData.category}
              onChange={handelInput}
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Backend">Backend</option>
              <option value="Programming">Programming</option>
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Level <span className="text-red-500">*</span>
            </label>

            <select
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
              name="level"
              value={formData.level}
              onChange={handelInput}
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Instructor */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Instructor <span className="text-red-500">*</span>
            </label>

            <input
              name="instructor"
              value={formData.instructor}
              onChange={handelInput}
              type="text"
              placeholder="Enter instructor name"
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Duration <span className="text-red-500">*</span>
            </label>

            <input
              name="duration"
              value={formData.duration}
              onChange={handelInput}
              type="text"
              placeholder="e.g. 5 hours"
              className="h-12 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Price <span className="text-red-500">*</span>
            </label>

            <div className="flex h-12 overflow-hidden rounded-xl border border-slate-300">
              <div className="flex w-14 items-center justify-center border-r bg-slate-50 font-semibold">
                ₹
              </div>

              <input
                name="price"
                value={formData.price}
                onChange={handelInput}
                type="number"
                placeholder="Enter price"
                className="flex-1 px-4 outline-none"
              />
            </div>
          </div>

          {/* Preview Video */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Preview Video URL <span className="text-red-500">*</span>
            </label>

            <div className="flex h-12 overflow-hidden rounded-xl border border-slate-300">
              <div className="flex w-14 items-center justify-center border-r bg-slate-50">
                <FiLink2 />
              </div>

              <input
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handelInput}
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                className="flex-1 px-4 outline-none"
              />
            </div>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Course Thumbnail <span className="text-red-500">*</span>
            </label>

            <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-blue-500">
              <FiUploadCloud className="text-4xl text-slate-400" />

              <h4 className="mt-4 font-medium">Click to upload thumbnail</h4>

              <p className="mt-1 text-sm text-slate-500">
                JPG, PNG or WEBP (Max. 2MB)
              </p>

              <input type="file" className="hidden" onChange={handelThumbnail} />
            </label>
          </div>

          {/* Preview */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Preview
            </label>

           <div className="flex h-40 overflow-hidden rounded-2xl border border-slate-300 bg-slate-50">
  {preview ? (
    <img
      src={preview}
      alt="Preview"
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <FiImage className="text-6xl text-slate-300" />
    </div>
  )}
</div>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 border-t border-gray-300"
          >
             {loding ? "Creating..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
