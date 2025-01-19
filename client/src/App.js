import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import ReportCardNurto2 from './ReportCard/ReportCardNurto2';
import ReportCard3to5 from './ReportCard/ReportCard3to5';
import ReportCard6to8 from './ReportCard/ReportCard6to8';
import StudentForm from './Student/StudentForm';
import { createContext } from 'react';
import ForgetPassword from './LoginRegister/ForgetPassword';
import Reset from './LoginRegister/Reset';

export const RecoveryContext = createContext();

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(""); // Added username field
  const [isLogin, setLogin] = useState(false);
  const [showReportCardDropdown, setShowReportCardDropdown] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSection] = useState("");


  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("islogin");
    if (storedLoginStatus === "true") {
      setLogin(true);
    }
  }, []);


  return (
    <RecoveryContext.Provider value={{ setEmail, email, isLogin, setLogin, username, setUsername, showReportCardDropdown, setShowReportCardDropdown, selectedClass, setSelectedClass,setSection,selectedSection }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/NavBar' element={<NavBar />} />
            <Route path='/Forget' element={<ForgetPassword />} />
            <Route path="/Reset" element={<Reset />} />
            <Route path='/ReportCardNurto2' element={<ReportCardNurto2 />} />
            <Route path='/ReportCard3to5' element={<ReportCard3to5 />} />
            <Route path='/ReportCard6to8' element={<ReportCard6to8 />} />
            <Route path='/StudentForm' element={<StudentForm />} />
          </Routes>
        </Router>
      </div>
    </RecoveryContext.Provider>
  );
}

export default App;
