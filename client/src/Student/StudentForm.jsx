import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    classSection: '',
    fatherName: '',
    motherName: '',
    admissionNo: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server, log data, etc.)
    console.log(studentData);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Student Form</h2>
      <table className="student-table">
        <tbody>
          <tr>
            <td className="label-cell">
              <label className="student-label">Student's Name:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="text"
                name="name"
                placeholder="Enter student's name"
                value={studentData.name}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="label-cell">
              <label className="student-label">Class / Section:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="text"
                name="classSection"
                placeholder="Enter class/section"
                value={studentData.classSection}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="label-cell">
              <label className="student-label">Father's Name:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="text"
                name="fatherName"
                placeholder="Enter father's name"
                value={studentData.fatherName}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="label-cell">
              <label className="student-label">Mother's Name:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="text"
                name="motherName"
                placeholder="Enter mother's name"
                value={studentData.motherName}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="label-cell">
              <label className="student-label">Admission No.:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="text"
                name="admissionNo"
                placeholder="Enter admission number"
                value={studentData.admissionNo}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="label-cell">
              <label className="student-label">Date of Birth:</label>
            </td>
            <td className="input-cell">
              <input
                className="student-input"
                type="date"
                name="dob"
                value={studentData.dob}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default StudentForm;
