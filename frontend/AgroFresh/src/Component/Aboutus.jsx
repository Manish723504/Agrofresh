import React from "react";
import Header from "./Header";

const AboutUs = () => {
  const sectionStyle = {
    backgroundImage: "url('fruit.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  };

  const contentStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  };

  return (
    <>
      <Header />

      <div style={sectionStyle}>
        <h1>About Us</h1>
      </div>

      <div style={contentStyle}>
        <h2>Our Story</h2>
        <p>
          Welcome to our company! We are passionate about delivering the best
          quality products and services to our customers. Our journey began
          years ago with a vision to innovate and excel.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to create value and make a difference in the
          communities we serve by providing exceptional products and fostering
          long-lasting relationships.
        </p>

        <h2>Meet the Team</h2>
        <p>
          We have a diverse and talented team dedicated to bringing creativity,
          expertise, and commitment to every project we take on.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
