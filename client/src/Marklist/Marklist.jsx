import React, { useState, useContext } from "react";
import NavBar from "../Components/NavBar";
import "./Marklist.css";
import { RecoveryContext } from "../App";

const Marklist = () => {
  const { isLogin } = useContext(RecoveryContext);
  const [rows, setRows] = useState([{ name: "", age: "" }]);
  const [isEditing, setIsEditing] = useState(false);
  const [classvalue, setClassvalue] = useState("");
  const [sections, setSection] = useState("");

  // Add a new row
  const addRow = () => {
    if (isLogin) {
      setRows([...rows, { name: "", age: "" }]);
    } else {
      alert("You must be logged in to add rows.");
    }
  };

  // Remove a row
  const removeRow = (index) => {
      const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
      setRows(updatedRows);  
  };

  // Handle input changes
  const handleInputChange = (index, event) => {
    if (isLogin && isEditing) {
      const { name, value } = event.target;
      const updatedRows = [...rows];
      updatedRows[index][name] = value;
      setRows(updatedRows);
    } else if (!isLogin) {
      alert("You must be logged in to edit rows.");
    }
  };

  // Save changes
  const handleSave = () => {
    if (isLogin) {
      setIsEditing(false);
      alert("Changes saved successfully!");
      // Here, you can add API logic to save data to a database if required
    } else {
      alert("You must be logged in to save changes.");
    }
  };

  // Enable edit mode
  const handleEdit = () => {
    if (isLogin) {
      setIsEditing(true);
    } else {
      alert("You must be logged in to edit rows.");
    }
  };

  return (
    <div className="marklist-container">
      <NavBar />
      <h3 className="marklist-heading">Marklist</h3>
      <form className="marklist-form">
        <div className="form-group">
          <label htmlFor="class-dropdown">Class</label>
          <select
            id="class-dropdown"
            name="classvalue"
            value={classvalue}
            onChange={(e) => setClassvalue(e.target.value)}
            required
          >
            <option value="">Select Class</option>
            {["Nursery", "Kg", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map(
              (classOption) => (
                <option key={classOption} value={classOption}>
                  {classOption}
                </option>
              )
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="section-dropdown">Section</label>
          <select
            id="section-dropdown"
            name="sections"
            value={sections}
            onChange={(e) => setSection(e.target.value)}
            required
          >
            <option value="">Select Section</option>
            {["A", "B", "C", "D", "E"].map((sectionOption) => (
              <option key={sectionOption} value={sectionOption}>
                {sectionOption}
              </option>
            ))}
          </select>
        </div>
      </form>
      <h2 className="classname">
          {classvalue} {sections}
        </h2>
      <table className="marklist-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={row.name}
                  onChange={(event) => handleInputChange(index, event)}
                  className="input-name"
                  disabled={!isEditing}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={row.age}
                  onChange={(event) => handleInputChange(index, event)}
                  className="input-marks"
                />
              </td>
              <td className="action-col">
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="remove-row-btn"
                  >
                    Remove
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="action-buttons">
        {isLogin && (
          <button type="button" onClick={addRow} className="edit-btn">
            Add Row
          </button>
        )}
        {isLogin && (
          <button type="button" onClick={handleEdit} className="edit-btn">
            Edit Name
          </button>
        )}
        {isLogin && (
          <button type="button" onClick={handleSave} className="save-btn">
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Marklist;
