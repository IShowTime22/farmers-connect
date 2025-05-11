import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Makepayment = () => {
  const { state } = useLocation();
  const { product, quantity = 1 } = state || {};
  const image_url = "https://ishowtime.pythonanywhere.com/static/images/";

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isValidPhone = phone.startsWith("254") && phone.length === 12;

  const submit = async (e) => {
    e.preventDefault();

    if (!isValidPhone) {
      setMessage("Enter a valid phone number (e.g. 254712345678)");
      return;
    }

    setSubmitting(true);
    setMessage("Payment is being processed, please wait...");

    const formdata = new FormData();
    formdata.append("phone", phone);
    formdata.append("amount", product.product_cost * quantity);
    formdata.append("quantity", quantity);

    try {
      const response = await axios.post("https://ishowtime.pythonanywhere.com/api/mpesa_payment", formdata);
      setMessage(response.data.message);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("Payment failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h5 style={{ color: "#dc3545" }}>No product selected for payment.</h5>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="payment-page" style={{ paddingBottom: "2rem", padding: "0 1rem" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: "bold", margin: "1rem 0" }}
        >
          Make Payment
        </h2>
        <h6 style={{ color: "#007bff", textAlign: "center", marginBottom: "1rem" }}>
          {message}
        </h6>
        <div
          className="card"
          style={{
            backgroundColor: "#e8f5e9",
            padding: "1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            margin: "0 auto 1.5rem",
            textAlign: "center",
          }}
        >
          <img
            src={image_url + product.product_photo}
            alt={product.product_name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              borderRadius: "4px",
              margin: "0 auto",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0", textAlign: "center" }}>
            {product.product_name}
          </h3>
          <b style={{ color: "#ffc107", fontSize: "1rem", textAlign: "center", display: "block" }}>
            Ksh. {product.product_cost} x {quantity} = Ksh. {product.product_cost * quantity}
          </b>
          <form onSubmit={submit} style={{ marginTop: "1rem", textAlign: "center" }}>
            <input
              type="text"
              placeholder="Enter Mpesa number (e.g., 2547xxxxxxxx)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "0.5rem",
                boxSizing: "border-box",
                display: "block",
                margin: "0 auto",
              }}
            /><br />
            <button
              type="submit"
              className="cta"
              style={{
                backgroundColor: "#388e3c",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                border: "none",
                width: "20%",
                maxWidth: "200px",
                fontSize: "1rem",
                transition: "transform 0.3s",
                margin: "0 auto",
                display: "block",
              }}
              disabled={submitting}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              {submitting ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Makepayment;