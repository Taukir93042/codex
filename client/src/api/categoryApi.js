import api from "./axios"

export const getCategories = ()=>api.get("/course-categories");

export const createCategories = (data) => api.post("/course-categories",data);

export const deleteCategory = (id)=>{
  return api.delete(`/course-categories/${id}`);
}