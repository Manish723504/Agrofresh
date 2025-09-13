import express from "express";
import { AddContact,AddFeedBack, viewProduct } from "../controller/Common_Controller.js";

const commonRouter=express.Router()

commonRouter.post("/addContact",AddContact)
commonRouter.post("/addFeedBack",AddFeedBack)
commonRouter.get("/viewproducts",viewProduct)


export default commonRouter