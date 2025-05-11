import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        setLoading("Please wait as we upload your data.");

        try {
            const formdata = new FormData();
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("phone", phone);
            formdata.append("password", password);

            const response = await axios.post("https://ishowtime.pythonanywhere.com/api/signup", formdata);

            setLoading("");
            setSuccess(response.data.message);

            setUsername("");
            setPassword("");
            setEmail("");
            setPhone("");
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <h2 className="text-center text-success mb-4">Sign Up</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (!username || !email || !phone || !password) {
                                setError("All fields are required.");
                                return;
                            }

                            const passwordStrengthRegex =
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                            if (!passwordStrengthRegex.test(password)) {
                                setError(
                                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
                                );
                                return;
                            }

                            setError("");
                            submit(e);
                        }}
                    >
                        <h6 className="text-warning mb-3">{loading}</h6>
                        <h6 className="text-success mb-3">{success}</h6>
                        <h6 className="text-danger mb-3">{error}</h6>

                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="form-control auth-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div><br />

                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control auth-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div><br />

                        <div className="mb-4">
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="form-control auth-input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div><br />

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="form-control auth-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />  
                            <div className="password-strength mt-2">
                                <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={/[A-Z]/.test(password)}
                                        style={{ marginRight: "8px", transform: "scale(0.8)" }}
                                    />{" "}
                                    Contains an uppercase letter
                                </div>
                                <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={/[a-z]/.test(password)}
                                        style={{ marginRight: "8px", transform: "scale(0.8)" }}
                                    />{" "}
                                    Contains a lowercase letter
                                </div>
                                <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={/\d/.test(password)}
                                        style={{ marginRight: "8px", transform: "scale(0.8)" }}
                                    />{" "}
                                    Contains a number
                                </div>
                                <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={/[@$!%*?&]/.test(password)}
                                        style={{ marginRight: "8px", transform: "scale(0.8)" }}
                                    />{" "}
                                    Contains a special character
                                </div>
                                <div style={{ display: "flex", alignItems: "center", fontSize: "0.9rem", color: "#6c757d" }}>
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={password.length >= 8}
                                        style={{ marginRight: "8px", transform: "scale(0.8)" }}
                                    />{" "}
                                    At least 8 characters long
                                </div>
                            </div>
                        </div><br />

                        <button type="submit" className="btn btn-success w-100 mb-4">
                            Sign Up
                        </button><br />

                        <p className="text-center">
                            Already have an account?{" "}
                            <Link to="/signin" className="signin-link">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;