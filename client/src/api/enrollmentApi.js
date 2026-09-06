import api from "./axios"


// Enroll user in a course
export const  enrollCourse  = async (courseId)=>{
  const response = await api.post("/enrollments",{
    courseId
  });
  return response.data;
}