import React, { useContext } from "react";
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
  } = useContext(RecoveryContext);

  // Toggle Report Card Dropdown
  const toggleReportCardDropdown = () => {
    setShowReportCardDropdown(!showReportCardDropdown);
  };

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
          aria-expanded={showReportCardDropdown}
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
