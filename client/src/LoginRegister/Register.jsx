import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LR.css";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [role, setRole] = useState("");

  const handleSelectChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="register-container">
      <form id="register-form" className="register-form">
        <h2 className="register-title">Register</h2>
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          className="form-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          id="confirmpassword"
          className="form-input"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        
        <label htmlFor="role" className="form-label">Registering As</label>
        <select
          id="role"
          value={role}
          onChange={handleSelectChange}
          className="form-select"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
        </select>
        
        <button type="submit" className="form-button">Register</button>
        <div className="form-footer">
          <Link to="/Login" className="form-link">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
