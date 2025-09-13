import axios from "axios";
import { useEffect, useState } from "react";

function AllFeedback() {
  const [feedback, setFeedback] = useState([]);
  const URL = "http://localhost:5000/admin/allFeedback";

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(URL);
      console.log(serverResponse);
      setFeedback(serverResponse.data.feedbackDetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <style>{`
        .feedback-container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          font-family: "Poppins", sans-serif;
        }
        .feedback-heading {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.5rem;
          background: linear-gradient(90deg, #ff9966, #ff5e62);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        .table-wrapper {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
        .feedback-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }
        .feedback-table th {
          background: linear-gradient(90deg, #f12711, #f5af19);
          color: white;
          padding: 14px 16px;
          text-align: left;
          font-size: 16px;
        }
        .feedback-table td {
          padding: 14px 16px;
          color: #333;
          border-bottom: 1px solid #ddd;
          transition: background 0.3s;
          vertical-align: top;
        }
        .feedback-table tr:hover {
          background: #fff3e6;
        }
        .even-row {
          background-color: #fff8f0;
        }
        .odd-row {
          background-color: #fff1e6;
        }
        .no-data {
          text-align: center;
          padding: 20px;
          color: #666;
        }
        .rating-badge {
          display: inline-block;
          background: #ffd700;
          color: #333;
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .feedback-table th,
          .feedback-table td {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="feedback-container">
        <h1 className="feedback-heading">💬 Feedback Details</h1>

        <div className="table-wrapper">
          <table className="feedback-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Rating</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {feedback.length > 0 ? (
                feedback.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <span className="rating-badge">
                        ⭐ {item.rating || "N/A"}
                      </span>
                    </td>
                    <td>{item.remarks || "—"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    No feedback found
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

export default AllFeedback;
