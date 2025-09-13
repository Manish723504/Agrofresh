import cors from 'cors';
import express, { request } from "express";
import commonRouter from './router/Common_Router.js';
import adminRouter from './router/Admin_Router.js';
import farmerRouter from './router/Farmer_Router.js';
import { dbConnect } from './database/dbinfo.js';



const serverApp=express()

const PORTNUMBER=5000
dbConnect()

serverApp.use(cors())
serverApp.use(express.json())
serverApp.use(express.static("public"))



serverApp.use("/",commonRouter)
serverApp.use("/admin",adminRouter)
serverApp.use("/farmer",farmerRouter)


serverApp.listen(PORTNUMBER,()=>{


    console.log(`Server Is Listing On http://localhost:${PORTNUMBER}`);
    
})
