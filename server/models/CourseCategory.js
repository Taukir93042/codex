import mongoose from "mongoose";

const courseCategory = new mongoose.Schema({
  categoryName:{
    type:String,
    require:true,
    trim : true,
    unique : true,
  },
   status: {
      type: Boolean,
      default: true,
    },
},
  {
    timestamps: true,
  }
)

const CourseCategory =   mongoose.model("CourseCategory",courseCategory);

export default CourseCategory;

