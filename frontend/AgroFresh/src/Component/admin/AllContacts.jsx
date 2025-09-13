import axios from 'axios';
import { useState, useEffect } from 'react';

function AllContacts() {
  const [contact, setContact] = useState([]);
  const URL = "http://localhost:5000/admin/allContacts";

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(URL);
      setContact(serverResponse.data.contactDetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* ✅ Inline CSS inside same file */}
      <style>{`
        .contacts-container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          font-family: "Poppins", sans-serif;
        }
        .contacts-heading {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.5rem;
          background: linear-gradient(90deg, #ff6ec4, #7873f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        .table-wrapper {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .contacts-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }
        .contacts-table th {
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          color: white;
          padding: 14px 16px;
          text-align: left;
          font-size: 16px;
        }
        .contacts-table td {
          padding: 14px 16px;
          color: #333;
          border-bottom: 1px solid #ddd;
          transition: background 0.3s;
        }
        .contacts-table tr:hover {
          background: #dce6ff;
        }
        .even-row {
          background-color: #f9f9ff;
        }
        .odd-row {
          background-color: #eef4ff;
        }
        .no-data {
          text-align: center;
          padding: 20px;
          color: #666;
        }
        @media (max-width: 600px) {
          .contacts-table th,
          .contacts-table td {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="contacts-container">
        <h1 className="contacts-heading">📋 Contact Details</h1>

        <div className="table-wrapper">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contact.length > 0 ? (
                contact.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    No contact details found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllContacts;
