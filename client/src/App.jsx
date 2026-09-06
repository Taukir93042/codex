import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import CourseCard from "./components/CourseCard";
import CoursesList from "./pages/CoursesList";
import CourseDetails from "./pages/CourseDetails";
import InstructorAuth from "./pages/InstructorAuth";
import Dashboard from "./pages/educator/Dashboard";
import Courses from "./pages/educator/Courses";
import CourseCategory from "./pages/educator/CourseCategory";
import { ToastContainer } from "react-toastify";
import AuthModal from "./components/AuthModal";

import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

const App = () => {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/checkout/:id" element={<Checkout/>} />
        <Route path="/instructor-auth" element={<InstructorAuth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/admin">
          <Route
            path=""
            element={
              <ProtectedRoute>
                {" "}
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="courses"
            element={
              <ProtectedRoute>
                {" "}
                <Courses />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="course-category"
            element={
              <ProtectedRoute>
                <CourseCategory />{" "}
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <AuthModal />

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
};

export default App;
