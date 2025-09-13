import React, { useEffect } from 'react'
import "@fontsource/poppins"
import { useState } from 'react'
import axios from "axios"
import FarmerHeader from './FamerHeader'


const AddProduct = () => {
   const farmer = JSON.parse(localStorage.getItem("farmer"));
    const farmerId = farmer._id;
  const [productData,setProductData]=useState({

    farmer:farmerId,
    productName:"",
    productCategory:"",
    productDescription:"",
    productPrice:"null",
    productStatus:"available",
    
  })
  const [pic,setPic]=useState(null)
  const [message, setMessage] = useState('');

   const fetchData=(e)=>{
   const {name,value,type,files}=e.target //destructuring
   
        if(type==="file"){
            console.log(files[0]);
            setPic(files[0])
            
        }
        else{
        setProductData({...productData,[name]:value})
    
}

   }
   const submitData= async(e)=>{
   e.preventDefault()
    const formData = new FormData();
    for (const key in productData)
        {
            formData.append(key,productData[key])
        }
        if(pic){
            formData.append("pic",pic);
        }
          
        for (let [key,value] of formData.entries()){
            console.log(`${key}:`,value);
            
        }
        const URL="http://localhost:5000/farmer/addproduct"
       
         try{
          const serverResponse=await axios.post(URL,formData)
          console.log(serverResponse.data.Message);
          alert(serverResponse.data.Message)
          setMessage(serverResponse.data.Message)
        
          

        }
        catch(error){
console.log(error);

        }

}
  return (
   <>
 

     <FarmerHeader/>
   <div  style={{width:"",fontFamily:"Poppins,sans-serif",marginTop:"50px",minHeight:"100vh",backgroundColor:"#fff",display:"flex",alignItems:"center",flexDirection:"column",padding:"50px",backgroundImage:"url('/agriculture(1).jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backdropFilter:"blur(2px)"}}>
    <form onSubmit={submitData}>
      
      <div  style={{width:"110%",maxWidth:"600px",height:"",borderRadius:"50px",marginTop:"10px",padding:"30px",backgroundColor:"black",border:"",outline:"",boxShadow:"0 10px 25px rgba(0,0,0,.15)"}}>
        <h1 style={{marginBottom:"20px",textAlign:"center",fontWeight:"bold",fontSize:"32px",color:"white"}}>Add Product</h1>
    
    <div className="mb-3">
  <label  htmlFor="Product Name" className="form-label" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Product Name</label>
  <input  type="text" className="form-control" id="product name" name='productName' value={productData.productName} onChange={fetchData} placeholder="Enter your product name" style={{padding:"10px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"10px"}}/>

</div>
 <div className="mb-3">
  <label htmlFor="Product category" className="form-label" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Product Category</label>
  
          <select
    name="productCategory"
    className="form-control"
    value={productData.productCategory}
    onChange={fetchData}
    required style={{padding:"10px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"10px"}}
  >
    <option value="">-- Select Category --</option>
    <option value="vegetables">Vegetables</option>
    <option value="fruits">Fruits</option>
    <option value="grains">Grains/Cereals</option>
  </select>

</div>
<div className="mb-3">
  <label htmlFor=" Product description" className="form-label" style={{color:"white",fontSize:"15px",fontWeight:"bold"}}>Product Description</label>
  <textarea  className="form-control" id=" product description" name='productDescription' value={productData.productDescription} onChange={fetchData} rows="3"style={{padding:"10px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"10px"}}></textarea>
</div>
 <div className="mb-3">
  <label htmlFor="Product Price " className="form-label" style={{color:"white" ,fontSize:"15px",fontWeight:"bold"}}>Product Price (₹)</label>
  <input  type="number" className="form-control" id="product price" name='productPrice' value={productData.productPrice} onChange={fetchData} placeholder="Enter your price" style={{padding:"10px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"10px"}}/>

</div>
<div className="mb-3">
  <label htmlFor="formFileMultiple" className="form-label" style={{color:"white" ,fontSize:"15px",fontWeight:"bold"}}>Product Pic</label>
  <input  className="form-control" type="file" id="formFileMultiple" name='pic' onChange={fetchData} multiple style={{padding:"10px",fontSize:"16px",border:"1px solid #ccc",borderRadius:"10px"}}/>
</div>
<div className="text-center mt-2">
   <button type="submit" className="btn btn-warning "  style={{padding:"",outline:"none",border:"none",height:"40px",width:"150px",borderRadius:"40px",fontWeight:"500",fontSize:"18px"}}>Submit</button>
   </div>
 
</div>

</form>

</div>
  
   </>
  )
}

export default AddProduct
