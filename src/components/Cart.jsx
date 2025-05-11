import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const image_url = "https://ishowtime.pythonanywhere.com/static/images/";

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="cart-container" style={{ paddingBottom: "2rem", padding: "0 1rem" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: "bold", margin: "1rem 0" }}
        >
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1rem" }}>Your cart is empty.</p>
        ) : (
          <div
            className="card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {cartItems.map((item, index) => (
              <div
                className="card"
                key={index}
                style={{
                  backgroundColor: "#e8f5e9",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  maxWidth: "250px",
                  margin: "0 auto 1.5rem",
                  textAlign: "center",
                }}
              >
                <img
                  src={image_url + item.product.product_photo}
                  alt={item.product.product_name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0", textAlign: "center" }}>
                  {item.product.product_name}
                </h3>
                <b style={{ color: "#ffc107", fontSize: "1rem", textAlign: "center", display: "block" }}>
                  Ksh. {item.product.product_cost} x {item.quantity} = Ksh. {item.product.product_cost * item.quantity}
                </b>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <button
                    className="cta"
                    style={{
                      backgroundColor: "#388e3c",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: "none",
                      transition: "transform 0.3s",
                    }}
                    onClick={() =>
                      navigate("/makepayment", { state: { product: item.product, quantity: item.quantity } })
                    }
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="cta"
                    style={{
                      backgroundColor: "#d32f2f",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: "none",
                      transition: "transform 0.3s",
                    }}
                    onClick={() => removeFromCart(index)}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;