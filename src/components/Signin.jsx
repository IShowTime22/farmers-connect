
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setLoading("Please wait as we log you in...");

        try {
            const formdata = new FormData();
            formdata.append("username", username);
            formdata.append("password", password);

            const response = await axios.post("https://ishowtime.pythonanywhere.com/api/signin", formdata);

            setLoading("");

            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate('/');
            } else {
                setError(response.data.Error);
                console.log(response);
            }
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="text-center text-success mb-4">Sign In</h2>
                <form onSubmit={submit}>
                    <h6 className="text-warning mb-3">{loading}</h6>
                    <h6 className="text-danger mb-3">{error}</h6>

                    <div className="mb-4">
                        <input
                            type="username"
                            placeholder="Enter your email"
                            className="form-control auth-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div><br />

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="form-control auth-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div><br />

                    <button type="submit" className="btn btn-success w-100 mb-4">
                        Sign In
                    </button>

                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="signup-link">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <>
            <Navbar />
            <Signin />
            <Footer />
        </>
    );
}