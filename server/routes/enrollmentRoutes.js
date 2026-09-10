
import express from "express";
import { enrollCourse, getMyEnrollments } from "../controllers/enrollmentController.js";
import authMiddleware from "../middleware/authMiddleware.js";
 
const router = express.Router();
router.post("/", authMiddleware, enrollCourse);

router.get("/my-courses",authMiddleware,getMyEnrollments)

export default router;