import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,"title is required"],
    trim:true,

  },
   description:{
    type:String,
    required:[true,"description is required"],
    trim:true,
   },
   thumbnail:{
    type:String,
    required:[true,"Course thumbnail is required"],
     trim:true,
   },

   videoUrl:{
    type:String,
    required:[true,"Course Url is required"],
    trim:true,
   },

   price:{
    type:Number,
    required:[true,"price is required"],
    min:[0,"price not be negative"]
   },

  
    category:{
    type:String,
    required:[true,"Category is required"]
   },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    instructor:{
    type:String,
  required:[true,"Instructor is required"],
    },
    duration:{
      type:String,
      required:[true,"duration is required"],
    },
     isPublished: {
      type: Boolean,
      default: false,
    },



},
{
  timestamps:true,
}
)

const Course = mongoose.model("Course",courseSchema);
export default Course;