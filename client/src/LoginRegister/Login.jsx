import React, { useState, useContext } from "react";
import "./LR.css"; // Make sure the CSS file is linked properly
import { useNavigate } from 'react-router-dom';
import { RecoveryContext } from '../App';

const Login = () => {
  const { setEmail, email, setLogin } = useContext(RecoveryContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Basic validation (you can expand this with more complex checks)
    if (email === "admin" && password === "12345678") {
      localStorage.setItem("islogin", "true");
      setLogin(true);
      navigate("/"); // Redirect after login
      setPassword(""); // Clear password field after successful login
      setError(""); // Reset error message
    } else {
      setError("Invalid email or password!"); // Display error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submit}>
        <h2 className="login-title">Login</h2>
        
        {error && <div className="error-message">{error}</div>} {/* Display error message if there's any */}

        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          className="form-input"
          value={email} // Bind email input with state
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="form-input"
          value={password} // Bind password input with state
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
