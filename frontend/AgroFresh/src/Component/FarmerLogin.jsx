import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FarmerLogin() {
  const navigate = useNavigate();
  const [logindata, setLoginData] = useState({ email: "", password: "" });
  const URL = "http://localhost:5000/farmer/login";

  const fetchData = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  };

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
        navigate("/farmerHome");
      } else {
        Swal.fire({
          title: "❌ Login Failed",
          text: serverResponse.data.message,
          icon: "error",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "❌ Error",
        text: "Something went wrong. Try again!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: 'Poppins', sans-serif;
        }
        .login-bg {
          background-image: url('/farmer4.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-card {
          background: rgba(0, 0, 0, 0.5);
          padding: 40px;
          border-radius: 20px;
          width: 350px;
          color: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .login-card:hover {
          transform: scale(1.03);
        }
        .login-card h2 {
          text-align: center;
          margin-bottom: 25px;
          font-size: 2rem;
        }
        .form-label {
          font-weight: 600;
        }
        .form-control {
          border-radius: 10px;
        }
        .btn-login {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-login:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }
        @media (max-width: 500px) {
          .login-card {
            width: 90%;
            padding: 30px;
          }
        }
      `}</style>

      <div className="login-bg">
        <div className="login-card">
          <h2>Farmer Login</h2>
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

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={fetchData}
                value={logindata.password}
                required
              />
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FarmerLogin;
