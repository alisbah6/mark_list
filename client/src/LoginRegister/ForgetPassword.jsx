import React, { useState, useContext } from "react";
import "./ForgetPassword.css";
import { RecoveryContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const { setEmail, email } = useContext(RecoveryContext);
  const [username, setUsername] = useState(""); // Added username field
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !username) {
      setError("Please enter an email or username.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3200/api/recovery", {
        email,
        username,
      });

      if (response.status === 200) {
        // Navigate to the next page on success
        navigate("/Reset");
        localStorage.setItem("user",email || username)
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="forget-password-container">
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <h2 className="forget-password-title">Forgot Password?</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {message && <p className="form-message">{message}</p>} {/* Display success message */}

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
        <button type="submit" className="form-button">Proceed</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
