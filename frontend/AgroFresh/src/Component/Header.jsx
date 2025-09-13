import { Link } from "react-router-dom"
import React from "react"
import '../css/header.css'

const Header = () => {

  return (

    <>
      <nav className="navbar navbar-expand-lg" >

        <div className="container-fluid" >
          <img src="/download.jpeg" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><h4>AgroFresh</h4></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">AboutUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">ContactUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FarmerRegistation">Farmer Registation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/farmerLogin">Farmer Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminLogin">Admin Login</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/viewProducts">View Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Header
