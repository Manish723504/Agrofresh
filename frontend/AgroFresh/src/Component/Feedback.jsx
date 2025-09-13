import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Footer from "./Footer";
import '../css/Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    remarks: ""
  });

  const URL = "http://localhost:5000/addFeedBack";

  function FetchData(e) {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  }

  async function submitData(e) {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, feedback);
      Swal.fire({
        title: "👍 Feedback Received!",
        text: serverResponse.data.message,
        icon: "success"
      });
      setFeedback({ name: "", email: "", rating: "", remarks: "" });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header />

      <div className="contact-container">
        <div className="contact-box">
          <form className="contact-form" onSubmit={submitData}>
            <h2>Feedback Form</h2>
            <p>Just write us a feedback</p>

            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={FetchData}
              value={feedback.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={FetchData}
              value={feedback.email}
              required
            />
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              onChange={FetchData}
              value={feedback.rating}
              required
            />
            <textarea
              name="remarks"
              placeholder="Write your message"
              rows="4"
              onChange={FetchData}
              value={feedback.remarks}
              required
            ></textarea>

            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className="text-center text-white"
        style={{
          backgroundImage: "url('/images/homepage.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px"
        }}
      >
        <h1 style={{ color: "green" }}>Need More Information?</h1>
        <button type="button" className="btn btn-success my-3">
          CONTACT US TODAY
        </button>
        <h3 className="text-dark">Or call us at: +91 7235040032</h3>
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
