import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Navbar from "./Navbar";
import Weather from "./Weather";
import Chat from "./Chat"; // Ensure Chat component is imported

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const openVideoModal = () => {
    const videoModal = document.getElementById("videoModal");
    videoModal.style.display = "flex";
  };

  const closeVideoModal = () => {
    const videoModal = document.getElementById("videoModal");
    videoModal.style.display = "none";
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "2rem",
          textAlign: "left",
          backgroundColor: "#43a047",
        }}
      >
        <div className="hero-content" style={{ maxWidth: "600px" }}>
          <h1
            className="hero-title"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            ShambaConnect
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontSize: "1.2rem",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Smart Farming Solutions for Every Kenyan Farmer
          </p>
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
          >
            <button
              className="cta"
              style={{
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "8px",
                backgroundColor: "#ffeb3b",
                color: "white",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s, background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              onClick={() => navigate("/signup")}
            >
              Start Now
            </button>
            <button
              className="cta-outline"
              style={{
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "2px solid #ffeb3b",
                color: "#ffeb3b",
                cursor: "pointer",
                transition: "transform 0.3s, background-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              onClick={openVideoModal}
            >
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <Weather />

      {/* Categories Section */}
      <section className="section categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="card-grid">
          {[
            {
              title: "Organic Fertilizers",
              desc: "Nurture your crops naturally",
              img: "/images/ferterliser.jpg",
            },
            {
              title: "Smart Tools",
              desc: "Precision tech for better yields",
              img: "/images/jembe.jpg",
            },
            {
              title: "Hybrid Seeds",
              desc: "High-performance crops for any soil",
              img: "/images/seeds.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "350px",
                backgroundColor: "#e8f5e9",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => navigate("/products")}
            >
              <img
                src={item.img}
                alt={item.title}
                className="card-image"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>
                {item.title}
              </h3>
              <p style={{ margin: "10px 0", fontSize: "1rem", flexGrow: 1 }}>
                {item.desc}
              </p>
              <button
                className="cta"
                style={{
                  marginTop: "auto",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#388e3c",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "transform 0.3s, background-color 0.3s",
                  width: "100%",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="section light-bg">
        <h2 className="section-title">Latest Farming Tips</h2>
        <div className="card-grid">
          {[
            {
              id: 1,
              title: "Crop Rotation Benefits",
              description: "Learn how rotating crops can improve soil health.",
              image: "/images/farming-tips.jpg",
              link: "/tips/crop-rotation",
            },
            {
              id: 2,
              title: "Water Conservation",
              description: "Tips to save water while farming efficiently.",
              image: "/images/water.jpg",
              link: "/tips/water-conservation",
            },
            {
              id: 3,
              title: "Pest Control",
              description: "Natural ways to keep pests away from your crops.",
              image: "/images/pest.jpg",
              link: "/tips/pest-control",
            },
          ].map((tip) => (
            <div
              key={tip.id}
              className="card tip"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => navigate(tip.link)}
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="card-image"
                style={{
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <h4 style={{ margin: "10px 0", fontSize: "1.2rem" }}>
                  {tip.title}
                </h4>
                <p style={{ fontSize: "1rem", margin: "10px 0" }}>
                  {tip.description}
                </p>
                <button
                  className="learn-more-button"
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#388e3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "transform 0.3s, background-color 0.3s",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  onClick={() => navigate(tip.link)}
                >
                  Learn More &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer
        className="footer"
        style={{
          backgroundColor: "#388e3c",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <p>© 2023 ShambaConnect. All rights reserved.</p>
      </footer>

      {/* Video Modal */}
      <div
        id="videoModal"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            maxWidth: "800px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/h7okvqps4G0"
            title="Smart Farm | Focus on Vegetable Farming in Kiambu County"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={closeVideoModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Chatbot Button */}
      <button
        className="chatbot-button"
        onClick={toggleChat}
        aria-label="Open ShambaConnect Assistant chatbot"
      >
        <svg
          width="30"
          height="30"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14h-4.4l-2.6 2.6-2.6-2.6H4V4h16v12zM7 9h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9z" />
        </svg>
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3 className="chatbot-header-title">ShambaConnect Assistant</h3>
            <button
              className="chatbot-close"
              onClick={toggleChat}
              aria-label="Close ShambaConnect Assistant chatbot"
            >
              ×
            </button>
          </div>
          <Chat />
        </div>
      )}
    </div>
  );
};

export default HomePage;