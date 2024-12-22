import React, { useState,useContext } from "react";
import "./ForgetPassword.css";
import { RecoveryContext } from "../App";

const ForgetPassword = () => {
  const { setEmail, email } = useContext(RecoveryContext);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      return;
    }
    // Simulate sending recovery email (backend call here)
    setMessage(`A recovery email has been sent to ${email}`);
    setEmail(""); // Clear input field
  };

  return (
    <div className="forget-password-container">
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <h2 className="forget-password-title">Forgot Password?</h2>
        <p className="forget-password-info">
          Enter your email address and we’ll send you instructions to reset your password.
        </p>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="form-button">Send Recovery Email</button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
