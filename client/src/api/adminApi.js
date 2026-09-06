
import api from "./axios";
export const adminLogin = (data)=>{
  return api.post("/user/login",data)
}