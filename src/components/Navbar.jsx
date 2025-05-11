import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={{ backgroundColor: "#388e3c", padding: "10px" }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}>Farmers Connect</div>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link></li>
          <li><Link to="/tips" style={{ color: "white", textDecoration: "none" }}>Farming Tips</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          <li><Link to="/addproduct" style={{ color: "white", textDecoration: "none" }}>Add Product</Link></li>
          <li style={{ position: "relative" }}>
            <Link to="/cart" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}>
              <i className="fas fa-shopping-cart" style={{ fontSize: "1.5rem" }}></i>
              {cartItems.length > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.8rem",
                  fontWeight: "bold"
                }}>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;