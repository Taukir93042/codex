import { createContext, useEffect, useState } from "react";
import { testimonials } from "../assets/assets";
import { getCourses } from "../api/courseApi";
import { LogIn } from "lucide-react";
export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [authType, setAuthType] = useState("signup"); // "login" or "signup"
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storeUser, setStoreUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  

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
  console.log(courses);
  

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
    setShowSuccess
  };
  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
export default CourseProvider;
