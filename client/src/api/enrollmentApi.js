import api from "./axios"


// Enroll user in a course
export const  enrollCourse  = async (courseId)=>{
  const response = await api.post("/enrollments",{
    courseId
  });
  return response.data;
}


// Get logged-in user's enrolled courses
export const getMyEnrollments = async () => {
  const response = await api.get("/enrollments/my-courses");

  return response.data;
};