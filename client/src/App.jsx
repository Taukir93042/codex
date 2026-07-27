import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
 
import CourseCard from './components/CourseCard'
import CoursesList from './pages/CoursesList'
import CourseDetails from './pages/CourseDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import InstructorAuth from './pages/InstructorAuth'
import Dashboard from './pages/educator/Dashboard'
import Courses from './pages/educator/Courses'
import CourseCategory from './pages/educator/CourseCategory'
import { ToastContainer } from 'react-toastify'
 
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/course-list" element={<CoursesList/>}/>
        <Route path="/course-details/:id" element={<CourseDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/instructor-auth' element={<InstructorAuth/>} />

        <Route path='/admin'>
          <Route path='' element={<Dashboard/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='course-category' element={<CourseCategory/>}/>
        </Route>
      </Routes>

      <ToastContainer
      position="top-right"
        autoClose={3000}
        theme="colored"
      />
     
    </div>
  )
}

export default App
