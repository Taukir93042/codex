import CourseCategory from "../models/CourseCategory.js";

export const courseCategory = async(req,res)=>{
      try{
           const {categoryName,status} = req.body;

           if(!categoryName || !status){
            return res.status(400).json({
              success:false,
                  message:"All field required",
            })
           }
           const existCategory = await CourseCategory.findOne({categoryName});

           if(existCategory){
               return res.status(400).json({
                success:"false",
                message:"Category All ready added"
               })
           }


        
           const category = await CourseCategory.create({
            categoryName,status,
           })
           await category.save();
           return res.status(200).json({
               success:true,
                  message:"Category Add Succesfully",
                  category,
           })
      }
      catch(error){
          return res.status(404).json({
                success:false,
                  message:"InternaL Server Eroor",
          })
      }
}

export const getAllCategories = async (req,res)=>{
    try{
          const categories = await CourseCategory.find();
         
               return res.status(200).json({
        success:true,
        message:"Categories fetched successfully",
        categories,
          })
          
    }
    catch(error){
      return res.status(404).json({
        success:false,
        message:"Internal server Error",
        
      })
    }
}