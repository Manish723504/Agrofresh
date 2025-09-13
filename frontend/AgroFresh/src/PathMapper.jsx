import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Contactus from "./Component/Contactus"
import Aboutus from "./Component/Aboutus"
import Feedback from "./Component/Feedback"
import AllContacts from "./Component/admin/AllContacts"
import AllFeedback from "./Component/admin/AllFeedback"
import FarmerRegistation from "./Component/FarmerRegistation"
import Header from "./Component/Header"
import AdminLogin from "./Component/admin/AdminLogin"
import FarmerLogin from "./Component/FarmerLogin"
import FarmerHome from "./Component/FarmerHome"
import AdminHome from "./Component/admin/AdminHome"
import Footer from "./Component/Footer"
import AddProduct from "./Component/AddProduct"
import ViewProducts from "./Component/ViewProducts"
import FarmerEditProfile from "./Component/FarmerEditProfile"
import FarmerProduct from "./Component/FarmerProduct"
// import OtpForm from "./Component/OtpForm"



function PathMapper() {
    return (
        <>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/contactus" element={<Contactus/>}></Route>
                    <Route path="/Aboutus" element={<Aboutus />}></Route>
                    <Route path="/Feedback" element={<Feedback/>}></Route>
                    <Route path="/allContact" element={<AllContacts/>}></Route>
                    <Route path="/allFeedback" element={<AllFeedback/>}></Route>
                    <Route path="/farmerRegistation" element={<FarmerRegistation/>}></Route>
                    <Route path="/header" element={<Header/>}></Route>
                    <Route path="/adminLogin" element={<AdminLogin/>}></Route>
                    <Route path="/farmerLogin" element={<FarmerLogin/>}></Route>
                    <Route path="/farmerHome" element={<FarmerHome/>}></Route>
                    <Route path="/adminHome" element={<AdminHome/>}></Route>
                    <Route path="/footer" element={<Footer/>}></Route>
                    <Route path="/addProduct" element={<AddProduct/>}></Route>
                    <Route path="/viewProducts" element={<ViewProducts/>}></Route>
                    <Route path="/farmereditprofile" element={< FarmerEditProfile/>}></Route>    
                    <Route path="/farmerProduct" element={<FarmerProduct/>}></Route>  
                    {/* <Route path="/otpForm" element={<OtpForm/>}></Route> */}
                
                
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default PathMapper