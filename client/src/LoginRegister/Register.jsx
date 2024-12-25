import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./LR.css";
import { RecoveryContext } from "../App";

const Register = () => {
  const { setEmail, email } = useContext(RecoveryContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging: Check state values
    console.log({ name, username, email, password, confirmpassword, role });

    // Validation
    if (!name || !username || !email || !password || !confirmpassword || !role) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3200/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          confirmpassword,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful!");
        setError("");
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        setRole("");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form id="register-form" className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          id="confirmpassword"
          className="form-input"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />

        <label htmlFor="role" className="form-label">Registering As</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-select"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
        </select>

        <button type="submit" className="form-button">Register</button>
        <div className="form-footer">
          <Link to="/" className="form-link">Home</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
