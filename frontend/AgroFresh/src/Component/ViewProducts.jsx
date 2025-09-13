import React from "react"
import { useState,useEffect } from "react"
import axios from 'axios'
import '../../src/css/viewproduct.css'

const viewProducts = () => {

    const URL="http://localhost:5000/viewproducts"
    
    const [product,setProduct]=useState([])

    const fetchData=async()=>{
      
try{
    
const serverResponse= await axios.get(URL)
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
   <h1 style={{textAlign:"center"}}>View Product</h1>
   <div className='flex-container'>
  {
    product.map((p)=>{
return(

<div  className='item-div' key={p._id}>
    <img src={`http://localhost:5000/profilePics/${p.productPic}`} alt="" />

    <h5>Product Name:{p.productName}</h5>
    <h5>Product Category:{p.productCategory}</h5>
    <h5>Seller Name:{p.farmer.name}</h5>
    <h5>Seller Phone:{p.farmer.phone}</h5>
    <h5>Seller City:{p.farmer.city}</h5>

    <a href={`https://wa.me/+91${p.farmer.phone}?xtext=}`} style={{color:"green"}}><i className='fa-brands fa-whatsapp' style={{marginRight:"5px",color:"green"}}></i> Contact Now</a>

</div>
)
    })
  }
   </div>
   </>
  )
}

export default viewProducts
