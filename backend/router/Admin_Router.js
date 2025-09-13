import express from "express";
import {allContacts ,allFeedback, adminLogin,profile} from '../controller/Admin_Controller.js'

const adminRouter=express.Router()

adminRouter.get("/allContacts",allContacts)
adminRouter.get("/allFeedback",allFeedback)
adminRouter.post("/adminLogin",adminLogin)
adminRouter.get("/adminProfile",profile)

export default adminRouter