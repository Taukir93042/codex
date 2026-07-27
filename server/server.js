import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import courseCategoryRoutes from "./routes/courseCategoryRoutes.js";

import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// 👇 Ye line add karo
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/",(req,res)=>{
    res.send("server is runing")
})

app.use("/api/user",userRoutes);
app.use("/api/courses", courseRoutes);
 app.use("/api/course-categories",courseCategoryRoutes)


 const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`);
})