import { useState } from 'react';
import '../css/ContactUs.css'
import axios from "axios";
import Swal from 'sweetalert2'
import Footer from './Footer';
import Header from './Header';



const Contactus = () => {

    const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" })

    const URL = "http://localhost:5000/AddContact"

    function FetchData(e) {
      
        console.log(e);
        setContact({ ...contact, [e.target.name]: e.target.value })
        console.log(contact);
    }
    async function submitData(e) {
        e.preventDefault()
        try {
            const serverResponse = await axios.post(URL, contact)
            console.log(serverResponse);

            Swal.fire({
                title: "👍Contact Details👍",
                text: serverResponse.data.message,
                icon: "success"
            });
            setContact({ name: "", email: "", phone: "", message: "" })
        }
        catch (err)
         {
            console.log(err);
        }
    }


return(
    <>
    <Header/>
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Fill up the form and our team will get back to you within 24 hours</p>
          <p>📞 +91 7235040032</p>
          <p>📧 2001manishmishra@gmail.com</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitData}>
          <h2>Contact US</h2>
          <p>Any Question or remarks? Just write us a message</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={FetchData}
            value={contact.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={FetchData}
            value={contact.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
           onChange={FetchData}
           value={contact.phone}
          />
          <textarea
            name="message"
            placeholder="Write your message"
            rows="4"
           onChange={FetchData}
          value={contact.question}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  
  <Footer/>
    </>
)    
}

export default Contactus

