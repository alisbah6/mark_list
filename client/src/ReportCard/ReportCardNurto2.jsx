import React,{useState} from 'react'
import NavBar from '../Components/NavBar';
import Logo from "../Images/logo.png";
import "./ReportCard.css";
import html2pdf from "html2pdf.js";
import ReportHeader1 from "../Images/reportcardheader1.png";
import ReportFooter1 from "../Images/reportcardfooter1.png";
const ReportCardNurto2 = () => {
     const currentYear = new Date().getFullYear();
      const nextYear = currentYear + 1;
        const [isFixed, setIsFixed] = useState(false);

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
        
      const [formData, setFormData] = useState({
        studentName: "",
        classSection: "",
        fatherName: "",
        motherName: "",
        admissionNo: "",
        dob: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
  return (
    <div>
         <NavBar />
    <div className="report-card" id="report-card-content">
      <section className="page1">
        <div className="backheader">
          <img src={ReportHeader1} alt="" />
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
                <td>
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
        <div className="backfooter1">
          <img src={ReportFooter1} alt="" />
        </div>
      </section>
      <section className='page2'>
<h2 className=''>LANGUAGE</h2>
<hr className='line'/>
<table className='subject-table'>
  <thead>
    <th>LANGUAGE-ENGLISH</th>
    <th>TERM I</th>
    <th>TERM II</th>
    <th>REMARKS</th>
  </thead>
  <tbody>
    <tr>
    <td className='subject-heading'>Reading Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term I</td>
    </tr>
    <tr>
    <td className='subject-part'>Pronunciation and Accuracy</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Fluency</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Expression</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Comprehension</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Writing Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Handwriting</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'> Dictation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Speaking Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term II</td>
    </tr>
    <tr>
    <td className='subject-part'> Clarity</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>  Sentence Construction</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Recitation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Listening Skills</td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Oral Comprehension</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Attention</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr></tr>
  </tbody>
</table>
<hr/>
<table className='subject-table'>
  <thead>
    <th>LANGUAGE-HINDI</th>
    <th>TERM I</th>
    <th>TERM II</th>
    <th>REMARKS</th>
  </thead>
  <tbody>
    <tr>
    <td className='subject-heading'>Reading Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term I</td>
    </tr>
    <tr>
    <td className='subject-part'>Pronunciation and Accuracy</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Fluency</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Expression</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Comprehension</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Writing Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Handwriting</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'> Dictation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Speaking Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term II</td>
    </tr>
    <tr>
    <td className='subject-part'> Clarity</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>  Sentence Construction</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Recitation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Listening Skills</td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Oral Comprehension</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Attention</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr></tr>
  </tbody>
</table>
<hr/>
<table className='subject-table'>
  <thead>
    <th>LANGUAGE-URDU</th>
    <th>TERM I</th>
    <th>TERM II</th>
    <th>REMARKS</th>
  </thead>
  <tbody>
    <tr>
    <td className='subject-heading'>Reading Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term I</td>
    </tr>
    <tr>
    <td className='subject-part'>Pronunciation and Accuracy</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Fluency</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Expression</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Comprehension</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Writing Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Handwriting</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'> Dictation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Speaking Skills</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='term'>Term II</td>
    </tr>
    <tr>
    <td className='subject-part'> Clarity</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Vocabulary</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>  Sentence Construction</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Recitation</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr>
    <td className='subject-heading'>Listening Skills</td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    <td className='subjeact-mark'></td>
    </tr>
    <tr>
    <td className='subject-part'>Attention</td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    <td className='subject-mark'></td>
    </tr>
    <tr></tr>
  </tbody>
</table>
<hr className='line'/>
      </section>
      </div>
      <button className="pdf-button download" onClick={handleDownload}>
        Download PDF
      </button>
      <button className="pdf-button" onClick={handleFix}>
        OK
      </button>
      </div>
  )
}

export default ReportCardNurto2