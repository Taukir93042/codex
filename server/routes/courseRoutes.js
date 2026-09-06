import express from "express"
import { createCourse, deleteCourse, getAllCourses, getCourseById } from "../controllers/CourseController.js";


import upload from "../config/multer.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();


// Public Routes
router.get("/",getAllCourses);
router.get("/:id",
    getCourseById);


// private routes

router.post("/",
  
    authMiddleware,
    adminMiddleware,
    upload.single("thumbnail"),
    createCourse

);


router.delete("/:id",
    authMiddleware,
    adminMiddleware,
    deleteCourse
)


export default router;