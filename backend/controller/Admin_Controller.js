
import ContactModel from "../model/Contact_Model.js";
import FeedbackModel from "../model/Feedback_Model.js";
import AdminModel from "../model/Admin_Model.js"


// profile login code

export async function profile(request,response) 
{

    const email=request.query.email
    console.log(`email of User is ${email}`);
    try{

        const adminDoc=await AdminModel.findOne({email:email})
        response.json({"profileData":adminDoc})
    }
    catch(err){

        console.log(err);
        
    }
    
}

// admin login code

export async function adminLogin(request,response) 
{
    const loginData=request.body
    const {email,password}=loginData

    try{

      const adminDoc= await  AdminModel.findOne({email:email,password:password})
     
if (adminDoc!=null)
{

response.json({"message":"Login Successful","token":email,"status":"success"})
}
else{
response.json({"message":"Invalid Credential"})

}

    }
    catch(err){
        console.log(err);
        
    }

}

export async function allContacts(request,response)
{

    try{

     const contactDocs = await ContactModel.find()  //selevt from contact
     console.log(`all contact ${contactDocs}`);
     response.json({"contactDetails":contactDocs})
     
    }
    catch(err)
    {
        console.log(err);
    }
}


// feedback

export async function allFeedback(request,response)
 {
    try{

const feedbackDoc =await FeedbackModel.find()
console.log(`all feedback ${feedbackDoc}`);
response.json({"feedbackDetails":feedbackDoc})

    }
    catch(err)
    {
 console.log(err);
    }
}