import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
        {


                email: { type: String, required: true, unique: true },
                password: { type: String, required: true,  length: 45 },
                // otp:{type:String},
                // otpExpiry: {type:Date},
                name: { type: String, required: true,  length: 50 },
                phone: { type: String, required: true,  length: 13 },
                city: { type: String, required: true,  length: 50 },
                address: { type: String, required: true,  length: 100 },
                pic: { type: String, required: false, length: 250 },
                date: { type: Date, default: Date.now() }
            

        }
         
)

const farmerModel = mongoose.model("farmer", farmerSchema)
export default farmerModel