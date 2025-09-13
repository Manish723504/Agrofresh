import React, { useState } from "react";
import axios from "axios";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import FarmerHeader from "./FamerHeader";

function FarmerEditProfile() {
  const storedData = JSON.parse(localStorage.getItem("farmer"));
  const URL = "http://localhost:5000/farmer/editProfile";
  const navigate = useNavigate();

  const [oldData, setOldData] = useState({
    name: storedData.name,
    city: storedData.city,
    address: storedData.address,
    phone: storedData.phone,
  });

  const emailId = localStorage.getItem("emailKey");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const params = { email: emailId };
      const response = await axios.put(URL, oldData, { params });
      if (response.data.updatestatus.acknowledged) {
        alert("Profile updated successfully");
        navigate("/farmerhome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (e) => {
    setOldData({ ...oldData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FarmerHeader />
      <br />
      <div className="container py-5" style={{ fontFamily: "Poppins, sans-serif" }}>
        <h1 className="text-center mb-4 fw-bold text-success">
          Edit Your Profile
        </h1>

        <div
          className="card border-0 shadow-lg mx-auto p-4"
          style={{
            maxWidth: "550px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #f9f9f9, #f0f7f4)",
          }}
        >
          <form onSubmit={submitData}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={oldData.name}
                onChange={getData}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">City</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="city"
                value={oldData.city}
                onChange={getData}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Address</label>
              <textarea
                className="form-control form-control-lg"
                rows={3}
                name="address"
                value={oldData.address}
                onChange={getData}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                name="phone"
                value={oldData.phone}
                onChange={getData}
                required
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-success btn-lg shadow-sm"
                style={{
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FarmerEditProfile;
