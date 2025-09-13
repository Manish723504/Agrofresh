import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminViewProducts = () => {
  const URL = "http://localhost:5000/viewproducts";
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(URL);
      console.log(serverResponse);

      const serverData = serverResponse.data.objectData;
      console.log(serverData);

      setProduct(serverData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <style>{`
        h1 {
          text-align: center;
          margin: 30px 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(90deg, #ff9966, #ff5e62);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 2.5rem;
        }
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 20px;
        }
        .item-div {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          padding: 15px;
          max-width: 250px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          transition: transform 0.2s;
        }
        .item-div:hover {
          transform: scale(1.05);
        }
        .item-div img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .item-div h5 {
          margin: 5px 0;
          font-size: 1rem;
          color: #333;
        }
        .item-div a {
          display: inline-block;
          margin-top: 10px;
          text-decoration: none;
          color: green;
          font-weight: 600;
        }
        .item-div a i {
          margin-right: 5px;
        }
        @media (max-width: 600px) {
          .item-div {
            max-width: 90%;
          }
          .item-div img {
            height: 180px;
          }
        }
      `}</style>

      <h1>View Products</h1>

      <div className="flex-container">
        {product.length > 0 ? (
          product.map((p) => (
            <div className="item-div" key={p._id}>
              <img
                src={`http://localhost:5000/profilePics/${p.productPic}`}
                alt={p.productName || "Product Image"}
              />
              <h5>Product Name: {p.productName}</h5>
              <h5>Product Category: {p.productCategory}</h5>
              <h5>Seller Name: {p.farmer?.name || "N/A"}</h5>
              <h5>Seller Phone: {p.farmer?.phone || "N/A"}</h5>
              <h5>Seller City: {p.farmer?.city || "N/A"}</h5>

              <a
                href={`https://wa.me/+91${p.farmer?.phone || ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i> Contact Now
              </a>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default AdminViewProducts;
