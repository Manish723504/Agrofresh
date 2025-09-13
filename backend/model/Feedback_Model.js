import mongoose from "mongoose";


const FeedbackSchema = new mongoose.Schema(

    {

        name: { type: String, required: true },
        email: { type: String, required: true },
        rating: { type: String, required: true },
        remarks: { type: String, required: true },

    }

    
)
const FeedbackModel= mongoose.model("feedback",FeedbackSchema)
export default FeedbackModel 