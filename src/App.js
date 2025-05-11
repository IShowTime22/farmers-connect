import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Addproduct from "./components/Addproduct";
import Getproducts from "./components/Getproducts";
import Cart from "./components/Cart";
import MakePayment from "./components/MakePayment"; // Fixed case sensitivity
import Chat from "./components/Chat";
import Quiz from "./components/Quiz";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Tips from "./components/Tips";
import Weather from "./components/Weather";
import { CartProvider } from "./CartContext";
import "./app.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/products" element={<Getproducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/makepayment" element={<MakePayment />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tips/:tipId" element={<Tips />} /> {/* For dynamic tip routes */}
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;