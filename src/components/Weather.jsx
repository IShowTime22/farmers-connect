import React, { useState } from "react";

const WeatherApp = () => {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      // Step 1: Get coordinates from place name
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("Place not found. Please enter a valid location.");
        setWeather(null);
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      // Step 2: Get weather from coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      if (weatherData && weatherData.current_weather) {
        setWeather(weatherData.current_weather);
        setError("");
      } else {
        setError("Weather data not available for this location");
      }
    } catch (err) {
      setError("Failed to fetch weather data");
      setWeather(null);
    }
  };

  return (
    <section
      className="weather-section"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f1f8e9",
      }}
    >
      <div
        className="weather-card"
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2
          className="section-title"
          style={{
            textAlign: "center",
            color: "#1565c0",
            marginBottom: "1rem",
          }}
        >
          Weather in Kenya
        </h2>
        <div
          className="weather-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Input Field and Button */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Enter place (e.g., Nairobi)"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              style={{
                flex: "1",
                padding: "0.8rem",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "1px solid #ccc",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
            <button
              onClick={fetchWeather}
              style={{
                padding: "0.8rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "8px",
                backgroundColor: "#388e3c",
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Get Weather
            </button>
          </div>
          {/* Error Message */}
          {error && (
            <p style={{ color: "red", fontSize: "1rem", marginTop: "0.5rem" }}>
              {error}
            </p>
          )}
          {/* Weather Output */}
          {weather && (
            <div
              className="weather-output"
              style={{
                backgroundColor: "#e8f5e9",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#388e3c", fontWeight: "bold" }}>
                <strong>Temperature:</strong> {weather.temperature}°C
              </p>
              <p style={{ color: "#424242" }}>
                <strong>Windspeed:</strong> {weather.windspeed} km/h
              </p>
              <p style={{ color: "#424242" }}>
                <strong>Time:</strong> {weather.time}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeatherApp;