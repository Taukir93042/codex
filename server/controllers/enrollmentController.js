import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";

export const enrollCourse = async(req,res)=>{

  try{
  const {courseId} = req.body;
  const userId = req.user._id;


  if(!courseId){
    return res.status(400).json({
      success: false,
        message: "Course ID is required",
    })
  }

  //check course

  const course = await Course.findById(courseId);

  if(!course){
    return res.status(404).json({
      success : false,
      message: "Course not found",
       
    })
  }


     // Already enrolled?
  const existingEnrollment = await Enrollment.findOne({
     user: userId,
    course: courseId,
  })

  if(existingEnrollment){
    return res.status(409).json({
      success:false,
      message: "You are already enrolled in this course",
    })
  }


  const enrollment = await Enrollment.create({
    user:userId,
    course:courseId,
    amount: course.price,
  })

  return res.status(201).json({
     success: true,
      message: "Course enrolled successfully",
      enrollment,
  })
    }
    catch(error){
            console.error("Enroll course error:", error);
              return res.status(500).json({
             success: false,
              message: "Failed to enroll in course",
            });
    }

}