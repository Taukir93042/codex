import express from "express";
import { courseCategory, deleteCategory, getAllCategories } from "../controllers/courseCategory.js";

const router = express.Router();

router.post("/",courseCategory);
router.get("/",getAllCategories);
router.delete("/:id",deleteCategory);

export default router;