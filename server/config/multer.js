import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination :  function(req,file,cb){
        cb(null, "uploads/courses");
  },
   filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },

    
})


const fileFilter = (req, file, cb) =>{
   const allowedTypes = /jpeg|jpg|png|webp/;
     const extname = allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed."));
    }


}

// Multer Upload
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
});

export default upload;