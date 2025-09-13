import axios from "axios";
import { useState, useEffect } from "react";
import FarmerHeader from "./FamerHeader";
import { useNavigate } from "react-router-dom";

function FarmerHome() {
  const URL = "http://localhost:5000/farmer/farmerProfile";
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    pic: "",
  });

  const emailId = localStorage.getItem("emailKey");

  const fetchData = async () => {
    if (emailId === null) {
      navigate("/farmerlogin");
    } else {
      try {
        const params = { email: emailId };
        const serverResponse = await axios.get(URL, { params });
        console.log(serverResponse.data.profileData);

        localStorage.setItem(
          "farmer",
          JSON.stringify(serverResponse.data.profileData)
        );
        setProfile(serverResponse.data.profileData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <FarmerHeader />

      <div className="container d-flex justify-content-center mt-5">
        <div
          className="card shadow-lg p-4 text-center"
          style={{
            maxWidth: "400px",
            borderRadius: "20px",
            backgroundColor: "#7fa881ff",
          }}
        >
          <div className="card-body">
            <img
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              src={`http://localhost:5000/profilePics/${profile.pic}`}
              alt="Farmer Profile"
            />

            <h3 className="text-start">Name: {profile.name}</h3>
            <h3 className="text-start">City: {profile.city}</h3>
            <h3 className="text-start">Contact: {profile.phone}</h3>
            <h3 className="text-start">Address: {profile.address}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmerHome;
