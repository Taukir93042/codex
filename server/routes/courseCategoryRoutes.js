import express from "express";
import { courseCategory, getAllCategories } from "../controllers/courseCategory.js";

const router = express.Router();

router.post("/",courseCategory);
router.get("/",getAllCategories)

export default router;