import { createContext, useEffect, useState } from "react";
import { testimonials } from "../assets/assets";
import { getCourses } from "../api/courseApi";
import { LogIn } from "lucide-react";
import { getMyEnrollments } from "../api/enrollmentApi";
export const CourseContext = createContext();
export const API_URL = import.meta.env.VITE_API_URL;
const CourseProvider = ({ children }) => {
  const [authType, setAuthType] = useState("signup"); // "login" or "signup"
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storeUser, setStoreUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [enrolledCoursesLoading, setEnrolledCoursesLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }

    if (user && user !== "undefined") {
      try {
        setStoreUser(JSON.parse(user));
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        const courseList = Array.isArray(response?.data?.courses)
          ? response.data.courses
          : [];

        setCourses(courseList);
      } catch (error) {
        console.error("Error fetching courses from database:", error);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);


  const fetchEnrolledCourses = async () => {
  if (!isLoggedIn) {
    setEnrolledCourses([]);
    return;
  }

  try {
    setEnrolledCoursesLoading(true);

    const response = await getMyEnrollments();

    if (response?.success) {
      setEnrolledCourses(response.enrollments || []);

      console.log(
        "Context enrolled courses:",
        response.enrollments
      );
    } else {
      setEnrolledCourses([]);
    }

  } catch (error) {
    console.error(
      "Get enrolled courses error:",
      error
    );

    console.error(
      "Error response:",
      error?.response?.data
    );

    setEnrolledCourses([]);

  } finally {
    setEnrolledCoursesLoading(false);
  }
};

useEffect(() => {
  fetchEnrolledCourses();
}, [isLoggedIn]);
  

  const value = {
    courses,
    testimonials,

    setIsLoggedIn,
    isLoggedIn,
    showAuthModal,
    setShowAuthModal,
    authType,
    setAuthType,
    setStoreUser,
    storeUser,
    showSuccess,
    setShowSuccess,

    enrolledCourses,
    setEnrolledCourses,
    enrolledCoursesLoading,
  };
  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
export default CourseProvider;
