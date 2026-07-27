import api from "./axios";

export const createCourse = (data) => {
  return api.post("/courses", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCourses = () => {
  return api.get("/courses");
};

export const deleteCourse =(id)=>{
  return api.delete(`/courses/${id}`)
}