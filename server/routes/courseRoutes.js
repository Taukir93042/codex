import express from "express"
import { createCourse, deleteCourse, getAllCourses, getCourseById } from "../controllers/CourseController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/",upload.single("thumbnail"),createCourse);
router.get("/",getAllCourses);
router.get("/:id",upload.single("thumbnail"),getCourseById)
router.delete("/:id",deleteCourse)


export default router;