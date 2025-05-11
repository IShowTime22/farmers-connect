import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartContext } from "../CartContext";

const Getproducts = () => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const image_url = "https://ishowtime.pythonanywhere.com/static/images/";

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ishowtime.pythonanywhere.com/api/get_product_details");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      const initialQuantities = data.reduce((acc, product) => ({
        ...acc,
        [product.product_name]: 1,
      }), {});
      setQuantities(initialQuantities);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products.");
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const handleQuantityChange = (productName, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productName]: Math.max(1, (prev[productName] || 1) + delta),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.product_name] || 1;
    addToCart({ product, quantity }); // Add product with quantity
    setMessage("Product added successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const buyNow = (product) => {
    const quantity = quantities[product.product_name] || 1;
    navigate("/makepayment", { state: { product, quantity } });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="getproducts-container" style={{ paddingBottom: "2rem", padding: "0 1rem" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "1rem auto",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products..."
            style={{
              flex: 1,
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <i className="fas fa-search" style={{ fontSize: "1.2rem", color: "#388e3c" }}></i>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: "bold", margin: "1rem 0" }}
        >
          Available Products
        </h2>
        {message && (
          <h5 style={{ color: "#28a745", textAlign: "center", marginBottom: "1rem" }}>
            {message}
          </h5>
        )}
        {loading && (
          <h5 style={{ color: "#ffc107", textAlign: "center", marginBottom: "1rem" }}>
            Loading products...
          </h5>
        )}
        {error && (
          <h5 style={{ color: "#dc3545", textAlign: "center", marginBottom: "1rem" }}>
            {error}
          </h5>
        )}

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
          {filteredProducts.map((product, index) => (
            <div
              className="card"
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#e8f5e9",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                maxWidth: "250px",
                margin: "0 auto 1.5rem",
              }}
            >
              <img
                src={image_url + product.product_photo}
                alt={product.product_name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3 style={{ fontSize: "1.2rem", margin: "0.5rem 0", textAlign: "center" }}>
                {product.product_name}
              </h3>
              <b style={{ color: "#ffc107", fontSize: "1rem", textAlign: "center" }}>
                Ksh. {product.product_cost}
              </b>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  margin: "0.5rem 0",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#388e3c",
                    color: "white",
                    border: "none",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuantityChange(product.product_name, -1)}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span style={{ fontSize: "1rem", minWidth: "30px", textAlign: "center" }}>
                  {quantities[product.product_name] || 1}
                </span>
                <button
                  style={{
                    backgroundColor: "#388e3c",
                    color: "white",
                    border: "none",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleQuantityChange(product.product_name, 1)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                <button
                  className="cta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    backgroundColor: "#388e3c",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%",
                    transition: "transform 0.3s",
                  }}
                  onClick={() => handleAddToCart(product)}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button
                  className="buy-now"
                  style={{
                    backgroundColor: "#ffeb3b",
                    color: "#333",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%",
                    fontWeight: "bold",
                    transition: "transform 0.3s",
                  }}
                  onClick={() => buyNow(product)}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Getproducts;