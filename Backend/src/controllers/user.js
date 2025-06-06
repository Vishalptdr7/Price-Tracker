import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User
 } from "../models/User.js";
 import verifyJWT from "../middlewares/auth.js";
 import jwt from "jsonwebtoken";
 import mongoose from "mongoose";
 import nodemailer from "nodemailer";
 import { TempUser } from "../models/tempUser.js";

 const generateAccessTokenAndRefreshToken = async (userId) => {
   try {
     const user = await User.findById(userId);
     const accessToken = user.generateAccessToken();
     const refreshToken = user.generateRefreshToken();

     user.refreshToken = refreshToken;
     await user.save({ validateBeforeSave: false });
     return { accessToken, refreshToken };
   } catch (error) {
     throw new ApiError(500, "User Not found!");
   }
 };




 const registerUser = asyncHandler(async (req, res) => {
   //   // res.status(200).json({
   //   //     message:"User registered successfully"
   //   // })
   //   ///get user details from frontend
   //   // validations if not empty
   //   //check if user is already registered ,using email,username
   //   //check for image,check for avatar
   //   //upload image
   const { email, mobileNo, password, fullname } = req.body;
   console.log(email, mobileNo, password, fullname);
   if (fullname === "") {
     throw new ApiError(400, "Full Name is required");
   }

   if (!email?.trim()) {
     throw new ApiError(400, "Email is required");
   }
  
   
   
  if (mobileNo === "") {
     throw new ApiError(400, "Mobile Number is required");
   }
   
   if (password === "") {
     throw new ApiError(400, "Password is required");
   }

   const exist = await User.findOne({
    email:email
   });
   if (exist) {
     throw new ApiError(400, "User already exists");
   }

   
   
   

   // Generate OTP
   const otpGenerator = () => {
     return Math.floor(100000 + Math.random() * 900000).toString();
   };

   const otp = otpGenerator();

   let mailTransporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASS,
     },
   });

   let mailDetails = {
     from: "patidarvishal233@gmail.com",
     to: `${email}`,
     subject: "Test mail",
     text: `Your OTP for verification is ${otp}.`,
     html: `<h1>Your OTP</h1><p>Your OTP for verification is <strong>${otp}</strong>.</p>`,
   };

   try {
     await mailTransporter.sendMail(mailDetails);
   } catch (err) {
     console.error("Email send error:", err); // Add this
     throw new ApiError(500, "Failed to send OTP email");
   }
  

   const tempUser = await TempUser.create({
     fullname,
     mobileNo,


     email,
     password,
     otp,
     otpExpiry: Date.now() + 10 * 60 * 1000,
   });

   return res
     .status(200)
     .json(
       new ApiResponse(
         200,
         { email: tempUser.email, otp },
         "OTP sent successfully. Please verify to complete registration"
       )
     );
 });




 const verifyOtpAndCreateUser = asyncHandler(async (req, res) => {
   const { email, otp } = req.body;

   const Tempuser = await TempUser.findOne({ email: email });
   if (!Tempuser) throw new ApiError(404, "User not found");

   if (Tempuser.otp !== otp) throw new ApiError(400, "Invalid OTP");
   if (Tempuser.otpExpiry < Date.now()) {
     await User.deleteOne({ email });
     throw new ApiError(400, "OTP expired. Please register again");
   }

   const user = await User.create({
     fullname: Tempuser.fullname,
     mobileNo:Tempuser.mobileNo,
     email: Tempuser.email,
     password: Tempuser.password,
   });

   await TempUser.deleteOne({ email });

   const createdUser = await User.findById(user._id).select(
     "-password -refreshToken"
   );

   if (!createdUser) {
     throw new ApiError(500, "Something went wrong during registration");
   }

   return res
     .status(201)
     .json(new ApiResponse(201, createdUser, "User created successfully"));
 });
  






 
const loginUser = asyncHandler(async (req, res) => {
  /// req body ->data
  //username or email
  //find user
  //compare password
  //generate token
  //send token

  const {  email, password } = req.body;
  console.log( email, password);
  if ( !email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({ email: email  });
  if (!user) {
    throw new ApiError(401, "User not found");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError("Invalid credentials", 401);
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);
  const loggedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  console.log(accessToken, refreshToken);
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, {
        user: loggedUser,
        refreshToken,
        accessToken,
        message: "Logged in successfully",
      })
    );
});





const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});






const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh Token is required");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken._id);
    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(401, "Refresh Token has expired");
    }
    const { accessToken, newrefreshToken } =
      await generateAccessTokenAndRefreshToken(user._id);
    console.log(newrefreshToken);
    const loggedUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newrefreshToken, options)
      .json(
        new ApiResponse(200, {
          user: loggedUser,
          refreshToken: newrefreshToken,
          accessToken,
          message: "Logged in successfully",
        })
      );
  } catch (error) {
    throw new ApiError(error, "Refresh Token has expired");
  }
});
  


const currentUser = asyncHandler(async (req, res) => {
    if (!req.user){
        return res.status(400).json({ message: "User not authenticated" });
    }
    
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User Find Successfully"));
});
  
  
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {refreshAccessToken,registerUser,verifyOtpAndCreateUser,loginUser,logoutUser,currentUser}