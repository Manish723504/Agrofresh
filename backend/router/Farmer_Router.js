import express from 'express'
import { registation,farmerLogin, profile, addProduct, editProfile,farmerViewProduct } from '../controller/Farmer_Controller.js'
import {imageUpload} from "../middleware/ImageUpload_Middleware.js";
// import OtpForm from '../../frontend/AgroFresh/src/Component/OtpForm.jsx';



const farmerRouter=express.Router()

farmerRouter.post("/register", imageUpload,registation)//adding middle ware for image upload
farmerRouter.post("/login",farmerLogin);
farmerRouter.get ("/farmerProfile",profile)
farmerRouter.post ("/addproduct",imageUpload,addProduct)
farmerRouter.put("/editProfile",editProfile) 
farmerRouter.get("/farmerViewProduct",farmerViewProduct) 
// farmerRouter.post("/verify-otp", verifyOtp);


export default farmerRouter