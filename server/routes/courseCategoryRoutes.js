import express from "express";
import { courseCategory, deleteCategory, getAllCategories } from "../controllers/courseCategory.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/",getAllCategories);
router.delete("/:id",deleteCategory);


router.post("/",
    authMiddleware,
    adminMiddleware,
    courseCategory
);

export default router;