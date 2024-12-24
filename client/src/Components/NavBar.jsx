import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./HomePage.css";
import { RecoveryContext } from "../App";

const NavBar = () => {
  const navigate = useNavigate();
  const {
    isLogin,
    setLogin,
    setSelectedClass,
    showReportCardDropdown,
    setShowReportCardDropdown,
    showMarklistDropdown,
    setShowMarklistDropdown,
  } = useContext(RecoveryContext);

  // Toggle Report Card Dropdown
  const toggleReportCardDropdown = () => {
    setShowReportCardDropdown(!showReportCardDropdown);
    setShowMarklistDropdown(false); // Close the Marklist dropdown
  };

  // Toggle Marklist Dropdown
  const toggleMarklistDropdown = () => {
    setShowMarklistDropdown(!showMarklistDropdown);
    setShowReportCardDropdown(false); // Close the Report Card dropdown
  };

  // Handle Class Selection for Report Card
  const handleClassSelection = (className) => {
    setSelectedClass(className);
    if (["Nursery", "Kg", "I", "II"].includes(className)) {
      navigate(`/ReportCardNurto2/?class=${className}`);
    } else if (["III", "IV", "V"].includes(className)) {
      navigate(`/ReportCard3to5/?class=${className}`);
    } else {
      navigate(`/ReportCard6to8/?class=${className}`);
    }
  };

  // Handle Class Selection for Marklist
  const handleClassMarklist = (classMarlist) => {
    setSelectedClass(classMarlist);
    navigate(`/Marklist/?class=${classMarlist}`);
  };

  // Handle Login/Logout
  const handleLogin = () => {
    setLogin(false);
    localStorage.setItem("islogin", "false");
    navigate("/");
  };

  return (
    <div className="navbar">
      <NavLink className="nav-items" to="/">
        Home
      </NavLink>

      {/* Report Card Dropdown */}
      <div className="dropdown">
        <div
          className="nav-items dropdown-toggle"
          onClick={toggleReportCardDropdown}
        >
          Report Card
        </div>
        {showReportCardDropdown && (
          <div className="dropdown-menu">
            {[
              "Nursery",
              "Kg",
              "I",
              "II",
              "III",
              "IV",
              "V",
              "VI",
              "VII",
              "VIII",
            ].map((className) => (
              <div
                key={className}
                className="dropdown-item"
                onClick={() => handleClassSelection(className)}
              >
                {className}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Marklist Dropdown */}
      <div className="dropdown">
        <div
          className="nav-items dropdown-toggle"
          onClick={toggleMarklistDropdown}
        >
          Marklist
        </div>
        {showMarklistDropdown && (
          <div className="dropdown-menu">
            {[
              "Nursery",
              "Kg",
              "I",
              "II",
              "III",
              "IV",
              "V",
              "VI",
              "VII",
              "VIII",
            ].map((className) => (
              <div
                key={className}
                className="dropdown-item"
                onClick={() => handleClassMarklist(className)}
              >
                {className}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Login/Logout Button */}
      {isLogin ? (
        <button className="nav-items" onClick={handleLogin}>
          SignOut
        </button>
      ) : (
        <button className="nav-items" onClick={() => navigate("/Login")}>
          SignIn
        </button>
      )}
    </div>
  );
};

export default NavBar;
