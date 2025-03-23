import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Logo from "../Images/logo.png";
import axios from "axios";
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
      image: { type: "png", quality: 0.99 },
      html2canvas: { scale: 4 }, // Increase canvas resolution
      jsPDF: {
        unit: "mm",
        format: [203.175, 300.0], // Custom page size (width x height in mm)
        orientation: "portrait",
      },
    };

    html2pdf().from(element).set(options).save();
  };
  const [formData, setFormData] = useState({
    studentname: "",
    classec: "",
    fatherName: "",
    motherName: "",
    admission: "",
    dob: "",
  });
  const [formAll, setFormAll] = useState({
    epro1: "",
    epro2: "",
    efluency1: "",
    efluency2: "",
    eexpresions1: "",
    eexpresions2: "",
    ecomprehension1: "",
    ecomprehension2: "",
    remark1: "",
    ehandwritting1: "",
    ehandwritting2: "",
    edictation1: "",
    edictation2: "",
    evocabulary1: "",
    evocabulary2: "",
    eclarity1: "",
    eclarity2: "",
    evocabulary3: "",
    evocabulary4: "",
    esentence1: "",
    esentence2: "",
    erecitation1: "",
    erecitation2: "",
    eoral1: "",
    eoral2: "",
    eattention1: "",
    eattention2: "",
    remark2: "",
    hpro1: "",
    hpro2: "",
    hfluency1: "",
    hfluency2: "",
    hexpresions1: "",
    hexpresions2: "",
    hcomprehension1: "",
    hcomprehension2: "",
    remark3: "",
    hhandwritting1: "",
    hhandwritting2: "",
    hdictation1: "",
    hdictation2: "",
    hvocabulary1: "",
    hvocabulary2: "",
    hclarity1: "",
    hclarity2: "",
    hvocabulary3: "",
    hvocabulary4: "",
    hsentence1: "",
    hsentence2: "",
    hrecitation1: "",
    hrecitation2: "",
    horal1: "",
    horal2: "",
    hattention1: "",
    hattention2: "",
    remark4: "",
    upro1: "",
    upro2: "",
    ufluency1: "",
    ufluency2: "",
    uexpresions1: "",
    uexpresions2: "",
    ucomprehension1: "",
    ucomprehension2: "",
    uhandwritting1: "",
    uhandwritting2: "",
    udictation1: "",
    udictation2: "",
    uvocabulary1: "",
    uvocabulary2: "",
    uclarity1: "",
    uclarity2: "",
    uvocabulary3: "",
    uvocabulary4: "",
    usentence1: "",
    usentence2: "",
    urecitation1: "",
    urecitation2: "",
    uattention1: "",
    uattention2: "",
    uremark2: "",
    mclarity1: "",
    mclarity2: "",
    mmentalmath1: "",
    mmentalmath2: "",
    mability1: "",
    mability2: "",
    remark5: "",
    remark6: "",
    remark7: "",
    remark8: "",
    igroup1: "",
    igroup2: "",
    iconcept1: "",
    iconcept2: "",
    egroup1: "",
    egroup2: "",
    egeneralawareness1: "",
    egeneralawareness2: "",
    econcept1: "",
    econcept2: "",
    ainterest1: "",
    ainterest2: "",
    aaptitute1: "",
    aaptitute2: "",
    acreative1: "",
    acreative2: "",
    pconfidence1: "",
    pconfidence2: "",
    pregularity1: "",
    pregularity2: "",
    ppunctuality1: "",
    ppunctuality2: "",
    pdiscipline1: "",
    pdiscipline2: "",
    pcreative1: "",
    pcreative2: "",
    setiquette1: "",
    setiquette2: "",
    scourteous1: "",
    scourteous2: "",
    srespect1: "",
    srespect2: "",
    penthusiam1: "",
    penthusiam2: "",
    pCoordination1: "",
    pCoordination2: "",
    pteam1: "",
    pteam2: "",
    general1: "",
    general2: "",
    attendance1: "",
    attendance2: "",
    promoted: "",
    issuedate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeAll = (e) => {
    const { name, value } = e.target;
    setFormAll((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const studentrecord = async (e) => {
    if (e) e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3200/api/newstudentrecord",
        formData
      );
      if (response.status === 201) {
        console.log("student record submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const newreportcard = async (e) => {
    if (e) e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3200/api/newreportcard",
        formAll
      );
      if (response.status === 201) {
        console.log("report card record submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFix = async () => {
    setIsFixed(true);
    await newreportcard();
    // await studentrecord();
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
            <p className="lower">Website: www.shaheenpublicschool.in</p>
            <p className="lower">Contact No.: 26942364 / 26942367</p>
          </div>
          <h3 className="reportcard-heading">
            Report Card ({currentYear}-{nextYear})
          </h3>
          <div className="student-details">
            <form onSubmit={studentrecord}>
              <table className="student-table">
                <tbody>
                  <tr>
                    <td style={{ width: "20%" }}>
                      <label>Name</label>
                    </td>
                    <td>
                      {isFixed ? (
                        <span>{formData.studentname || " "}</span> // Convert to label
                      ) : (
                        <input
                          type="text"
                          name="studentname"
                          value={formData.studentname}
                          onChange={handleChange}
                          placeholder="Enter student's name"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Class / Section</label>
                    </td>
                    <td>
                      {isFixed ? (
                        <span>{formData.classec || " "}</span>
                      ) : (
                        <input
                          type="text"
                          name="classec"
                          value={formData.classec}
                          onChange={handleChange}
                          placeholder="Enter class/section"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Father's Name</label>
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
                      <label>Mother's Name</label>
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
                      <label>Admission No.</label>
                    </td>
                    <td>
                      {isFixed ? (
                        <span>{formData.admission || " "}</span>
                      ) : (
                        <input
                          type="number"
                          name="admission"
                          value={formData.admission}
                          onChange={handleChange}
                          placeholder="Enter admission number"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Date of Birth</label>
                    </td>
                    <td>
                      {isFixed ? (
                        <span>{formData.dob || " "}</span>
                      ) : (
                        <input
                          type="date"
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
            </form>
          </div>
          <div className="backfooter1">
            <img src={ReportFooter1} alt="" />
          </div>
        </section>
        <form onSubmit={newreportcard}>
          <section className="page2">
            <h2 className="">LANGUAGE</h2>
            <hr className="line" />
            <table className="subject-table">
              <thead>
                <th className="head" style={{ width: "25%" }}>
                  LANGUAGE-ENGLISH
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "70%" }}
                >
                  REMARKS
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="subject-heading">Reading Skills</td>
                  <td></td>
                  <td></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term I
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Pronunciation and Accuracy</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.epro1 || " "}
                      </span>
                    ) : (
                      <input
                        name="epro1"
                        value={formAll.epro1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.epro2 || " "}
                      </span>
                    ) : (
                      <input
                        name="epro2"
                        value={formAll.epro2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark" rowSpan="8">
                    {isFixed ? (
                      <span>{formAll.remark1 || " "}</span>
                    ) : (
                      <textarea
                        placeholder="type here"
                        className="remarks"
                        style={{
                          width: "100%",
                          minHeight: "50px" /* Set a minimum height */,
                          border: "none",
                          outline: "none",
                          padding: "0",
                          boxSizing: "border-box",
                          resize: "none" /* Disable manual resizing */,
                          overflow: "hidden" /* Hide scrollbar */,
                        }}
                        name="remark1"
                        value={formAll.remark1}
                        onChange={handleChangeAll}
                        onInput={(e) => {
                          e.target.style.height = "auto"; // Reset height
                          e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                        }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Fluency</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.efluency1 || " "}
                      </span>
                    ) : (
                      <input
                        name="efluency1"
                        value={formAll.efluency1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.efluency2 || " "}
                      </span>
                    ) : (
                      <input
                        name="efluency2"
                        value={formAll.efluency2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Expression</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eexpresions1 || " "}
                      </span>
                    ) : (
                      <input
                        name="eexpresions1"
                        value={formAll.eexpresions1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eexpresions2 || " "}
                      </span>
                    ) : (
                      <input
                        name="eexpresions2"
                        value={formAll.eexpresions2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Comprehension</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.ecomprehension1 || " "}
                      </span>
                    ) : (
                      <input
                        name="ecomprehension1"
                        value={formAll.ecomprehension1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.ecomprehension2 || " "}
                      </span>
                    ) : (
                      <input
                        name="ecomprehension2"
                        value={formAll.ecomprehension2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Writing Skills</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="subject-part">Handwriting</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.ehandwritting1 || " "}
                      </span>
                    ) : (
                      <input
                        name="ehandwritting1"
                        value={formAll.ehandwritting1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.ehandwritting2 || " "}
                      </span>
                    ) : (
                      <input
                        name="ehandwritting2"
                        value={formAll.ehandwritting2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Dictation</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.edictation1 || " "}
                      </span>
                    ) : (
                      <input
                        name="edictation1"
                        value={formAll.edictation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.edictation2 || " "}
                      </span>
                    ) : (
                      <input
                        name="edictation2"
                        value={formAll.edictation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.evocabulary1 || " "}
                      </span>
                    ) : (
                      <input
                        name="evocabulary1"
                        value={formAll.evocabulary1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.evocabulary1 || " "}
                      </span>
                    ) : (
                      <input
                        name="evocabulary2"
                        value={formAll.evocabulary2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Speaking Skills</td>
                  <td></td>
                  <td></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term II
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Clarity</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eclarity1 || " "}
                      </span>
                    ) : (
                      <input
                        name="eclarity1"
                        value={formAll.eclarity1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eclarity2 || " "}
                      </span>
                    ) : (
                      <input
                        name="eclarity2"
                        value={formAll.eclarity2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark" rowSpan="8">
                    {isFixed ? (
                      <span>{formAll.remark2 || " "}</span>
                    ) : (
                      <textarea
                        placeholder="type here"
                        className="remarks"
                        style={{
                          width: "100%",
                          minHeight: "10px" /* Set a minimum height */,
                          border: "none",
                          outline: "none",
                          padding: "0",
                          boxSizing: "border-box",
                          resize: "none" /* Disable manual resizing */,
                          overflow: "hidden" /* Hide scrollbar */,
                        }}
                        name="remark2"
                        value={formAll.remark2}
                        onChange={handleChangeAll}
                        onInput={(e) => {
                          e.target.style.height = "auto"; // Reset height
                          e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                        }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.evocabulary3 || " "}
                      </span>
                    ) : (
                      <input
                        name="evocabulary3"
                        value={formAll.evocabulary3}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.evocabulary4 || " "}
                      </span>
                    ) : (
                      <input
                        name="evocabulary4"
                        value={formAll.evocabulary4}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Sentence Construction</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.esentence1 || " "}
                      </span>
                    ) : (
                      <input
                        name="esentence1"
                        value={formAll.esentence1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.esentence2 || " "}
                      </span>
                    ) : (
                      <input
                        name="esentence2"
                        value={formAll.esentence2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Recitation</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.erecitation1 || " "}
                      </span>
                    ) : (
                      <input
                        name="erecitation1"
                        value={formAll.erecitation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.erecitation2 || " "}
                      </span>
                    ) : (
                      <input
                        name="erecitation2"
                        value={formAll.erecitation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Listening Skills</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="subject-part">Oral Comprehension</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eoral1 || " "}
                      </span>
                    ) : (
                      <input
                        name="eoral1"
                        value={formAll.eoral1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eattention1 || " "}
                      </span>
                    ) : (
                      <input
                        name="eattention1"
                        value={formAll.eattention1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Attention</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eattention2 || " "}
                      </span>
                    ) : (
                      <input
                        name="eattention2"
                        value={formAll.eattention2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.eoral2 || " "}
                      </span>
                    ) : (
                      <input
                        name="eoral2"
                        value={formAll.eoral2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <hr />
            <table className="subject-table">
              <thead>
                <th className="head" style={{ width: "25%" }}>
                  LANGUAGE-HINDI
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "70%" }}
                >
                  REMARKS
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="subject-heading">Reading Skills</td>
                  <td></td>
                  <td></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term I
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Pronunciation and Accuracy</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hpro1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hpro1"
                        value={formAll.hpro1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hpro2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hpro2"
                        value={formAll.hpro2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark" rowSpan="8">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark3"
                      value={formAll.remark3}
                      onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Fluency</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hfluency1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hfluency1"
                        value={formAll.hfluency1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hfluency2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hfluency2"
                        value={formAll.hfluency2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Expression</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hexpresions1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hexpresions1"
                        value={formAll.hexpresions1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hexpresions2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hexpresions2"
                        value={formAll.hexpresions2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Comprehension</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hcomprehension1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hcomprehension1"
                        value={formAll.hcomprehension1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hcomprehension2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hcomprehension2"
                        value={formAll.hcomprehension2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Writing Skills</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="subject-part">Handwriting</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hhandwritting1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hhandwritting1"
                        value={formAll.hhandwritting1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hhandwritting2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hhandwritting2"
                        value={formAll.hhandwritting2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Dictation</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hdictation1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hdictation1"
                        value={formAll.hdictation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hdictation2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hdictation2"
                        value={formAll.hdictation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hvocabulary1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hvocabulary1"
                        value={formAll.hvocabulary1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hvocabulary2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hvocabulary2"
                        value={formAll.hvocabulary2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Speaking Skills</td>
                  <td></td>
                  <td></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term II
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Clarity</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hclarity1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hclarity1"
                        value={formAll.hclarity1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hclarity2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hclarity2"
                        value={formAll.hclarity2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark" rowSpan="8">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark4"
                      value={formAll.remark4}
                      onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hvocabulary3 || " "}
                      </span>
                    ) : (
                      <input
                        name="hvocabulary3"
                        value={formAll.hvocabulary3}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hvocabulary4 || " "}
                      </span>
                    ) : (
                      <input
                        name="hvocabulary4"
                        value={formAll.hvocabulary4}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Sentence Construction</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hsentence1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hsentence1"
                        value={formAll.hsentence1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hsentence2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hsentence2"
                        value={formAll.hsentence2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Recitation</td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hrecitation1 || " "}
                      </span>
                    ) : (
                      <input
                        name="hrecitation1"
                        value={formAll.hrecitation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                  <td className="subject-mark">
                    {isFixed ? (
                      <span className="center-text">
                        {formAll.hrecitation2 || " "}
                      </span>
                    ) : (
                      <input
                        name="hrecitation2"
                        value={formAll.hrecitation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}{" "}
                  </td>
                </tr>
                <tr>
                  <td className="subject-heading">Listening Skills</td>
                  <td className="subject-mark"></td>
                  <td className="subject-mark"></td>
                </tr>
                <tr>
                  <td className="subject-part">Oral Comprehension</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.horal1 || " "}</span>
                    ) : (
                      <input
                        name="horal1"
                        value={formAll.horal1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.horal2 || " "}</span>
                    ) : (
                      <input
                        name="horal2"
                        value={formAll.horal2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td className="subject-part">Attention</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.hattention1 || " "}</span>
                    ) : (
                      <input
                        name="hattention1"
                        value={formAll.hattention1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.hattention2 || " "}</span>
                    ) : (
                      <input
                        name="hattention2"
                        value={formAll.hattention2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <hr />
            <table className="subject-table">
              <thead>
                <th className="head" style={{ width: "25%" }}>
                  LANGUAGE-URDU
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "100%" }}
                >
                  REMARKS
                </th>
              </thead>
              <tbody>
                <tr>
                  <td className="subject-heading">Reading Skills</td>
                  <td />
                  <td />
                  <td className="term" style={{ textAlign: "center" }}>
                    Term I
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Pronunciation and Accuracy</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.upro1 || " "}</span>
                    ) : (
                      <input
                        name="upro1"
                        value={formAll.upro1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.upro2 || " "}</span>
                    ) : (
                      <input
                        name="upro2"
                        value={formAll.upro2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark" rowSpan="8">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark5"
                      value={formAll.remark5}
                      onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Fluency</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ufluency1 || " "}</span>
                    ) : (
                      <input
                        name="ufluency1"
                        value={formAll.ufluency1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                     </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ufluency2 || " "}</span>
                    ) : (
                      <input
                        name="ufluency2"
                        value={formAll.ufluency2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                     </td>
                </tr>
                <tr>
                  <td className="subject-part">Expression</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uexpresions1 || " "}</span>
                    ) : (
                      <input
                        name="uexpresions1"
                        value={formAll.uexpresions1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                     </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uexpresions2 || " "}</span>
                    ) : (
                      <input
                        name="uexpresions2"
                        value={formAll.uexpresions2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                     </td>
                </tr>
                <tr>
                  <td className="subject-part">Comprehension</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ucomprehension1 || " "}</span>
                    ) : (
                      <input
                        name="ucomprehension1"                      
                          value={formAll.ucomprehension1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                      </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ucomprehension2 || " "}</span>
                    ) : (
                      <input
                        name="ucomprehension2"
                        value={formAll.ucomprehension2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                      </td>
                </tr>
                <tr>
                  <td className="subject-heading">Writing Skills</td>
                  <td className="subject-mark">
                   
                  </td>
                  <td className="subject-mark">
                  
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Handwriting</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uhandwritting1 || " "}</span>
                    ) : (
                      <input
                        name="uhandwritting1"
                        value={formAll.uhandwritting1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uhandwritting2 || " "}</span>
                    ) : (
                      <input
                        name="uhandwritting2"
                        value={formAll.uhandwritting2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td className="subject-part"> Dictation</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.udictation1 || " "}</span>
                    ) : (
                      <input
                        name="udictation1"
                        value={formAll.udictation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                       </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.udictation2 || " "}</span>
                    ) : (
                      <input
                        name="udictation2"
                        value={formAll.udictation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                       </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uvocabulary1 || " "}</span>
                    ) : (
                      <input
                        name="uvocabulary1"
                        value={formAll.uvocabulary1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uvocabulary2 || " "}</span>
                    ) : (
                      <input
                        name="uvocabulary2"
                        value={formAll.uvocabulary2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td className="subject-heading">Speaking Skills</td>
                  <td className="subject-mark"></td>
                  <td className="subject-mark"></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term II
                  </td>
                </tr>
                <tr>
                  <td className="subject-part"> Clarity</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uclarity1 || " "}</span>
                    ) : (
                      <input
                        name="uclarity1"
                        value={formAll.uclarity1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uclarity2 || " "}</span>
                    ) : (
                      <input
                        name="uclarity2"
                        value={formAll.uclarity2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark" rowSpan="8">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark6"
                      value={formAll.remark6}
                      onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Vocabulary</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uvocabulary3 || " "}</span>
                    ) : (
                      <input
                        name="uvocabulary3"
                        value={formAll.uvocabulary3}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uvocabulary4 || " "}</span>
                    ) : (
                      <input
                        name="uvocabulary4"
                        value={formAll.uvocabulary4}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                </tr>
                <tr>
                  <td className="subject-part"> Sentence Construction</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.usentence1 || " "}</span>
                    ) : (
                      <input
                        name="usentence1"
                        value={formAll.usentence1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.usentence2 || " "}</span>
                    ) : (
                      <input
                        name="usentence2"
                        value={formAll.usentence2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td className="subject-part">Recitation</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.urecitation1 || " "}</span>
                    ) : (
                      <input
                        name="urecitation1"
                        value={formAll.urecitation1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.urecitation2 || " "}</span>
                    ) : (
                      <input
                        name="urecitation2"
                        value={formAll.urecitation2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td className="subject-heading">Listening Skills</td>
                  <td className="subject-mark">
                    
                  </td>
                  <td className="subject-mark">
                    
                  </td>
                </tr>
                <tr>
                  <td className="subject-part">Attention</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uattention1 || " "}</span>
                    ) : (
                      <input
                        name="uattention1"
                        value={formAll.uattention1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.uattention2 || " "}</span>
                    ) : (
                      <input
                        name="uattention2"
                        value={formAll.uattention2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <hr className="line" />
          </section>
          <section className="page3">
            <br />
            <hr className="line" />
            <table className="subject-table">
              <thead>
                <th className="head" style={{ width: "25%" }}>
                  MATHEMATICS
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "70%" }}
                >
                  REMARKS
                </th>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term I
                  </td>
                </tr>
                <tr>
                  <td>Clarity of Concepts</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mclarity1 || " "}</span>
                    ) : (
                      <input
                        name="mclarity1"
                        value={formAll.mclarity1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mclarity2 || " "}</span>
                    ) : (
                      <input
                        name="mclarity2"
                        value={formAll.mclarity2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark" rowSpan="2">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark7"
                      value={formAll.remark7}
                      onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>{" "}
                </tr>
                <tr>
                  <td>Mental Mathematics</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mmentalmath1 || " "}</span>
                    ) : (
                      <input
                        name="mmentalmath1"
                        value={formAll.mmentalmath1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mmentalmath2 || " "}</span>
                    ) : (
                      <input
                        name="mmentalmath2"
                        value={formAll.mmentalmath2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                </tr>
                <tr>
                  <td>Computational Ability</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mability1 || " "}</span>
                    ) : (
                      <input
                        name="mability1"
                        value={formAll.mability1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.mability2 || " "}</span>
                    ) : (
                      <input
                        name="mability2"
                        value={formAll.mability2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="term" style={{ textAlign: "center" }}>
                    Term II
                  </td>
                </tr>
                <tr>
                  <td className="subject-mark"></td>
                  <td className="subject-mark"></td>
                  <td className="subject-mark"></td>
                  <td className="subject-mark" rowSpan="2">
                    <textarea
                      placeholder="type here"
                      className="remarks"
                      style={{
                        width: "100%",
                        minHeight: "10px" /* Set a minimum height */,
                        border: "none",
                        outline: "none",
                        padding: "0",
                        boxSizing: "border-box",
                        resize: "none" /* Disable manual resizing */,
                        overflow: "hidden" /* Hide scrollbar */,
                      }}
                      name="remark8"
                        value={formAll.remark8}
                        onChange={handleChangeAll}
                      onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                      }}
                    />
                  </td>{" "}
                </tr>
              </tbody>
            </table>
            <hr className="line" />
            <br />
            <hr className="line" />
            <table className="subject-table">
              <thead>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "20%" }}
                >
                  ISLAMIAT
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "12%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "12%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "25%" }}
                >
                  ENVIRONMENTAL SCIENCE
                </th>
                <th className="head" style={{ textAlign: "center" }}>
                  TERM I
                </th>
                <th className="head" style={{ textAlign: "center" }}>
                  TERM II
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Group Discussion</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.igroup1 || " "}</span>
                    ) : (
                      <input
                        name="igroup1"
                        value={formAll.igroup1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.igroup2 || " "}</span>
                    ) : (
                      <input
                        name="igroup2"
                        value={formAll.igroup2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>

                  <td>Group Discussion</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.egroup1 || " "}</span>
                    ) : (
                      <input
                        name="egroup1"
                        value={formAll.egroup1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.egroup2 || " "}</span>
                    ) : (
                      <input
                        name="egroup2"
                        value={formAll.egroup2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                </tr>
                <tr>
                  <td>Clarity Of Concepts</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.iconcept1 || " "}</span>
                    ) : (
                      <input
                        name="iconcept1"
                        value={formAll.iconcept1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.iconcept2 || " "}</span>
                    ) : (
                      <input
                        name="iconcept2"
                        value={formAll.iconcept2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td>General Awareness</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.egeneralawareness1 || " "}</span>
                    ) : (
                      <input
                        name="egeneralawareness1"
                        value={formAll.egeneralawareness1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.egeneralawareness2
                         || " "}</span>
                    ) : (
                      <input
                        name="egeneralawareness2"
                        value={formAll.egeneralawareness2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Clarity of Concepts</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.econcept1
                         || " "}</span>
                    ) : (
                      <input
                        name="econcept1"
                        value={formAll.econcept1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                      </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.econcept2
                         || " "}</span>
                    ) : (
                      <input
                        name="econcept2"
                        value={formAll.econcept2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                      </td>
                </tr>
              </tbody>
            </table>
            <hr className="line" />
            <br />
            <hr className="line" />
            <table className="subject-table">
              <thead>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "19.5%" }}
                >
                  ART & CRAFT
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "12%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "11.5%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "24.5%" }}
                >
                  PERSONALITY TRAITS
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15%" }}
                >
                  TERM II
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Interest</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ainterest1
                         || " "}</span>
                    ) : (
                      <input
                        name="ainterest1"
                        value={formAll.ainterest12}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ainterest2
                         || " "}</span>
                    ) : (
                      <input
                        name="ainterest2"
                        value={formAll.ainterest2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td>Confidence</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pconfidence1
                         || " "}</span>
                    ) : (
                      <input
                        name="pconfidence1"
                        value={formAll.pconfidence1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )} 
                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pconfidence2
                         || " "}</span>
                    ) : (
                      <input
                        name="pconfidence2"
                        value={formAll.pconfidence2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )} 
                  </td>
                </tr>
                <tr>
                  <td>Aptitude</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.aaptitute1
                         || " "}</span>
                    ) : (
                      <input
                        name="aaptitute1"
                        value={formAll.aaptitute1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )} 
                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.aaptitute2
                         || " "}</span>
                    ) : (
                      <input
                        name="aaptitute2"
                        value={formAll.aaptitute2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )} 
                  </td>
                  <td>Regulatity</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pregularity1
                         || " "}</span>
                    ) : (
                      <input
                        name="pregularity1"
                        value={formAll.pregularity1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pregularity2
                         || " "}</span>
                    ) : (
                      <input
                        name="pregularity2"
                        value={formAll.pregularity2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td>Creativity</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.acreative1
                         || " "}</span>
                    ) : (
                      <input
                        name="acreative1"
                        value={formAll.acreative1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.acreative2
                         || " "}</span>
                    ) : (
                      <input
                        name="acreative2"
                        value={formAll.acreative2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td>Punctuality</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ppunctuality1
                         || " "}</span>
                    ) : (
                      <input
                        name="ppunctuality1"
                        value={formAll.ppunctuality1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.ppunctuality2
                         || " "}</span>
                    ) : (
                      <input
                        name="ppunctuality2"
                        value={formAll.ppunctuality2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                    </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Disipline</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pdiscipline1
                         || " "}</span>
                    ) : (
                      <input
                        name="pdiscipline1"
                        value={formAll.pdiscipline1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pdiscipline2
                         || " "}</span>
                    ) : (
                      <input
                        name="pdiscipline2"
                        value={formAll.pdiscipline2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Creative</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pcreative1
                         || " "}</span>
                    ) : (
                      <input
                        name="pcreative1"
                        value={formAll.pcreative1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pcreative2
                         || " "}</span>
                    ) : (
                      <input
                        name="pcreative2"
                        value={formAll.pcreative2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                  </td>
                </tr>
              </tbody>
            </table>
            <hr style={{ border: "1px ridge black" }} />
            <table className="subject-table">
              <thead>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "20%" }}
                >
                  SOCIAL SKILLS
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "12.2%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "12%" }}
                >
                  TERM II
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "25%" }}
                >
                  PHYSICAL EDUCATION
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "15.5%" }}
                >
                  TERM I
                </th>
                <th
                  className="head"
                  style={{ textAlign: "center", width: "19%" }}
                >
                  TERM II
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Etiquette</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.setiquette1
                         || " "}</span>
                    ) : (
                      <input
                        name="setiquette1"
                        value={formAll.setiquette1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.setiquette2
                         || " "}</span>
                    ) : (
                      <input
                        name="setiquette2"
                        value={formAll.setiquette2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td>Enthusiam</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.penthusiam1
                         || " "}</span>
                    ) : (
                      <input
                        name="penthusiam1"
                        value={formAll.penthusiam1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.penthusiam2
                         || " "}</span>
                    ) : (
                      <input
                        name="penthusiam2"
                        value={formAll.penthusiam2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td>Courteous</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.scourteous1
                         || " "}</span>
                    ) : (
                      <input
                        name="scourteous1"
                        value={formAll.scourteous1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.scourteous2
                         || " "}</span>
                    ) : (
                      <input
                        name="scourteous2"
                        value={formAll.scourteous2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td>Co-ordination</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pCoordination1
                         || " "}</span>
                    ) : (
                      <input
                        name="pCoordination1"
                        value={formAll.pCoordination1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pCoordination2
                         || " "}</span>
                    ) : (
                      <input
                        name="pCoordination2"
                        value={formAll.pCoordination2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
                <tr>
                  <td>Respect for others</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.srespect1
                         || " "}</span>
                    ) : (
                      <input
                        name="srespect1"
                        value={formAll.srespect1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.srespect2
                         || " "}</span>
                    ) : (
                      <input
                        name="srespect2"
                        value={formAll.srespect2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td>Team Spirit</td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pteam1
                         || " "}</span>
                    ) : (
                      <input
                        name="pteam1"
                        value={formAll.pteam1}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                  <td className="subject-mark">
                  {isFixed ? (
                      <span className="center-text">{formAll.pteam2
                         || " "}</span>
                    ) : (
                      <input
                        name="pteam2"
                        value={formAll.pteam2}
                        onChange={handleChangeAll}
                        className="subject_input"
                      />
                    )}                   </td>
                </tr>
              </tbody>
            </table>
            <hr className="line" />
            <br />
            <hr className="line" />
            {/* General Remarks for Term II */}
            <div className="remarks-term">
              <h4 className="remarks-heading">GENERAL REMARK (Term I)</h4>
              <hr className="line" />
              <textarea
                className="remarks-textarea"
                cols={243}
                name="general1"
                value={formAll.general1}
                onChange={handleChangeAll}
              ></textarea>
            </div>
            <hr className="line" />
            <div className="remarks-term">
              <h4 className="remarks-heading">GENERAL REMARK (Term II)</h4>
              <hr className="line" />
              <textarea
                className="remarks-textarea"
                cols={243}
                name="general2"
                value={formAll.general2}
                onChange={handleChangeAll}
              ></textarea>
            </div>
            {/* Attendance for Terms */}
            <hr className="line" />
            <div className="attendance-term-form">
              <div className="attendance-group">
                <label className="attendance-heading">
                  ATTENDANCE (Term I):
                </label>
                {isFixed ? (
                  <label>{formAll.attendance1 || " "}%</label>
                ) : (
                  <div className="attendance-input">
                    <input
                      type="number"
                      className="subject_input"
                      name="attendance1"
                      value={formAll.attendance1}
                      onChange={handleChangeAll}
                    />
                    <span>%</span>
                  </div>
                )}
              </div>
              <div className="attendance-group">
                <label className="attendance-heading">
                  ATTENDANCE (Term II):
                </label>
                {isFixed ? (
                  <label>{formAll.attendance2 || " "}%</label>
                ) : (
                  <div className="attendance-input">
                    <input
                      type="number"
                      className="subject_input"
                      name="attendance2"
                      value={formAll.attendance2}
                      onChange={handleChangeAll}
                    />
                    <span>%</span>
                  </div>
                )}
              </div>
            </div>
            <hr className="line" />
            {/* Promoted to Class and Issue Date */}
            <div className="promotion-section1">
              <label className="promotion-heading">PROMOTED TO CLASS:</label>
              {isFixed ? (
                <label>{formAll.promoted || " "}</label>
              ) : (
                <input
                style={{ fontWeight: "bolder" }}
                                  name="promoted"
                  value={formAll.promoted}
                  onChange={handleChangeAll}
                />
              )}
              <br />
              <label className="issue-date-heading">ISSUE DATE:</label>
              {isFixed ? (
                <label>{formAll.issuedate || " "}</label>
              ) : (
                <input
                  name="issuedate"
                  value={formAll.issuedate}
                  onChange={handleChangeAll}
                />
              )}
            </div>
            {/* Signatories Section */}
            <div class="signatories-section">
              <span class="left-word">Class Teacher</span>
              <span class="center-word">Principal</span>
              <span class="right-word">Parents/Guardian</span>
            </div>
          </section>
        </form>
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

export default ReportCardNurto2;
