import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";


export const register = async(req,res)=>{
    try{
          const {name,email,password,role} = req.body;
          if(!name || !email || !password || !role){
            return res.status(400).json({
                 success: false,
                message: "Please fill all fields",
            })
          }

          const existingUser = await User.findOne({email})

          if(existingUser){
            return res.status(400).json({
                success: false,
                 message: "Email already exists",
            })
          }

          // Hash Password

              const hashedPassword = await bcrypt.hash(password,10);
         
              const user = new User({
                name,
                email,
                role,
                password: hashedPassword
              })

              const token = generateToken(user);

              await user.save();
              if(user){
                return res.status(201).json({
                   success:true,
                   message:"user created successfully",
                   token
                })
              }

    }
    catch(error){
        return  res.status(500).json({
          success:false,
          message:"user not reated"
        })
    } 
}


export const login = async(req,res)=>{
    try{
         const {email,password} = req.body;

         if(!email || !password){
          return res.status(400).json({
            success:false,
            message:"Please Enter email and password",
          })
         }
 
         const user = await User.findOne({email});
    
         if(!user){
          return res.status(400).json({
            success: false,
            message:"User not Exist",
          })
         }

         const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch){
              return res.status(400).json({
            success: false,
            message:"Wrong Password",
          })
         }

         const token = generateToken(user);

         return res.status(200).json({
           success: true,
            message:"Login Successfully",
            token,
         })

         
    } 
    catch(error){
         return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: error.message,
  });
    }

}
