import React from 'react'
import NavBar from './NavBar'
import './HomePage.css'
import {  useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate=useNavigate()
  return (
    <div>
      <NavBar/>
      <button className="home-item" onClick={()=>navigate("/StudentForm")}>New Student</button>
    </div>
  )
}

export default HomePage