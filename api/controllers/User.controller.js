import User from "../Models/User.model.js"
import bcryptjs from "bcryptjs"
import  jwt  from "jsonwebtoken"
import sharp from "sharp"
import generateTokenAndSerCookies from "../Utils/JWTgenerator.js"



export const login = async(req,res,next)=>{
        const {email,password} =req.body
        try {
            const user =await User.findOne({email})
            if(!user){
                return next(ErrorHandler(404,"User not found"))
            }
            const validPassword = bcryptjs.compareSync(password,user.password)
            if(!validPassword){
                return next(ErrorHandler(400,"Invalid credentials"))
            }
            const mytoken = generateTokenAndSerCookies(user._id,res)
            res.cookie("token",mytoken,{httpOnly:true})
            res.status(200).json({user,message:"user logged in successfully"})
                }
        catch (error) {
            next(error);
        }
        
        }
export const logout = async(req,res,next)=>{
            try {
                res.clearCookie("token")
                res.status(200).json({message:"user logged out successfully"})
                
            } catch (error) {
                next(error)
            }
        }
      
export const UpdateUser = async (req, res, next) => {
    try {
        const updateFields = {};

        if (req.body.full_name) {
            updateFields.full_name = req.body.full_name;
        }

        if (req.body.email) {
            updateFields.email = req.body.email;
        }

        if (req.body.password) {
            const hashedPassword = await bcryptjs.hash(req.body.password, 10);
            updateFields.password = hashedPassword;
        }

        if (req.body.profile_pic) {
            const buffer = Buffer.from(req.body.profile_pic, 'base64');
            const compressedProfilePic = await sharp(buffer)//using the sharp library to compress the image and resize it based on the desire 
                .resize(200, 200) // Resize to 200x200 pixels
                .jpeg({ quality: 80 }) // Compress to 80% quality
                .toBuffer();

            updateFields.profile_pic = compressedProfilePic.toString('base64');
        }

        const updateStatus = await User.findOneAndUpdate(
            { email: req.body.email },
            { $set: updateFields },
            { new: true }
        );

        if (!updateStatus) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully"});
    } catch (error) {
        next(error);
    }
};


export const createUser = async (req,res) => {
    try {
        const {full_name,email,password} = req.body
        const pdp = `https://avatar.iran.liara.run/public/boy?username=${full_name}`
        const findUser = await User.findOne({email})
        if(findUser){
            return res.status(400).json({error:"User already exists"})
        }
        const hashedPassword = await bcryptjs.hash(password,10)
        const newUser = new User({full_name,email,password:hashedPassword,profile_pic:pdp,role:"user"})
        await newUser.save()
        generateTokenAndSerCookies(newUser._id,res)
        res.status(201).json({message:"User created successfully",thistoken:generateTokenAndSerCookies(newUser._id,res)})
    } catch (error) {
        console.log("error in createUser Function",error)
        res.status(500).json({error:"Internal server error"})
    }
}