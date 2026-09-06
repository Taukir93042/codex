const adminMiddleware = (req,res,next)=>{
    if(!req.user || req.user.role !== "admin"){
         return res.status(403).json({
      success: false,
      message: "Only admin can access",
    });
    }
    next();
}

export default adminMiddleware;