import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function FarmerRegistration() {
  const [regData, setRegData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    city: "",
    address: ""
  });

  const [pic, setPic] = useState(null);

  const fetchData = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setPic(files[0]);
    } else {
      setRegData({ ...regData, [name]: value });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in regData) {
      formData.append(key, regData[key]);
    }
    if (pic) {
      formData.append("pic", pic);
    }

    const URL = "http://localhost:5000/farmer/register";

    try {
      const serverResponse = await axios.post(URL, formData);
      alert(serverResponse.data.message);
      setRegData({
        email: "",
        password: "",
        name: "",
        phone: "",
        city: "",
        address: ""
      });
      setPic(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          backgroundImage: "url('/farmer4.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "3rem 1rem",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="container bg-white p-4 p-md-5 rounded shadow-lg" style={{ maxWidth: "850px", width: "100%" }}>
          {/* Heading */}
          <h2 className="text-center text-success mb-4"> Farmer Registration Form</h2>

          <form className="row g-3" onSubmit={submitData}>
            <div className="col-md-6 col-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                value={regData.email}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                name="password"
                value={regData.password}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter Name"
                name="name"
                value={regData.name}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="inputPhone" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="phone"
                pattern="^\d{10}$"
                maxLength="10"
                value={regData.phone}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-md-6 col-12">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Enter City"
                name="city"
                value={regData.city}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-md-6 col-12">
              <label className="form-label">Upload Picture</label>
              <input
                type="file"
                className="form-control"
                id="inputFile"
                name="file"
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Address"
                name="address"
                value={regData.address}
                onChange={fetchData}
                required
              />
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-success w-50">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FarmerRegistration;
