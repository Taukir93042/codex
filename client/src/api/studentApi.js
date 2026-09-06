import api from "./axios"

export const studentSignup  = (data)=>{
     return api.post("user/register",data)
}

export const studentSignin = (data)=>{
     return api.post("user/login",data)
}