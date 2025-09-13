import axios from "axios"
import { useEffect, useState } from "react"
import AllContacts from "./AllContacts"
import AllFeedback from "./AllFeedback"
import AdminViewProducts from "./AdminViewProducts"


function AdminHome()
{

    const URL ="http://localhost:5000/admin/adminProfile"

    const [profile,setProfile]=useState({name:"",email:"",password:"",phone:""})


const emailID= localStorage.getItem("emailKey")

const fetchData =async () => {
 
    
try{
const params ={"email":emailID}
 const serverResponse=await axios.get(URL,{params})
 console.log(serverResponse.data.profileData);
 setProfile(serverResponse.data.profileData)
 
}

catch(err){
    console.log(err);
    
}

}

useEffect(()=>
{

    fetchData()

},[])

    return(
        <>
        <AllContacts/>
        <AllFeedback/>
        <AdminViewProducts/>
        </>
    )
}
export default AdminHome