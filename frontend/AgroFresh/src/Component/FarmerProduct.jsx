import React from "react"
import { useState,useEffect } from "react"
import axios from 'axios'
import '../../src/css/viewproduct.css'
import FarmerHeader from "./FamerHeader"

const FarmerProduct = () => {

    const URL="http://localhost:5000/farmer/farmerViewProduct"
    const farmerObj=JSON.parse(localStorage.getItem("farmer"))

    
    const [product,setProduct]=useState([])

    const fetchData=async()=>{
      
try{
    
    const params={farmerId:farmerObj._id}
const serverResponse= await axios.get(URL,{params})
console.log(serverResponse);

const serverData=serverResponse.data.objectData
console.log(serverData);

setProduct(serverData)

}
catch(error){
    console.log(error);
    
}
    }// fetch data closed
    useEffect(()=>{
        fetchData()
    },[])
  return (
   <>
   <FarmerHeader/>
   <h1>View Product</h1>
   <div class='flex-container'>
  {
    product.map((p)=>{
return(

<div  class='item-div' key={p._id}>
    <img src={`http://localhost:5000/profilePics/${p.productPic}`} alt="" />

    <h5>Product Name:{p.productName}</h5>
    <h5>Product Category:{p.productCategory}</h5>
    {/* <h5>Seller Name:{p.farmer.name}</h5>
    <h5>Seller Phone:{p.farmer.phone}</h5>
    <h5>Seller City:{p.farmer.city}</h5> */}

    {/* <a href={`https://wa.me/+91${p.farmer.phone}?xtext=}`} style={{color:"black"}}><i className='fas fa-whatsapp' style={{marginRight:"5px",color:"black"}}></i> Contact Now</a> */}

</div>
)
    })
  }
   </div>
   </>
  )
}

export default FarmerProduct
