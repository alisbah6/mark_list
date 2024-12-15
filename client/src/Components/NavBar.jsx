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
    const classNumber = parseInt(className); // Convert the class name to a number to compare
    
    if (classNumber >= 3 && classNumber <= 5) {
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
            <div className="dropdown-item" onClick={() => handleClassSelection("Nursery A")}>Nursery A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("Nursery B")}>Nursery B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("Kg A")}>Kg A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("Kg B")}>Kg B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("Kg C")}>Kg C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("I A")}>I A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("I B")}>I B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("I C")}>I C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("I D")}>I D</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("II A")}>II A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("II B")}>II B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("II C")}>II C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("II D")}>II D</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("3")}>III</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("4")}>IV</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("5")}>V</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI A")}>VI A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI B")}>VI B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI C")}>VI C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI D")}>VI D</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI E")}>VI E</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VI F")}>VI F</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII A")}>VII A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII B")}>VII B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII C")}>VII C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII D")}>VII D</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII E")}>VII E</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VII F")}>VII F</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII A")}>VIII A</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII B")}>VIII B</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII C")}>VIII C</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII D")}>VIII D</div>
            <div className="dropdown-item" onClick={() => handleClassSelection("VIII E")}>VIII E</div>
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
