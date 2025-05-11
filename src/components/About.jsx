import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../app.css"; // Ensure app.css doesn't override inline styles

// Import Google Fonts
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url(https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            maxWidth: "800px",
            opacity: 0,
            animation: "fadeIn 0.8s forwards",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: "1.2",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            About ShambaLink
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#ffffff",
              lineHeight: "1.6",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            Empowering Kenyan farmers with smart solutions for sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section
        style={{
          padding: "2.5rem 1rem",
          maxWidth: "1320px",
          margin: "0 auto",
          marginBottom: "2.5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
        >
          Our Purpose
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 250px))",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "Our Mission",
              description:
                "To empower Kenyan farmers with innovative tools, knowledge, and market access to boost productivity and sustainability.",
              image: "images/about-us.jpg",
            },
            {
              title: "Our Vision",
              description:
                "A thriving agricultural ecosystem where every farmer uses technology to achieve prosperity and environmental harmony.",
              image: "images/hero-bg.jpg",
            },
            {
              title: "Our Values",
              description:
                "Integrity, innovation, and community drive us to support farmers and promote sustainable practices.",
              image: "images/soil.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#388e3c",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s",
                opacity: 0,
                animation: `fadeIn 0.5s forwards ${index * 0.1}s`,
                maxWidth: "250px",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "200px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  marginBottom: "0.75rem",
                  margin: "0 auto",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/50x150?text=Image+Not+Found";
                }}
              />
              <h3
                style={{
                  color: "#000000",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                  lineHeight: "1.4",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  textAlign: "center",
                  lineHeight: "1.5",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Description */}
      <section
        style={{
          padding: "0 1rem",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            lineHeight: "1.3",
          }}
        >
          Who We Are
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#333",
            lineHeight: "1.6",
            marginBottom: "1rem",
          }}
        >
          ShambaLink is a platform created to support Kenyan farmers by providing
          farming tips, quality tools, and a marketplace to buy  farming
          equipment. Our goal is to empower farmers with the resources they need
          to increase productivity and grow sustainable businesses.
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#333",
            lineHeight: "1.6",
          }}
        >
          We believe in using technology to simplify agriculture and connect rural
          communities with essential services. Developed by <strong>Tutu</strong>{" "}
          in 2025 with love for Kenyan agriculture.
        </p>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "2.5rem 1rem",
          maxWidth: "1320px",
          margin: "0 auto",
          marginBottom: "2.5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
        >
          Meet Our Team
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 250px))",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {[
            {
              name: "Samuel Tutu",
              role: "Founder & CEO",
              image: "images/peter.jpg",
            },
            {
              name: "Jane Wanjiru",
              role: "Lead Agronomist",
              image: "images/jane.jpg",
            },
            {
              name: "Peter Mwangi",
              role: "Tech Lead",
              image: "images/tutu.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#388e3c",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s",
                opacity: 0,
                animation: `fadeIn 0.5s forwards ${index * 0.1}s`,
                maxWidth: "250px",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  marginBottom: "0.75rem",
                  margin: "0 auto",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/50x150?text=Image+Not+Found";
                }}
              />
              <h3
                style={{
                  color: "#000000",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "0.25rem",
                  lineHeight: "1.4",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "2.5rem 1rem",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2e7d32",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            lineHeight: "1.3",
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#333",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          Have questions or want to collaborate? Reach out to us!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: "#333",
              lineHeight: "1.5",
            }}
          >
            Email: <a
              href="mailto:info@shambalink.co.ke"
              style={{ color: "#2e7d32", textDecoration: "none" }}
            >
              info@shambalink.co.ke
            </a>
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#333",
              lineHeight: "1.5",
            }}
          >
            Phone: <a
              href="tel:+254123456789"
              style={{ color: "#2e7d32", textDecoration: "none" }}
            >
              +254 123 456 789
            </a>
          </p>
        </div>
        <button
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#ffeb3b",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          onClick={() => navigate("/signup")}
          aria-label="Join ShambaLink"
        >
          Join ShambaLink
        </button>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#388e3c",
          color: "#ffffff",
          padding: "2rem",
          textAlign: "center",
          fontSize: "0.9rem",
          fontWeight: "400",
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <a
            href="https://twitter.com"
            style={{
              margin: "0 0.75rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
            aria-label="Twitter"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            style={{
              margin: "0 0.75rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
            aria-label="Facebook"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11 10 10 10 0 0011-10zm-6 6h-2v-4h2v-2h-2V9h3v2h2v2h-2v4z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            style={{
              margin: "0 0.75rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
            aria-label="Instagram"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.2.5.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.5.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.2-.5-.4-1.2-.5-2.4-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.9.5-2.4.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.5-.2 1.2-.4 2.4-.5 1.2-.1 1.6-.1 4.8-.1zm0 1.5c-3.2 0-3.6 0-4.8.1-1.1.1-1.8.3-2.2.5-.5.2-.9.5-1.3 1s-.7.8-1 1.3c-.2.4-.4 1.1-.5 2.2-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.1.3 1.8.5 2.2.2.5.5.9 1 1.3s.8.7 1.3 1c.4.2 1.1.4 2.2.5 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.1-.1 1.8-.3 2.2-.5.5-.2.9-.5 1.3-1s.7-.8 1-1.3c.2-.4.4-1.1.5-2.2.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.1-.3-1.8-.5-2.2-.2-.5-.5-.9-1-1.3s-.8-.7-1.3-1c-.4-.2-1.1-.4-2.2-.5-1.2-.1-1.6-.1-4.8-.1zm0 2.3a6.8 6.8 0 110 13.6 6.8 6.8 0 010-13.6zm0 1.5a5.3 5.3 0 100 10.6 5.3 5.3 0 000-10.6zm5.3-3.8c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3.6-1.3 1.3-1.3 1.3.6 1.3 1.3z" />
            </svg>
          </a>
        </div>
        <p>© 2025 ShambaLink. All rights reserved.</p>
      </footer>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            section {
              padding: 1.5rem 0.5rem;
            }
            h1 {
              font-size: 2rem;
            }
            h2 {
              font-size: 1.75rem;
            }
            h3 {
              font-size: 1.25rem;
            }
            p {
              font-size: 0.95rem;
            }
            img {
              width: 50px;
              height: 120px;
            }
            button {
              padding: 0.6rem 1.2rem;
              font-size: 0.9rem;
            }
            footer {
              padding: 1.5rem;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.75rem;
            }
            h2 {
              font-size: 1.5rem;
            }
            h3 {
              font-size: 1.1rem;
            }
            p {
              font-size: 0.9rem;
            }
            img {
              width: 50px;
              height: 100px;
            }
            button {
              padding: 0.5rem 1rem;
              font-size: 0.85rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;