import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './HomePage.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  // Function to handle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle the selection and redirect
  const handleClassSelection = (className) => {    
    if (className >= "III" && className <= "V") {
      setSelectedClass(className);
      navigate(`/ReportCard3to5/?class=${className}`);
    } else {
      setSelectedClass(className);
      navigate(`/otherPage`); // Replace this with the desired route for other classes
    }
  };
  

  return (
    <div className="navbar">
      <NavLink className="nav-items" to="/">Home</NavLink>
      
      {/* Dropdown Menu for Report Card */}
      <div className="dropdown">
        <div className="nav-items dropdown-toggle" onClick={toggleDropdown}>
          Report Card 
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleClassSelection("Nursery")}>Nursery</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("Kg")}>Kg</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("I")}>I</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("II")}>II</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("III")}>III</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("IV")}>IV</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("V")}>V</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI")}>VI</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII")}>VII</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII")}>VIII</div>
          </div>
        )}
      </div>

      <NavLink className="nav-items" to="/MarkList">Mark List</NavLink>
      <div
        className="nav-items logout"
        onClick={() => navigate('/')}
      >
        Logout
      </div>
    </div>
  );
};

export default NavBar;
