import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Login from './LoginRegister/Login'
import Register from './LoginRegister/Register'
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import ReportCard3to5 from './ReportCard/ReportCard3to5';
import StudentForm from './Student/StudentForm';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/NavBar' element={<NavBar/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/ReportCard3to5' element={<ReportCard3to5/>}/>
          <Route path='/StudentForm' element={<StudentForm/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
