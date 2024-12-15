import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/img1.jpg'; // Import image directly
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-div">
        <h1 className="heading">Shaheen Public School</h1>
        <h2 className="heading2">Welcome</h2>
        <div className='btn-container'>
        <button className="home-button" onClick={() => navigate('/Login')}>
          Login
        </button>
        <button className="home-button" onClick={() => navigate('/Register')}>
          Register
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
