

import { createContext } from 'react'
import { courses, testimonials } from '../assets/assets';



export const CourseContext = createContext();

const CourseProvider = ({children})=>{
  const value={
    courses,
    testimonials
  }
   return (
    <CourseContext.Provider value={value}>
{children}
    </CourseContext.Provider>
   )
}
export default CourseProvider;