import React, { useState, useContext } from "react";
import "./LR.css"; 
import { useNavigate } from "react-router-dom";
import { RecoveryContext } from "../App";

const Login = () => {
  const { setEmail, email, setLogin } = useContext(RecoveryContext);
  const [username, setUsername] = useState(""); // Added username field
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3200/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email || undefined,
          username: username || undefined,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setLogin(true);
        navigate("/"); // Redirect after login
      } else {
        setError(data.error || "Invalid login credentials");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submit}>
        <h2 className="login-title">Login</h2>
        
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="emailOrUsername" className="form-label">
          Email or Username
        </label>
        <input
          type="text"
          placeholder="Enter your email or username"
          id="emailOrUsername"
          className="form-input"
          value={email || username}
          onChange={(e) => {
            const value = e.target.value;
            if (value.includes("@")) {
              setEmail(value); // If input looks like an email, set email
              setUsername(""); // Clear username
            } else {
              setUsername(value); // Otherwise, set username
              setEmail(""); // Clear email
            }
          }}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
