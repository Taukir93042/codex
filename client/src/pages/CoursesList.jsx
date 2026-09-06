import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import { CourseContext } from '../context/Appcontext'

const CoursesList = () => {
  const {courses} = useContext(CourseContext)
 
  
  return (
    <div className="min-h-screen bg-[#030615] text-white">
      <Header />

       <main className="px-6 py-12 pt-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-6 text-center">
            <h1 className="text-4xl font-bold">
              Explore Our Courses
            </h1>

            <p className="mt-4 text-gray-400">
              Learn industry-ready skills with practical courses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              courses.map((course,index)=>(
                <CourseCard key={index} course={course}/>
              ))
            }
             
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CoursesList