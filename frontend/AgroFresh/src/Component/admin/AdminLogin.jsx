import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const URL = "http://localhost:5000/admin/adminLogin";

  function fetchData(e) {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, logindata);
      console.log(serverResponse);

      const msg = serverResponse.data.status;

      if (msg === "success") {
        localStorage.setItem("emailKey", serverResponse.data.token);

        Swal.fire({
          title: "👍 Login Successful 👍",
          text: serverResponse.data.message,
          icon: "success",
        });

        navigate("/adminHome");
      } else {
        Swal.fire({
          title: "❌ Wrong Password ❌",
          text: serverResponse.data.message,
          icon: "error",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* ✅ Font Awesome icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <style>{`
        .password-wrapper {
          position: relative;
        }
        .toggle-eye {
          position: absolute;
          right: 12px;
          top: 70%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
          color: #aaa;
        }
        .form-control {
          padding-right: 40px; /* space for eye icon */
        }
      `}</style>

      <div
        style={{
          backgroundImage: "url('/farmer4.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0",
          padding: "0",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            margin: "0 auto",
            padding: "50px",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Login</h2>

          <form onSubmit={submitData}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={fetchData}
                value={logindata.email}
                required
              />
            </div>

            <div className="mb-3 password-wrapper">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                onChange={fetchData}
                value={logindata.password}
                required
              />
              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-eye`}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide Password" : "Show Password"}
              ></i>
            </div>

            <button className="btn btn-success" style={{ width: "100%" }}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
