import React, { useState, useContext } from "react";
import "./ForgetPassword.css";
import { RecoveryContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reset = () => {
  const { setEmail, email, username, setUsername } =useContext(RecoveryContext);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user=localStorage.getItem("user")

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!password || !confirmpassword) {
      setError("Both password fields are required.");
      return;
    }
  
    if (password !== confirmpassword) {
      setError("Passwords do not match.");
      return;
    }
  
    // Check if the `user` variable is an email or username
    const isEmail = user.includes("@");
  
    try {
      const response = await axios.post(
        "http://localhost:3200/api/resetpassword",
        {
          email: isEmail ? user : null,
          username: isEmail ? null : user,
          password,
          confirmpassword: confirmpassword,
        }
      );
  
      if (response.status === 200) {
        setMessage("Password updated successfully.");
        navigate("/Login"); // Redirect to login page
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
        <h2 className="forget-password-title">Reset Password?</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        {message && <p className="form-message">{message}</p>}{" "}
        {/* Display success message */}
        <input value={user} disabled />
        <label htmlFor="newpassword" className="form-label">
          New Password
        </label>
        <input
          type="password"
          placeholder="Enter new password"
          id="emailOrUsername"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          id="confirmpassword"
          className="form-input"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <button type="submit" className="form-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default Reset;
