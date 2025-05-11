import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm ShambaLink Assistant. Ask me about farming—soil, pests, water, tools, seeds, markets, climate, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Expanded Q&A dataset for Kenyan farmers
  const farmingQA = [
    {
      keywords: ["soil", "fertility", "compost", "ph", "nutrients"],
      response:
        "To improve soil fertility, apply organic compost (e.g., manure and crop residues) twice per season. Test soil pH (ideal: 6.0-7.0) using kits from agrovet shops. For clay soils in Western Kenya, add gypsum for better drainage. Want crop-specific soil tips?",
    },
    {
      keywords: ["water", "irrigation", "drip", "rainwater", "conservation"],
      response:
        "Drip irrigation saves 50% water, perfect for vegetables in dry areas like Machakos. Harvest rainwater with tanks or ponds during rainy seasons. Mulching with dry grass reduces evaporation. Need help with irrigation setup or water-saving tips?",
    },
    {
      keywords: ["pest", "insect", "neem", "pesticide", "aphids", "whiteflies"],
      response:
        "Neem oil (10ml per liter of water) repels aphids and whiteflies, common in tomatoes and kale. Plant marigolds to deter nematodes. For organic control, use garlic spray. Which pests are troubling your crops?",
    },
    {
      keywords: ["tool", "smart tool", "sensor", "equipment", "machinery"],
      response:
        "Soil moisture sensors (e.g., iFarm) optimize irrigation for small farms. Jab planters are affordable for manual planting. For larger farms, consider tractor rentals from Hello Tractor. What tools do you need for your farm size?",
    },
    {
      keywords: ["seed", "hybrid", "heirloom", "variety", "planting"],
      response:
        "Hybrid seeds like DK777 maize yield 20-30% more but require fertilizers. Heirloom seeds, like local sukuma wiki, are drought-tolerant. Buy certified seeds from KALRO or agrovet shops. What crops are you planting this season?",
    },
    {
      keywords: ["market", "price", "cooperative", "export", "sell"],
      response:
        "Join cooperatives like Mwea Rice Farmers for better prices. For exports, organic certification boosts avocado/mango sales to Europe. Check Twiga Foods for local rates (e.g., kale at KSh 20/kg in Nairobi). Need prices for a specific crop?",
    },
    {
      keywords: ["climate", "drought", "weather", "forecast", "rainfall"],
      response:
        "Plant drought-resistant crops like sorghum or cowpeas in arid areas like Kitui. Use Kenya Weather app for planting schedules. Mulching cuts evaporation by 30%. Need crop or weather tips for your region?",
    },
    {
      keywords: ["finance", "loan", "budget", "funding", "credit"],
      response:
        "SACCOs and the Youth Enterprise Fund offer low-interest loans for farmers. Budget 30% for inputs, 20% for savings. KCB M-Pesa loans are quick for small amounts. Want help with loan applications or budgeting?",
    },
    {
      keywords: ["organic", "certification", "standards", "natural"],
      response:
        "Contact Kenya Organic Agriculture Network (KOAN) for organic certification. Avoid synthetic inputs and keep records for 3 years. Certified farms earn 20% more. Interested in certification steps or organic practices?",
    },
    {
      keywords: ["crop rotation", "rotation", "intercropping"],
      response:
        "Rotate legumes (e.g., beans) with cereals (e.g., maize) to fix nitrogen and reduce pests. A 3-year cycle improves soil health. Intercrop maize with beans for better yields. Which crops are you rotating?",
    },
    {
      keywords: ["fertilizer", "manure", "npk", "urea"],
      response:
        "Organic manure (e.g., cow dung) is cost-effective and improves soil structure. NPK 17:17:17 suits maize but apply 2 bags/acre max to avoid burn. Test soil first. Need fertilizer advice for your crop?",
    },
    {
      keywords: ["disease", "blight", "fungus", "mildew"],
      response:
        "For fungal diseases like blight in tomatoes, use copper-based fungicides (e.g., Dithane) or plant resistant varieties. Remove infected leaves and avoid overhead watering. What disease is affecting your crops?",
    },
    {
      keywords: ["training", "workshop", "learn", "education"],
      response:
        "KALRO and 4-H Kenya offer free/affordable farming workshops. Online platforms like iCow provide SMS-based training. Topics include organic farming and pest control. Want details on upcoming trainings in your area?",
    },
    {
      keywords: ["storage", "post-harvest", "grain", "silo"],
      response:
        "Use hermetic bags (e.g., PICS bags) to store maize and prevent weevils. Dry grains to 13% moisture before storage. For vegetables, cold storage extends shelf life. Need storage tips for a specific crop?",
    },
    {
      keywords: ["livestock", "cattle", "poultry", "goats"],
      response:
        "For poultry, vaccinate against Newcastle disease. Crossbreed local goats with Galla for better milk/meat. Feed cattle Napier grass mixed with legumes. What livestock do you keep, and what’s your challenge?",
    },
  ];

  // Improved response matching logic
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    // Split input into words for better matching
    const inputWords = input.split(/\s+/);

    // Find the best matching Q&A
    const matchedQA = farmingQA.find((qa) =>
      qa.keywords.some((keyword) =>
        inputWords.some((word) => word.includes(keyword) || keyword.includes(word))
      )
    );

    if (matchedQA) {
      return matchedQA.response;
    }

    // Handle greetings or general queries
    if (input.match(/hi|hello|hey|how are you/i)) {
      return "Hi! I'm here to help with your farming questions. What's on your mind—soil, crops, pests, or markets?";
    }

    // Fallback response
    return "I can assist with soil health, pest control, irrigation, tools, seeds, markets, climate, or livestock. Could you clarify your question or try keywords like 'drip irrigation' or 'maize prices'?";
  };

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { sender: "user", text: input }]);
      setIsTyping(true);

      // Simulate typing delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: getBotResponse(input) },
        ]);
        setIsTyping(false);
      }, 1000); // 1-second delay for realism
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e8f5e9",
        height: "100%",
      }}
    >
      {/* Chat Header with Icon */}
      <div
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <svg
          width="24"
          height="24"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a10 10 0 0 0-7.35 16.83l-1.93 2.82a1 1 0 0 0 .85 1.5h10.86a1 1 0 0 0 .85-1.5l-1.93-2.82A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-5.1-1.83l-.86.54h8.92l-.86-.54A8 8 0 0 1 12 20zm-1-9h2v2h-2v-2zm-3 0h2v2H8v-2zm6 0h2v2h-2v-2z" />
        </svg>
        <h3 style={{ margin: 0, fontSize: "16px" }}>ShambaLink Assistant</h3>
      </div>

      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          padding: "10px",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "8px 12px",
                borderRadius: "8px",
                backgroundColor:
                  msg.sender === "user" ? "#28a745" : "#e8f5e9",
                color: msg.sender === "user" ? "white" : "#333",
                fontSize: "14px",
                lineHeight: "1.4",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                backgroundColor: "#e8f5e9",
                color: "#333",
                fontSize: "14px",
              }}
            >
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          backgroundColor: "#e8f5e9",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            fontSize: "14px",
            color: "#333",
            backgroundColor: "white",
            marginRight: "10px",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "transform 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          onClick={handleSend}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;