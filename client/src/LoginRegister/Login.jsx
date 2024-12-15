import React, { useState } from "react";
import "./LR.css"; // Make sure the CSS file is linked properly
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button  className="form-button" >Login</button>
      </form>
    </div>
  );
};

export default Login;
