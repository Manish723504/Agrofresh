import React from "react";
import { Link, useNavigate } from "react-router-dom";

function FarmerHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("emailKey");
    alert("Logout Successfully!");
    navigate("/farmerlogin");
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <nav
        className="navbar navbar-dark fixed-top shadow-sm"
        style={{
          background: "linear-gradient(90deg, #6a8dff, #899cff)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="navbar-brand mx-auto fw-bold" to="#">
            <i className="fas fa-user-circle me-2"></i> Farmer Portal
          </Link>
        </div>
      </nav>

      {/* 🔹 Sidebar */}
      <div
        className="offcanvas offcanvas-start text-white"
        style={{
          background: "linear-gradient(180deg, #6a8dff, #9bb3ff)",
          width: "250px",
          marginTop: "56px",
          borderTopRightRadius: "20px",
        }}
        tabIndex="-1"
        id="sidebarMenu"
      >
        <div className="offcanvas-header border-bottom">
          <div className="d-flex align-items-center">
            <i className="fas fa-user-circle fa-2x me-2"></i>
            <h5 className="offcanvas-title mb-0">Welcome, User!</h5>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body px-3">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="#">
                <i className="bi bi-house-door me-2"></i> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/farmereditprofile">
                <i className="fas fa-user-edit me-2"></i> Edit Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/Feedback">
                <i className="fas fa-comments me-2"></i> Feedback
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/farmerProduct">
                <i className="fas fa-box-open me-2"></i> View Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/addProduct">
                <i className="fas fa-plus-circle me-2"></i> Add Product
              </Link>
            </li>

            {/* 🔹 Compact Logout button */}
            <li className="nav-item mt-3">
              <button
                className="nav-link text-white fw-semibold bg-transparent border-0 d-flex align-items-center px-0"
                onClick={logout}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffe082")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                <i className="fas fa-sign-out-alt me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FarmerHeader;
