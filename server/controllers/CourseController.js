import Course from "../models/Course.js";

export const createCourse = async (req,res)=>{
    try{
          const {
     title,
      description,
      videoUrl,
      price,
      category,
      level,
      instructor,
      duration,
      isPublished,
          } = req.body;

          if(!title || !description || !videoUrl || !price || !category || !level || !instructor || !duration ){
            return res.status(400).json({
              success:false,
              message:"All field is required",
            })
          }
              // Check thumbnail upload
           if(!req.file){
            return res.status(400).json({
        success: false,
        message: "Course thumbnail is required",
      });
           }
        const thumbnail = req.file.path.replace(/\\/g, "/");

          //Course created

          const course = await Course.create({
            title, 
            description,
            thumbnail,
           videoUrl,
      price,
      category,
      level,
      instructor,
      duration,
  
          });

      return res.status(201).json({
        success:true,
        message:"course created successfully",

      })
    }
    catch(error){
         return res.status(500).json({
          success:false,
          message:"Internal server Error",
          error,
        })
    }
}


export const getAllCourses = async(req,res)=>{

  try{
        const courses = await Course.find();

      return res.status(200).json({
        success:true,
        message:"Courses fetched successfully",
        courses,
      })
  }
  catch(error){
    return res.status(400).jason({
      success:false,
      message:"Internal server Error",
      error,
    })
  }
      
}
export const getCourseById = async (req,res)=>{
  try{
      const { id } = req.params;
      console.log(id)
     const course = await Course.findById(id);
     console.log(course)
     if(!course){
      return res.status.json({
        success:false,
        message:"Not course found"
      })
     }
     return res.status(200).json({
      success:true,
      message:"get by id",
      course,
     })
  }
  catch(error){
   return res.status(404).json({
    success:false,
      message:"Enternal server Error",
      error,
   })
  }
}


export const deleteCourse = async(req,res)=>{

  try{
 const {id} = req.params;

     const course = await Course.findById(id);
     if(!course){
      return res.status(400).json({
        success:false,
        message : "course not found",

      })
     }
     await  Course.findByIdAndDelete(id);

     return res.status(200).json({
      success:true,
      message:"course delete successfully",

     })

  }
  catch(error){
     return res.status(400).json({
      success:false,
      message:"Internal server error",

     })
  }
    
}