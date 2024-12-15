import React from 'react'
import NavBar from '../Components/NavBar'
import { useLocation } from 'react-router-dom';
import './ReportCard.css'
import Logo from '../Images/logo.png'

const ReportCard = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  return (
    <div>
        <NavBar/>
        <h1 className='reportheading'>Report Card {currentYear} - {nextYear}</h1>
       <div className="report-card">
      <div className="school-header">
        <img src={Logo} alt="School Logo" />
        <h2>Shaheen Public School</h2>
        <p>Recognized by Directorate of Education, Government of Delhi</p>
        <p>Website: www.shaheenpublicschool.in</p>
        <p>Contact No.: 26942364 / 26942367</p>
      </div>

      <div className="student-details">
  <h3>Report Card ({currentYear}-{nextYear})</h3>
  <table className="student-table">
    <tbody>
      <tr>
        <td className="label-cell"><label className="student-label">Student's Name:</label></td>
        <td className="input-cell"><input className="student-input" type="text" placeholder="Enter student's name" /></td>
      </tr>
      <tr>
        <td className="label-cell"><label className="student-label">Class / Section:</label></td>
        <td className="input-cell"><input className="student-input" type="text" placeholder="Enter class/section" /></td>
      </tr>
      <tr>
        <td className="label-cell"><label className="student-label">Father's Name:</label></td>
        <td className="input-cell"><input className="student-input" type="text" placeholder="Enter father's name" /></td>
      </tr>
      <tr>
        <td className="label-cell"><label className="student-label">Mother's Name:</label></td>
        <td className="input-cell"><input className="student-input" type="text" placeholder="Enter mother's name" /></td>
      </tr>
      <tr>
        <td className="label-cell"><label className="student-label">Admission No.:</label></td>
        <td className="input-cell"><input className="student-input" type="text" placeholder="Enter admission number" /></td>
      </tr>
      <tr>
        <td className="label-cell"><label className="student-label">Date of Birth:</label></td>
        <td className="input-cell"><input className="student-input" type="date" /></td>
      </tr>
    </tbody>
  </table>
</div>
{/* TERM-I Section */}
<section className="academic-performance">
        <h2>TERM-I</h2>
        <h3>ACADEMIC PERFORMANCE</h3>

        <table className="academic-table">
          <thead>
            <tr>
              <th>SUBJECT</th>
              <th>UT-1</th>
              <th>Notebook</th>
              <th>Subject Enrichment</th>
              <th>Half-Yearly Exam</th>
              <th>Marks Obtained</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="subject-row">
              <td>Quran & IS</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>English</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Hindi</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Urdu</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> <tr className="subject-row">
              <td>Maths</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> <tr className="subject-row">
              <td>EVS</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Percentage:</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Position:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* TERM-II Section */}
      <section className="academic-performance">
        <h2>TERM-II</h2>
        <h3>ACADEMIC PERFORMANCE</h3>

        <table className="academic-table">
          <thead>
            <tr>
              <th>SUBJECT</th>
              <th>UT-2</th>
              <th>Notebook</th>
              <th>Subject Enrichment</th>
              <th>Final Exam</th>
              <th>Marks Obtained</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
          <tr className="subject-row">
              <td>Quran & IS</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>English</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Hindi</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Urdu</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> <tr className="subject-row">
              <td>Maths</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> <tr className="subject-row">
              <td>EVS</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Percentage:</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Overall Percentage (Term I + Term II):</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Position:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CO-CURRICULAR PERFORMANCE Section */}
      <section className="co-curricular-performance">
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
            <tr className="subject-row">
              <td>General Knowledge</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Computer</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Art Education</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Physical & Health Education</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Moral Education & Life Skills</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Participation in School Program</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Responsible Towards duty</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Discipline</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="subject-row">
              <td>Punctuality</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="remarks-section">
      {/* General Remarks for Term I */}
      <div className="remarks-term">
        <h4 className="remarks-heading">General Remarks (Term I)</h4>
        <hr className="remarks-hr"/>
        <textarea className="remarks-textarea" cols={243}></textarea>
        <hr className="remarks-hr"/>
      </div>

      {/* Attendance for Term I */}
      <div className="attendance-term">
        <h4 className="attendance-heading">Attendance (Term I): %</h4>
        <hr className="attendance-hr"/>
      </div>

      {/* General Remarks for Term II */}
      <div className="remarks-term">
        <h4 className="remarks-heading">General Remarks (Term II)</h4>
        <hr className="remarks-hr"/>
        <textarea className="remarks-textarea" cols={243}></textarea>
        <hr className="remarks-hr"/>
      </div>

      {/* Attendance for Term II */}
      <div className="attendance-term">
        <h4 className="attendance-heading">Attendance (Term II): %</h4>
        <hr className="attendance-hr"/>
      </div>

      {/* Promoted to Class and Issue Date */}
      <div className="promotion-section">
        <h4 className="promotion-heading">Promoted to Class:</h4>
        <h4 className="issue-date-heading">Issue Date:</h4>
        <hr className="promotion-hr"/>
      </div>

      {/* Signatories Section */}
      <div className="signatories-section">
        <p className="signatory">Class Teacher</p>
        <p className="signatory">Principal</p>
        <p className="signatory">Parent / Guardian</p>
        <hr className="signatories-hr"/>
      </div>
    </div>
    <div className="grades-performance-section">
      {/* Academic Performance Table */}
      <h2 className="grades-heading">GRADES</h2>
      <h3 className="academic-performance-heading">Academic Performance</h3>

      <table className="grades-table">
        <thead>
          <tr>
            <th className="table-header">Marks Range</th>
            <th className="table-header">Grades</th>
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
      <h3 className="co-curricular-performance-heading">Co-Curricular Performance</h3>

      <table className="co-curricular-table">
        <thead>
          <tr>
            <th className="table-header">Grade</th>
            <th className="table-header">Remark</th>
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
    </div>
    </div>
  )
}

export default ReportCard