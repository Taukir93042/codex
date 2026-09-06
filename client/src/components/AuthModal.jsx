import React, { useState, useContext } from "react";
import { CourseContext } from "../context/Appcontext";
import { toast } from "react-toastify";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  X,
  GraduationCap,
  Briefcase,
  AlertCircle,
  CheckCircle2,
  User,
  ShieldCheck,
} from "lucide-react";
import { studentSignin, studentSignup } from "../api/studentApi";

const AuthModal = () => {

  const {authType,setAuthType,showAuthModal,setShowAuthModal, setIsLoggedIn,setStoreUser} = useContext(CourseContext)

   const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })
 
if (!showAuthModal) return null;
  // Live password strength indicator

 

  const handelChange = (e)=>{
   const { name, value } = e.target;

    setFormData((prev)=>(
      {...prev,[name]:value}
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try{
      let response;
      if(authType === "signup"){
        response = await studentSignup(formData)
      }
      else{
        response = await studentSignin({
          email:formData.email,
          password:formData.password,
        })
      }
      console.log(response);
      if(response.data.success){
           toast.success(response.data.message);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user",JSON.stringify(response.data.user));


        setStoreUser(response.data.user)
        setShowAuthModal(false)
         setIsLoggedIn(true)
      }
      
    }
    catch(error){
   console.log(error.response?.data || error.message);
  
    }
    
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-md bg-[#0b1129] border border-slate-800/80 rounded-3xl p-8 relative shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Close Button */}
        <button className="absolute top-5 right-5 text-slate-400 hover:text-white transition duration-200 p-1 hover:bg-slate-800/60 rounded-lg cursor-pointer" onClick={()=>setShowAuthModal(false)}>
          <X className="w-5 h-5"  />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {authType === "signup" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-slate-400 text-xs mt-1.5 font-medium">
            {authType === "signup"
              ? "Join CodeCampus and build your software engineering career."
              : "Please sign in to access your purchased courses."}
          </p>
        </div>

        <form className="space-y-4 overflow-y-auto hide-scrollbar flex-grow pr-1" onSubmit={handleSubmit}>
          {/* Name Field (Signup Only) */}
          {authType === "signup" && (
            <div>
              <label
                className="block text-xs font-semibold text-slate-300 mb-1.5"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  name="name"
                  placeholder="John Doe"
                  onChange={handelChange}
                  className="w-full bg-slate-900 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label
              className="block text-xs font-semibold text-slate-300 mb-1.5"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="john@example.com"
               onChange={handelChange}
                className="w-full bg-slate-900 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              className="block text-xs font-semibold text-slate-300 mb-1.5"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                <Lock className="w-4 h-4" />
              </span>
              <input
              type="password"
                placeholder="enter strong password"
                name="password"
                onChange={handelChange}
                value={formData.password}
                className="w-full bg-slate-900 border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition"
              ></button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold text-sm transition shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-6"
          >
            submit
          </button>
        </form>

        {/* Modal Switch Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
          {authType === "signup" ? (
            <p>
              Already have an account?{" "}
              <button className="font-bold text-blue-400 hover:text-blue-300 transition cursor-pointer" onClick={()=>setAuthType("signin")}>
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account yet?{" "}
              <button className="font-bold text-blue-400 hover:text-blue-300 transition cursor-pointer" onClick={()=>setAuthType("signup")}>
                Sign Up Free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
