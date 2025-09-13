import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema(

    {

        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true, length: 13 },
        message: { type: String, required: true, length: 40 },
        date: { type: Date, default: Date.now() }

    }

)
const ContactModel = mongoose.model("contacts", ContactSchema)

export default ContactModel
