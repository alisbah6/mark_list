import React, { useState, } from "react";
import NavBar from "../Components/NavBar";
import "./ReportCard.css";
import Logo from "../Images/logo.png";
import ReportHeader2 from "../Images/reportcardhead2.png";
import ReportFooter2 from "../Images/reportcardfooter2.png";
import html2pdf from "html2pdf.js";

const ReportCard3to5 = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const [formData, setFormData] = useState({
    studentName: "",
    classSection: "",
    fatherName: "",
    motherName: "",
    admissionNo: "",
    dob: "",
  });
  const [tableData, setTableData] = useState([
    { subject: "Quran & IS", values: ["", "", "", "", "", ""] },
    { subject: "English", values: ["", "", "", "", "", ""] },
    { subject: "Hindi", values: ["", "", "", "", "", ""] },
    { subject: "Urdu", values: ["", "", "", "", "", ""] },
    { subject: "Mathematics", values: ["", "", "", "", "", ""] },
    { subject: "EVS", values: ["", "", "", "", "", ""] },
  ]);
  const [formDataPercent, setFormDataPercent] = useState({
    overall: "",
    percentage: "",
    position: "",
  });
  const [formDataPerform, setFormDataPerform] = useState({
    generalKnowledge1: "",
    computer1: "",
    generalKnowledge2: "",
    computer2: "",
    artEducationTerm1: '',
    artEducationTerm2: '',
    physicalHealthEducationTerm1: '',
    physicalHealthEducationTerm2: '',
    moralEducationLifeSkillsTerm1: '',
    moralEducationLifeSkillsTerm2: '',
    participationInSchoolProgramTerm1: '',
    participationInSchoolProgramTerm2: '',
    responsibleTowardsDutyTerm1: '',
    responsibleTowardsDutyTerm2: '',
    disciplineTerm1: '',
    disciplineTerm2: '',
    punctualityTerm1: '',
    punctualityTerm2: '',
  });

  const [formAttendance, setFormAttendance] = useState({
    attendanceTerm1: '',
    attendanceTerm2: '',
  });

  const [isFixed, setIsFixed] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangesoftable = (rowIndex, colIndex, value) => {
    const updatedTable = [...tableData];
    updatedTable[rowIndex].values[colIndex] = value;
    setTableData(updatedTable);
  };
  const handleChangePercent = (e) => {
    const { name, value } = e.target;
    setFormDataPercent((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangePerform = (e) => {
    const { name, value } = e.target;
    setFormDataPerform((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeAttendance = (e) => {
    const { name, value } = e.target;
    setFormAttendance((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const element = document.getElementById("report-card-content");

    // Manually control page breaks by adding CSS classes or dynamically adjusting content.
    const options = {
      filename: `ReportCard_${currentYear}-${nextYear}.pdf`, // PDF filename
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 }, // Increase canvas resolution
      jsPDF: {
        unit: "mm",
        format: [203.175, 300.0], // Custom page size (width x height in mm)
        orientation: "portrait",
      },
    };

    html2pdf().from(element).set(options).save();
  };
  const handleFix = () => {
    setIsFixed(true);
  };

  return (
    <div>
      <NavBar />
      <div className="report-card" id="report-card-content">
        <section className="page1">
          <div className="backheader">
            <img src={ReportHeader2} alt="" />
          </div>
          <div className="school-header">
            <img src={Logo} className="logo-class" alt="School Logo" />
            <h2>Shaheen Public School</h2>
            <p>Recognized by Directorate of Education, Government of Delhi</p>
            <p>Website: www.shaheenpublicschool.in</p>
            <p>Contact No.: 26942364 / 26942367</p>
          </div>
          <h3 className="reportcard-heading">
            Report Card ({currentYear}-{nextYear})
          </h3>
          <div className="student-details">
            <table className="student-table">
              <tbody>
                <tr>
                  <td style={{width:"20%"}}>
                    <label>Student's Name:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.studentName || " "}</span> // Convert to label
                    ) : (
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Class / Section:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.classSection || " "}</span>
                    ) : (
                      <input
                        type="text"
                        name="classSection"
                        value={formData.classSection}
                        onChange={handleChange}
                        placeholder="Enter class/section"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Father's Name:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.fatherName || " "}</span>
                    ) : (
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="Enter father's name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Mother's Name:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.motherName || " "}</span>
                    ) : (
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        placeholder="Enter mother's name"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Admission No.:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.admissionNo || " "}</span>
                    ) : (
                      <input
                        type="text"
                        name="admissionNo"
                        value={formData.admissionNo}
                        onChange={handleChange}
                        placeholder="Enter admission number"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Date of Birth:</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <span>{formData.dob || " "}</span>
                    ) : (
                      <input
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        placeholder="Enter date of birth"
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="backfooter">
            <img src={ReportFooter2} alt="" />
          </div>
        </section>
        <div className="page-break"></div>
        {/* TERM-I Section */}
        <section className="page2">
          <h2>TERM-I</h2>
          <hr />
          <h2>ACADEMIC PERFORMANCE</h2>
          <table className="academic-table">
            <thead>
              <tr>
                <th style={{width:"19%"}}>SUBJECT</th>
                <th>
                  UT-1
                  <br />
                  10
                </th>
                <th>
                  Notebook
                  <br />5
                </th>
                <th>
                  Subject Enrichment
                  <br />5
                </th>
                <th>
                  Half-Yearly Exam
                  <br />
                  80
                </th>
                <th>
                  Marks Obtained
                  <br />
                  100
                </th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="subject-row">
                  <td>{row.subject}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex}>
                      {isFixed ? (
                        <span>{value || " "}</span> // Show label if fixed
                      ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleChangesoftable(
                              rowIndex,
                              colIndex,
                              e.target.value
                            )
                          }
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>
          <div className="column1">
            <form>
              <label>Percentage:</label>
              {isFixed ? (
                <span>{formDataPercent.percentage || " "}</span> // Convert to label
              ) : (
                <input
                  name="percentage"
                  value={formDataPercent.percentage}
                  onChange={handleChangePercent}
                  placeholder="Enter percentage"
                />
              )}
              <label>Position:</label>
              {isFixed ? (
                <span>{formDataPercent.position || " "}</span> // Convert to label
              ) : (
                <input
                  name="position"
                  value={formDataPercent.position}
                  onChange={handleChangePercent}
                  placeholder="Enter position"
                />
              )}
            </form>
          </div>
          <br></br>
          <hr style={{ border: "2px solid black", margin: "10px 0" }} />
          {/* TERM-II Section */}
          <h2>TERM-II</h2>
          <hr />
          <h2>ACADEMIC PERFORMANCE</h2>
          <table className="academic-table">
            <thead>
              <tr>
                <th style={{width:"19%"}}>SUBJECT</th>
                <th>
                  UT-1
                  <br />
                  10
                </th>
                <th>
                  Notebook
                  <br />5
                </th>
                <th>
                  Subject Enrichment
                  <br />5
                </th>
                <th>
                  Half-Yearly Exam
                  <br />
                  80
                </th>
                <th>
                  Marks Obtained
                  <br />
                  100
                </th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="subject-row">
                  <td>{row.subject}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex}>
                      {isFixed ? (
                        <span>{value || " "}</span> // Show label if fixed
                      ) : (
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleChangesoftable(
                              rowIndex,
                              colIndex,
                              e.target.value
                            )
                          }
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <div className="overall">
            <form>
              <label>Percentage:</label>
              {isFixed ? (
                <span>{formDataPercent.percentage || " "}</span> // Convert to label
              ) : (
                <input
                  name="percentage"
                  value={formDataPercent.percentage}
                  onChange={handleChangePercent}
                  placeholder="Enter percentage"
                />
              )}
            </form>
            </div>
            <div className="column1">
              <form>
                <label>Overall Percentage (Term I + Term II):</label>
                {isFixed ? (
                  <span>{formData.overall || " "}</span> // Convert to label
                ) : (
                  <input
                    name="percentage"
                    value={formDataPercent.overall}
                    onChange={handleChangePercent}
                    placeholder="Enter overall percentage"
                  />
                )}
                <label>Position:</label>
                {isFixed ? (
                  <span>{formDataPercent.position || " "}</span> // Convert to label
                ) : (
                  <input
                    name="position"
                    value={formDataPercent.position}
                    onChange={handleChangePercent}
                    placeholder="Enter position"
                  />
                )}
              </form>
            </div>
            <br></br>
            <br></br>
          <hr />
          {/* CO-CURRICULAR PERFORMANCE Section */}
          <h2>CO-CURRICULAR PERFORMANCE</h2>

          <table className="co-curricular-table">
            <thead>
              <tr>
                <th>SUBJECT</th>
                <th>Term I</th>
                <th>Term II</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "General Knowledge",
                  keyTerm1: "generalKnowledgeTerm1",
                  keyTerm2: "generalKnowledgeTerm2",
                },
                {
                  name: "Computer",
                  keyTerm1: "computerTerm1",
                  keyTerm2: "computerTerm2",
                },
                {
                  name: "Art Education",
                  keyTerm1: "artEducationTerm1",
                  keyTerm2: "artEducationTerm2",
                },
                {
                  name: "Physical & Health Education",
                  keyTerm1: "physicalHealthEducationTerm1",
                  keyTerm2: "physicalHealthEducationTerm2",
                },
                {
                  name: "Moral Education & Life Skills",
                  keyTerm1: "moralEducationLifeSkillsTerm1",
                  keyTerm2: "moralEducationLifeSkillsTerm2",
                },
                {
                  name: "Participation in School Program",
                  keyTerm1: "participationInSchoolProgramTerm1",
                  keyTerm2: "participationInSchoolProgramTerm2",
                },
                {
                  name: "Responsible Towards duty",
                  keyTerm1: "responsibleTowardsDutyTerm1",
                  keyTerm2: "responsibleTowardsDutyTerm2",
                },
                {
                  name: "Discipline",
                  keyTerm1: "disciplineTerm1",
                  keyTerm2: "disciplineTerm2",
                },
                {
                  name: "Punctuality",
                  keyTerm1: "punctualityTerm1",
                  keyTerm2: "punctualityTerm2",
                },
              ].map((item, index) => (
                <tr className="subject-row2" key={index}>
                  <td>
                    <label>{item.name}</label>
                  </td>
                  <td>
                    {isFixed ? (
                      <label>{formDataPerform[item.keyTerm1] || " "}</label> // Display Term 1 value as label
                    ) : (
                      <input
                        type="text"
                        name={item.keyTerm1}
                        value={formDataPerform[item.keyTerm1]}
                        onChange={handleChangePerform}
                      />
                    )}
                  </td>

                  {/* Term 2 input or label */}
                  <td>
                    {isFixed ? (
                      <label>{formDataPerform[item.keyTerm2] || " "}</label> // Display Term 2 value as label
                    ) : (
                      <input
                        type="text"
                        name={item.keyTerm2}
                        value={formDataPerform[item.keyTerm2]}
                        onChange={handleChangePerform}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="page3">
          <div className="remarks-section">
            {/* General Remarks for Term I */}
            <div className="remarks-term">
              <h4 className="remarks-heading">GENERAL REMARK (Term I)</h4>
              <hr className="line" />
              <textarea className="remarks-textarea" cols={243}></textarea>
            </div>

            {/* Attendance for Term I */}
            <div className="attendance-term">
              <form>
              <label className="attendance-heading">Attendance (Term I):</label>
          {isFixed ? (
            <label>{formAttendance.attendanceTerm1 || " "}%</label> // Display Term I attendance as label
          ) : (
            <div>
              <input
                type="number"
                name="attendanceTerm1"
                value={formAttendance.attendanceTerm1}
                onChange={handleChangeAttendance}
              />
              <span>%</span>
            </div>
          )}
              </form>
            </div>

            {/* General Remarks for Term II */}
            <div className="remarks-term">
              <h4 className="remarks-heading">GENERAL REMARK (Term II)</h4>
              <hr className="line" />
              <textarea className="remarks-textarea" cols={243}></textarea>
            </div>

            {/* Attendance for Term II */}
            <div className="attendance-term">
              <form>
              <label className="attendance-heading">Attendance (Term II):</label>
          {isFixed ? (
            <label>{formAttendance.attendanceTerm2 || " "}%</label> // Display Term I attendance as label
          ) : (
            <div>
              <input
                type="number"
                name="attendanceTerm2"
                value={formAttendance.attendanceTerm2}
                onChange={handleChangeAttendance}
              />
              <span>%</span>
            </div>
          )}
              </form>
            </div>
            {/* Promoted to Class and Issue Date */}
            <div className="promotion-section">
              <form>
                <label className="promotion-heading">Promoted to Class:</label>
                <input type="text" />
                <br />
                <label className="issue-date-heading">Issue Date:</label>
                <input type="date" />
              </form>
            </div>
            {/* Signatories Section */}
            <div class="signatories-section">
              <span class="left-word">Class Teacher</span>
              <span class="center-word">Parents</span>
              <span class="right-word">Principal</span>
            </div>
          </div>
          <h2 className="grades-heading">GRADES</h2>
          <hr />
          <br />
          <div className="grades-performance-section">
            {/* Academic Performance Table */}
            <table className="grades-table">
              <thead>
                <tr>
                  <th className="academic-performance-heading" colSpan="2">
                    Academic Performance
                  </th>
                </tr>
                <tr>
                  <td className="table-header">Marks Range</td>
                  <td className="table-header">Grades</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-data">91-100</td>
                  <td className="table-data">A1</td>
                </tr>
                <tr>
                  <td className="table-data">81-90</td>
                  <td className="table-data">A2</td>
                </tr>
                <tr>
                  <td className="table-data">71-80</td>
                  <td className="table-data">B1</td>
                </tr>
                <tr>
                  <td className="table-data">61-70</td>
                  <td className="table-data">B2</td>
                </tr>
                <tr>
                  <td className="table-data">51-60</td>
                  <td className="table-data">C1</td>
                </tr>
                <tr>
                  <td className="table-data">41-50</td>
                  <td className="table-data">C2</td>
                </tr>
                <tr>
                  <td className="table-data">33-40</td>
                  <td className="table-data">D</td>
                </tr>
                <tr>
                  <td className="table-data">32 & Below</td>
                  <td className="table-data">E Needs Improvement</td>
                </tr>
              </tbody>
            </table>

            {/* Co-Curricular Performance Table */}

            <table className="co-curricular-performace-table">
              <thead>
                <tr>
                  <th className="co-curricular-performance-heading" colSpan="2">
                    Co-Curricular Performance
                  </th>
                </tr>
                <tr>
                  <td className="table-header">Grade</td>
                  <td className="table-header">Remark</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-data">A</td>
                  <td className="table-data">Outstanding</td>
                </tr>
                <tr>
                  <td className="table-data">B</td>
                  <td className="table-data">Very Good</td>
                </tr>
                <tr>
                  <td className="table-data">C</td>
                  <td className="table-data">Fair</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <button className="pdf-button download" onClick={handleDownload}>
        Download PDF
      </button>
      <button className="pdf-button" onClick={handleFix}>
        OK
      </button>
    </div>
  );
};

export default ReportCard3to5;
