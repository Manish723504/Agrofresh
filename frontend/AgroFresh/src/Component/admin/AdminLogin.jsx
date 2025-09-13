import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const AdminLogin = () => {

    const navigate = useNavigate()

    const [logindata, setLoginData] = useState({ email: "", password: "" })

    const URL = "http://localhost:5000/admin/adminLogin"


    function fetchData(e) {

        setLoginData({ ...logindata, [e.target.name]: e.target.value })


    }
    const submitData = async (e) => {

        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, logindata)
            console.log(serverResponse);

            const msg = serverResponse.data.status

            if (msg === "success") {
                
                localStorage.setItem("emailKey", serverResponse.data.token)

                 Swal.fire({
                
                                title: "👍Login SuccesFull👍",
                                text: serverResponse.data.message,
                                icon: "success"
                
                            });

                navigate("/adminHome")
            }
            else
                Swal.fire({
                
                                title: "👍Wrong Password👍",
                                text: serverResponse.data.message,
                                icon: "error"
                
                            });

        }
        catch (err) {

            console.log();

        }
    }


    return (
        <>

            <div style={{ backgroundImage: "url('/farmer4.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", margin: "0", padding: "0", height: "100vh", alignItems: "center", display: "flex" }}>
                <div style={{ width: "30%", height: "390px", backgroundColor: " rgba(0, 0, 0, 0.3)", marginLeft: "33%", padding: "50px", borderRadius: "20px", color: "white" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "25px" }}>Login</h2>

                    <form onSubmit={submitData}>


                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="email"
                                onChange={fetchData}
                                value={logindata.email} />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                name="password"
                                onChange={fetchData}
                                value={logindata.password} />

                        </div>

                        <button className="btn btn-success">Login</button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default AdminLogin