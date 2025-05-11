import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../app.css"; // Ensure app.css doesn't override styles

// Import Google Fonts (Poppins)
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const tipsData = [
  {
    id: 1,
    title: "Boost Your Soil Health",
    description: "Discover advanced composting techniques and soil testing methods to maximize fertility.",
    image: "/images/soil.jpg",
    video: "https://www.youtube.com/watch?v=l9zIayka23k",
    story: "Samuel from Machakos doubled his yield using these methods.",
  },
  {
    id: 2,
    title: "Efficient Water Management",
    description: "Leverage smart irrigation systems and rainwater harvesting to conserve water effectively.",
    image: "/images/water.jpg",
    video: "https://www.youtube.com/watch?v=cd8fD-6f4-E",
    story: "Mary in Kisumu reduced water use by 30% with drip systems.",
  },
  {
    id: 3,
    title: "Eco-Friendly Pest Control",
    description: "Adopt cutting-edge organic pest management strategies to protect your crops sustainably.",
    image: "/images/pest.jpg",
    video: "https://www.youtube.com/watch?v=CodC5sk13-c",
    story: "John's tomatoes flourished after switching to neem oil.",
  },
  {
    id: 4,
    title: "Climate-Smart Farming",
    description: "Adapt to changing weather using drought-resistant crops and climate forecasting tools.",
    image: "/images/smart-farming.jpg",
    video: "https://www.youtube.com/watch?v=y1bhpy4volc",
    story: "Alice in Eldoret uses weather apps to plan planting dates.",
  },
  {
    id: 5,
    title: "Digital Tools for Farming",
    description: "Explore apps, AI, and sensors that help with crop management and market pricing.",
    image: "/images/digital.jpg",
    video: "https://www.youtube.com/watch?v=WXcJUpqwPo0",
    story: "David uses FarmDrive for tracking loans and profits.",
  },
  {
    id: 6,
    title: "Post-Harvest Loss Prevention",
    description: "Discover modern storage methods and preservation techniques to reduce wastage.",
    image: "/images/loss.jpg",
    video: "https://www.youtube.com/watch?v=FGntgv_hIEc",
    story: "Agnes saves 20% of her maize harvest using hermetic bags.",
  },
  {
    id: 7,
    title: "Organic Certification Tips",
    description: "Learn how to meet organic standards to sell in local and global markets.",
    image: "/images/samadi.jpg",
    video: "https://www.youtube.com/watch?v=P8dqqoQDmBw",
    story: "James certified his farm and now exports to Europe.",
  },
  {
    id: 8,
    title: "Financial Literacy for Farmers",
    description: "Understand how to budget, save, and access loans to grow your agribusiness.",
    image: "/images/finance.jpg",
    video: "https://www.youtube.com/watch?v=mHru7TweGbk",
    story: "Ann learned to budget and got a youth agribiz loan.",
  },
  {
    id: 9,
    title: "Agri-Tourism Opportunities",
    description: "Turn your farm into a tourist site and earn income from eco-lodges and visits.",
    image: "/images/tourism.jpg",
    video: "https://www.youtube.com/watch?v=Mkdplm507wA",
    story: "Patrick built a farm tour trail and attracts weekend visitors.",
  },
];

const Tips = () => {
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const filteredTips = tipsData.filter(
    (tip) =>
      tip.title.toLowerCase().includes(search.toLowerCase()) ||
      tip.description.toLowerCase().includes(search.toLowerCase())
  );

  const randomTip = tipsData[new Date().getDay() % tipsData.length];

  const openVideoModal = (videoUrl) => {
    try {
      let videoId;
      if (videoUrl.includes("youtu.be")) {
        videoId = videoUrl.split("/")[3].split("?")[0];
      } else {
        videoId = videoUrl.split("v=")[1]?.split("&")[0] || videoUrl.split("v=")[1];
      }
      if (!videoId) throw new Error("Invalid video URL");
      setSelectedVideo(videoId);
      const videoModal = document.getElementById("videoModal");
      videoModal.style.display = "flex";
    } catch (error) {
      console.error("Error opening video modal:", error);
      alert("Unable to load video. Please try another tip.");
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    const videoModal = document.getElementById("videoModal");
    videoModal.style.display = "none";
  };

  return (
    <div
      className="tips"
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "35vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd) 50% 50% / cover, linear-gradient(180deg, rgba(56, 142, 60, 0.2), rgba(46, 125, 50, 0.4))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          marginBottom: "3rem",
          boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: "1.3",
              textShadow: "0 3px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            Farming Tips for Success
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: "400",
              color: "#e8f5e9",
              lineHeight: "1.7",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
            }}
          >
            Unlock expert advice to elevate your farm’s productivity and sustainability.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section
        style={{
          padding: "3rem 1rem",
          maxWidth: "1400px",
          margin: "0 auto",
          background: "linear-gradient(180deg, #f8fafc, #e8f5e9)",
          borderRadius: "12px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            color: "#2e7d32",
            fontSize: "2.2rem",
            fontWeight: "700",
            lineHeight: "1.3",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Latest Farming Tips
        </h2>

        {/* Tip of the Day Card */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #388e3c, #2e7d32)",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            border: "2px solid #ffeb3b",
            marginBottom: "3rem",
            maxWidth: "800px",
            margin: "0 auto",
            transition: "transform 0.3s, box-shadow 0.3s",
            opacity: 0,
            animation: "fadeIn 0.7s forwards",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.03)";
            e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-16px",
              left: "30px",
              background: "linear-gradient(135deg, #ffeb3b, #fbc02d)",
              color: "#1f2a44",
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "600",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Tip of the Day
          </div>
          <h3
            style={{
              color: "#e8f5e9",
              fontSize: "1.8rem",
              marginBottom: "0.75rem",
              fontWeight: "700",
              lineHeight: "1.4",
              textAlign: "center",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {randomTip.title}
          </h3>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            {randomTip.description}
          </p>
          {randomTip.story && (
            <p
              style={{
                fontStyle: "italic",
                color: "#ffeb3b",
                fontSize: "1rem",
                textAlign: "center",
                marginTop: "0.75rem",
                lineHeight: "1.5",
              }}
            >
              👨‍🌾 {randomTip.story}
            </p>
          )}
        </div><br />

        {/* Search */}
        <div
          style={{
            position: "relative",
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
          }}
        >
          <input
            type="text"
            placeholder="Search farming tips..."
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.9rem 1rem 0.9rem 3.5rem",
              width: "100%",
              borderRadius: "12px",
              border: "2px solid #ffeb3b",
              backgroundColor: "#ffffff",
              fontSize: "1.1rem",
              color: "#1f2a44",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s",
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = "0 0 12px rgba(255, 235, 59, 0.6)";
              e.target.style.borderColor = "#fbc02d";
              e.target.style.transform = "scale(1.02)";
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "#ffeb3b";
              e.target.style.transform = "scale(1)";
            }}
            aria-label="Search farming tips"
          />
          <svg
            style={{
              position: "absolute",
              top: "50%",
              left: "1.2rem",
              transform: "translateY(-50%)",
              width: "24px",
              height: "24px",
              fill: "#2e7d32",
              transition: "fill 0.3s",
            }}
            viewBox="0 0 24 24"
            onMouseEnter={(e) => (e.target.style.fill = "#ffeb3b")}
            onMouseLeave={(e) => (e.target.style.fill = "#2e7d32")}
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
            gap: "2rem",
            justifyContent: "center",
            padding: "0 1rem",
          }}
        >
          {filteredTips.map((tip, index) => (
            <div
              key={tip.id}
              style={{
                background: "linear-gradient(135deg, #388e3c, #2e7d32)",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                border: "1px solid #ffeb3b",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                opacity: 0,
                animation: `fadeIn 0.7s forwards ${index * 0.15}s`,
                cursor: "pointer",
                maxWidth: "320px",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
                e.target.style.borderColor = "#fbc02d";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                e.target.style.borderColor = "#ffeb3b";
              }}
            >
              <img
                src={tip.image}
                alt={tip.title}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  margin: "0 auto",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/100x150?text=Image+Not+Found";
                }}
              />
              <h3
                style={{
                  color: "#e8f5e9",
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "0.75rem",
                  lineHeight: "1.4",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tip.title}
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textAlign: "center",
                  marginBottom: "0.75rem",
                  lineHeight: "1.6",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {tip.description}
              </p>
              {tip.story && (
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#ffeb3b",
                    fontSize: "0.95rem",
                    textAlign: "center",
                    marginBottom: "0.75rem",
                    lineHeight: "1.5",
                  }}
                >
                  👨‍🌾 {tip.story}
                </p>
              )}
              {tip.video && (
                <button
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.6rem 1.5rem",
                    background: "linear-gradient(135deg, #ffeb3b, #fbc02d)",
                    color: "#1f2a44",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "600",
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    animation: "pulse 2s infinite",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.1)";
                  }}
                  onClick={() => openVideoModal(tip.video)}
                  aria-label={`Watch video for ${tip.title}`}
                >
                  Watch Video
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Quiz Button */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <button
            style={{
              padding: "0.9rem 2rem",
              fontSize: "1.1rem",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #ffeb3b, #fbc02d)",
              color: "#1f2a44",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
              animation: "pulse 2s infinite",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
            }}
            onClick={() => navigate("/quiz")}
            aria-label="Take the farming quiz"
          >
            Test Your Farming Knowledge
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          background: "linear-gradient(135deg, #388e3c, #2e7d32)",
          color: "#ffffff",
          padding: "2.5rem",
          textAlign: "center",
          fontSize: "0.95rem",
          fontWeight: "400",
          boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "1.2rem" }}>
          <a
            href="https://twitter.com"
            style={{
              margin: "0 1rem",
              color: "#ffffff",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            aria-label="Twitter"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            style={{
              margin: "0 1rem",
              color: "#ffffff",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            aria-label="Facebook"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11 10 10 10 0 0011-10zm-6 6h-2v-4h2v-2h-2V9h3v2h2v2h-2v4z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            style={{
              margin: "0 1rem",
              color: "#ffffff",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ffeb3b")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            aria-label="Instagram"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.2.5.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.5.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.2-.5-.4-1.2-.5-2.4-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.9.5-2.4.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.5-.2 1.2-.4 2.4-.5 1.2-.1 1.6-.1 4.8-.1zm0 1.5c-3.2 0-3.6 0-4.8.1-1.1.1-1.8.3-2.2.5-.5.2-.9.5-1.3 1s-.7.8-1 1.3c-.2.4-.4 1.1-.5 2.2-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.1.3 1.8.5 2.2.2.5.5.9 1 1.3s.8.7 1.3 1c.4.2 1.1.4 2.2.5 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.1-.1 1.8-.3 2.2-.5.5-.2.9-.5 1.3-1s.7-.8 1-1.3c.2-.4.4-1.1.5-2.2.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.1-.3-1.8-.5-2.2-.2-.5-.5-.9-1-1.3s-.8-.7-1.3-1c-.4-.2-1.1-.4-2.2-.5-1.2-.1-1.6-.1-4.8-.1zm0 2.3a6.8 6.8 0 110 13.6 6.8 6.8 0 010-13.6zm0 1.5a5.3 5.3 0 100 10.6 5.3 5.3 0 000-10.6zm5.3-3.8c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3.6-1.3 1.3-1.3 1.3.6 1.3 1.3z" />
            </svg>
          </a>
        </div>
        <p>© 2025 ShambaLink. All rights reserved.</p>
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
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          animation: "fadeInModal 0.5s forwards",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "85%",
            maxWidth: "900px",
            background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            border: "2px solid #ffeb3b",
          }}
        >
          {selectedVideo && (
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title={
                tipsData.find((tip) => tip.video.includes(selectedVideo))?.title ||
                "Farming Tip Video"
              }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <button
            onClick={closeVideoModal}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "linear-gradient(135deg, #f44336, #d32f2f)",
              color: "#ffffff",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
            }}
            aria-label="Close video modal"
          >
            ×
          </button>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInModal {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          input::placeholder {
            color: #64748b;
            opacity: 0.7;
            font-weight: 400;
          }
          input:focus {
            outline: none;
          }
          @media (max-width: 768px) {
            section {
              padding: 2rem 0.5rem;
            }
            h1 {
              fontSize: 2.2rem;
            }
            h2 {
              fontSize: 1.8rem;
            }
            h3 {
              fontSize: 1.4rem;
            }
            p {
              fontSize: 0.95rem;
            }
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            img {
              width: 100px;
              height: 120px;
            }
            button {
              padding: 0.7rem 1.3rem;
              font-size: 0.95rem;
            }
            div[style*="maxWidth: 800px"] {
              padding: 1.5rem;
            }
            div[style*="maxWidth: 800px"] h3 {
              fontSize: 1.5rem;
            }
            div[style*="maxWidth: 800px"] p {
              fontSize: 1rem;
            }
            div[style*="width: 85%"] {
              width: 95%;
            }
            iframe {
              height: 350px;
            }
          }
          @media (max-width: 480px) {
            h1 {
              fontSize: 1.8rem;
            }
            h2 {
              fontSize: 1.6rem;
            }
            h3 {
              fontSize: 1.2rem;
            }
            p {
              fontSize: 0.9rem;
            }
            input {
              fontSize: 0.95rem;
              padding: 0.8rem 1rem 0.8rem 3rem;
            }
            button {
              padding: 0.6rem 1.2rem;
              font-size: 0.9rem;
            }
            img {
              width: 100px;
              height: 100px;
            }
            iframe {
              height: 250px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Tips;