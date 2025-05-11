import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const questions = [
  { question: "Best irrigation method?", options: ["Drip", "Flood", "Rain-fed", "Sprinkler"], answer: "Drip", explanation: "Drip irrigation delivers water directly to the root zone, minimizing waste." },
  { question: "What enriches soil?", options: ["Plastic", "Compost", "Metal", "Chemicals"], answer: "Compost", explanation: "Compost adds organic matter and nutrients to the soil naturally." },
  { question: "Which crop is drought-resistant?", options: ["Maize", "Rice", "Sorghum", "Wheat"], answer: "Sorghum", explanation: "Sorghum thrives in arid conditions with minimal water." },
  { question: "Best planting season for maize?", options: ["January", "April", "August", "November"], answer: "April", explanation: "April aligns with the long rainy season in many regions." },
  { question: "What helps with pest control?", options: ["Chemical pesticides", "Neem oil", "Plastic mulch", "Irrigation"], answer: "Neem oil", explanation: "Neem oil is a natural, eco-friendly pest repellent." },
  { question: "Which irrigation method saves water the most?", options: ["Drip", "Flood", "Rain-fed", "Sprinkler"], answer: "Drip", explanation: "Drip irrigation uses water efficiently by targeting roots." },
  { question: "Which is an organic method of pest control?", options: ["Neem oil", "Insecticides", "Pesticides", "Fungicides"], answer: "Neem oil", explanation: "Neem oil is derived from plants and safe for organic farming." },
  { question: "What improves soil fertility?", options: ["Compost", "Plastic", "Inorganic fertilizers", "Sand"], answer: "Compost", explanation: "Compost enhances soil structure and nutrient content." },
  { question: "Best way to store grains?", options: ["Plastic bags", "Hermetic bags", "Sacks", "Open air"], answer: "Hermetic bags", explanation: "Hermetic bags prevent moisture and pest damage." },
  { question: "Which is a good water management method?", options: ["Drip irrigation", "Flood irrigation", "Rain-fed", "Surface irrigation"], answer: "Drip irrigation", explanation: "Drip irrigation conserves water by reducing runoff." },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [answerFeedback, setAnswerFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          setShowFeedback(false);
          setAnswerFeedback("");
          setIndex((prevIndex) => prevIndex + 1);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index]);

  const handleAnswer = (opt) => {
    if (opt === questions[index].answer) {
      setScore(score + 1);
      setAnswerFeedback("✅ Correct Answer!");
      setShowFeedback(true);
    } else {
      setAnswerFeedback(`❌ Wrong! Correct answer: ${questions[index].answer}. ${questions[index].explanation}`);
      setShowFeedback(true);
    }
    setTimeout(() => {
      setShowFeedback(false);
      setAnswerFeedback("");
      setIndex(index + 1);
      setTimeLeft(10);
    }, 2000);
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setTimeLeft(10);
    setAnswerFeedback("");
    setShowFeedback(false);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            color: "#388e3c",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          🌾 Farming Knowledge Quiz
        </h2>

        {index < questions.length ? (
          <div
            style={{
              backgroundColor: "#e8f5e9",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #388e3c",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                color: "#333",
              }}
            >
              <span>Question {index + 1} of {questions.length}</span>
              <span
                style={{
                  backgroundColor: "#ffeb3b",
                  color: "#388e3c",
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
              >
                ⏳ {timeLeft}s
              </span>
            </div>
            <h3
              style={{
                color: "#333",
                fontSize: "1.8rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              {questions[index].question}
            </h3>
            {questions[index].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "1rem",
                  margin: "0.75rem 0",
                  backgroundColor: "#388e3c",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {opt}
              </button>
            ))}
            {showFeedback && (
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: answerFeedback.includes("Correct") ? "#388e3c" : "#f44336",
                  textAlign: "center",
                }}
              >
                {answerFeedback}
              </p>
            )}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#e8f5e9",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid #388e3c",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#388e3c",
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              🎉 Quiz Complete!
            </h3>
            <p
              style={{
                color: "#333",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Your Score: {((score / questions.length) * 100).toFixed(0)}%
            </p>
            <p
              style={{
                color: "#444",
                fontSize: "1.2rem",
                marginBottom: "2rem",
              }}
            >
              {score >= 8 ? "Excellent work, farmer!" : score >= 5 ? "Great effort! Keep learning." : "Try again to master these tips!"}
            </p>
            <button
              onClick={restartQuiz}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#ffeb3b",
                color: "#388e3c",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              🔄 Restart Quiz
            </button>
          </div>
        )}
      </section>

      <footer
        style={{
          backgroundColor: "#388e3c",
          color: "white",
          padding: "1.5rem",
          textAlign: "center",
          fontSize: "1rem",
        }}
      >
        <p>© 2023 ShambaConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Quiz;