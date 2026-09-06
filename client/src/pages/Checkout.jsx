import React, { useContext, useState } from "react";
 
import { ArrowLeft, CheckCircle, Tag, ShieldCheck, X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/Appcontext";
import { enrollCourse } from "../api/enrollmentApi";

const Checkout = () => {

  const {id} = useParams();

  const {courses,storeUser, setShowSuccess,showSuccess} = useContext(CourseContext);
  const [popupMessage, setPopupMessage] = useState("");
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
 
  
// Get selected course
 const course = courses.find((item) => item._id === id);


const handleEnroll = async () => {
  try {
    const data = await enrollCourse(course._id);

    console.log("Enrollment:", data);

    if (data.success) {
           setIsAlreadyEnrolled(false);
      setPopupMessage(data.message || "Course enrolled successfully!");
      setShowSuccess(true);
    }
  } catch (error) {
    const data = error.response?.data;

    console.log("Enrollment error:", data);

    if (error.response?.status === 409) {
      setIsAlreadyEnrolled(true)
      setPopupMessage(
        data?.message || "You are already enrolled in this course"
      );
      setShowSuccess(true);
      return;
    }

    console.error("Enrollment error:", error);
  }
};

  return (
   <div className="min-h-screen bg-[#050816] text-white font-sans flex flex-col">
      <Header />
     
<div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

  {/* Header */}
  <div className="mb-8">
    <button className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
      <ArrowLeft size={18} />
      Back to Course
    </button>

    <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
      Checkout
    </h1>

    <p className="mt-2 text-slate-400">
      Complete your purchase and start learning.
    </p>
  </div>

  {/* Main Content */}
  <div className="grid gap-8 lg:grid-cols-3">

    {/* Left Content */}
    <div className="space-y-8 lg:col-span-2">

      {/* Course Details */}
      <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">
        <h2 className="text-2xl font-bold text-white">
          Course Details
        </h2>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row">

          <img
                  src={`http://localhost:5000/${course.thumbnail}`}
            alt="Course"
            className="h-36 w-full rounded-xl object-cover sm:h-32 sm:w-56"
          />

          <div className="flex-1">

            <span className="inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
              Development
            </span>

            <h3 className="mt-2 text-xl font-bold text-white">
              Node.js & Express
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Build scalable backend applications and REST APIs.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>
                Level: <span className="text-white">Intermediate</span>
              </span>

              <span>
                Duration: <span className="text-white">18 Hours</span>
              </span>

              <span>
                Instructor: <span className="text-white">Aman Verma</span>
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* Billing Information */}
      <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">

        <h2 className="text-2xl font-bold text-white">
          Billing Information
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Full Name
            </label>

            <input
              type="text"
              readOnly
              value={storeUser?.name || ""}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-[#050817] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email Address
            </label>

            <input
            readOnly
              type="email"
              value={storeUser?.email || ""}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-[#050817] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>

        </div>
      </section>


      {/* Payment Method */}
      <section className="rounded-2xl border border-white/10 bg-[#080d1d] p-6">

        <h2 className="text-2xl font-bold text-white">
          Payment Method
        </h2>

        <div className="mt-5 rounded-xl border border-indigo-500/40 bg-indigo-500/5 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10">
              <CheckCircle
                size={22}
                className="text-indigo-400"
              />
            </div>

            <div>
              <p className="font-semibold text-white">
                Online Payment
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Secure payment via Razorpay
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>


    {/* Right Order Summary */}
    <div>

      <div className="sticky top-24 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] shadow-xl">

        {/* Course Image */}
        <div className="relative">

          <img
                  src={`http://localhost:5000/${course.thumbnail}`}
            alt="Course"
            className="h-56 w-full object-cover"
          />

          <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
            Development
          </div>

        </div>


        <div className="p-6">

          <h2 className="text-xl font-bold text-white">
            Node.js & Express
          </h2>


          {/* Stats */}
          <div className="mt-4 space-y-3 text-sm">

            <div className="flex justify-between">
              <span className="text-slate-500">
                Level
              </span>

              <span className="font-medium text-white">
                Intermediate
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Duration
              </span>

              <span className="font-medium text-white">
                18 Hours
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">
                Instructor
              </span>

              <span className="font-medium text-white">
                Aman Verma
              </span>
            </div>

          </div>


          {/* Price */}
          <div className="mt-6 border-t border-white/10 pt-5">

            <p className="text-sm text-slate-500">
              Course Price
            </p>

            <p className="mt-1 text-3xl font-bold text-white">
              ₹1799
            </p>

          </div>


          {/* Coupon */}
          <div className="mt-6 border-t border-white/10 pt-5">

            <label className="mb-2 block text-sm text-slate-400">
              Coupon Code
            </label>

            

          </div>


          {/* Discount */}
          <div className="mt-5 flex justify-between text-sm">

            <span className="text-slate-500">
              Discount
            </span>

            <span className="text-white">
              ₹0
            </span>

          </div>


          {/* Total */}
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

            <span className="text-lg font-semibold text-white">
              Total
            </span>

            <span className="text-2xl font-bold text-white">
              ₹1799
            </span>

          </div>


          {/* Payment Button */}
          <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:opacity-90" onClick={handleEnroll}>
            Enrolled Course →
          </button>


          {/* Security */}
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">

            <ShieldCheck size={17} />

            Secure & encrypted payment

          </div>

        </div>
      </div>

    </div>

  </div>
</div>
 
{showSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#080d1d] p-7 text-center shadow-2xl">

      {/* Close */}
      <button
        onClick={() => setShowSuccess(false)}
        className="absolute right-4 top-4 text-slate-500 transition hover:text-white"
      >
        <X size={20} />
      </button>

      {/* Success Icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
        <CheckCircle
          size={36}
          className="text-green-400"
        />
      </div>

     {/* Title */}
<h2 className="mt-5 text-2xl font-bold text-white">
  {isAlreadyEnrolled
    ? "Already Enrolled"
    : "Course Enrolled Successfully!"}
</h2>

{/* Message */}
<p className="mt-3 text-sm leading-6 text-slate-400">
  {isAlreadyEnrolled ? (
    <>
      You are already enrolled in{" "}
      <span className="font-semibold text-white">
        {course.title}
      </span>
      .
    </>
  ) : (
    <>
      You have successfully enrolled in{" "}
      <span className="font-semibold text-white">
        {course.title}
      </span>
      .
    </>
  )}
</p>

      {/* Button */}
      <button
        onClick={() => setShowSuccess(false)}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:opacity-90"
      >
        Continue Learning →
      </button>

    </div>

  </div>
)}
      <Footer/>
    </div>
  );
};

export default Checkout;