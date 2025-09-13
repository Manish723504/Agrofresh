
import farmerModel from "../model/Farmer_Model.js"
import ProductModel from "../model/Product_Model.js";
// import nodemailer from "nodemailer";
// import bcrypt from "bcrypt"


// ----------Farmer edit function-------
export const editProfile = async (request, response) => {
   const newData = request.body
   const email = request.query.email
   try {
      const { name, phone, city, address } = newData
      const filterCondition = { email: email }

      const modifiedData = {
         $set:
         {
            name: name,
            phone: phone,
            city: city,
            address: address
         }
      }
      const status = await farmerModel.updateOne(filterCondition, modifiedData)
      console.log(`Status is ${status}`)
      response.json({ "updatestatus": status })

   }
   catch (error) {
      console.log("error")
   }
}

//.........................view Product.....................

export async function farmerViewProduct(request, response) {


   try {
      const id = request.query.farmerId
      console.log("farmer id is ", id);

      const productDoc = await ProductModel.find({ farmer: id })
      response.json({ "objectData": productDoc })

   }
   catch (err) {
      console.log(err);

   }
}

//......................AddProduct--------------------------------


export async function addProduct(request, response) {
   const productData = request.body
   const { farmer, productName, productCategory, productDescription, productPrice, productStatus, } = productData
   const productPic = request.file.filename
   console.log(`picname is ${productPic}`);


   try {

      const productDoc = ProductModel({ farmer, productName, productCategory, productDescription, productPrice, productPic, productStatus })

      await productDoc.save();


      response.json({ "Message": "Product added successfully" });
   }
   catch (error) {
      console.log(error);

   }

}

//.................farmer profile.......................

export async function profile(request, response) {

   const email = request.query.email
   console.log(`email of user is ${email}`);

   try {

      const farmerDoc = await farmerModel.findOne({ email: email })
      response.json({ "profileData": farmerDoc })

   }
   catch (err) {

      console.log(err);

   }

}


//  ....................Reqiestion Login......................

export async function registation(request, response) {


   const registationData = request.body

   const { email, password, name, phone, city, address } = registationData

   const pic = request.file.filename

   console.log(`picname is ${pic}`);

   try {

      const regDoc = new farmerModel({ email, password, name, phone, city, address, pic })
      await regDoc.save()

      response.json({ "message": "Regestration Done" })
   }
   catch (err) {

      console.log(err);


   }

}

//.......................farmer login......................

export async function farmerLogin(request, response) {


   const logindata = request.body
   const { email, password } = logindata

   try {

      const farmerDoc = await farmerModel.findOne({ email: email, password: password })

      if (farmerDoc != null) {

         // register();
         response.json({ "message": "Login Successful", "token": email, "status": "success" })

      }
      else {
         response.json({ "message": "Invalid Credential" })

      }

   }
   catch (err) {
      console.log(err);

   }
}

// otp generte

// const otp = Math.floor(100000 + Math.random() * 900000).toString();
// farmer.otp = otp;
// farmer.otpExpiry = Date.now() + 5 * 60 * 1000;
// // Save OTP in DB with expiry
// await farmer.save();


// // Email send

// const transporter = nodemailer.createTransport({
//    service: "gmail",
//    auth: { farmer: "yourEmail@gmail.com", pass: "yourAppPassword" },
// });

// await transporter.sendMail({
//    from: "yourEmail@gmail.com",
//    to: email,
//    subject: "Your OTP Code",
//    text: `Your OTP is: ${otp}`,
// });

// res.json({ success: true, message: "OTP sent to email" });

// };
// // ✅ Verify OTP
// export const verifyOtp = async (req, res) => {
//    const { email, otp } = req.body;

//    const farmer = await farmer.findOne({ email });

//    if (!farmer) return res.json({ success: false, message: "Farmer not found" });

//    if (farmer.otp === otp && farmer.otpExpiry > Date.now()) {
//       farmer.otp = null;
//       farmer.otpExpiry = null;
//       await farmer.save();
//       res.json({ success: true, message: "OTP verified!" });
//    } else {
//       res.json({ success: false, message: "Invalid or expired OTP" });
//    }
// };