import React, { useContext } from 'react';
import NavBar from './NavBar';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { RecoveryContext } from '../App';

const HomePage = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(RecoveryContext);

  return (
    <div className='Back'>
      <NavBar />
      {isLogin && (
        <button className="home-item" onClick={() => navigate("/StudentForm")}>
          New Student
        </button>
      )}
      <div className="home-div">
        <h1 className="heading">Shaheen Public School</h1>
        <div className='home-btn'>
          {isLogin ? (
            <>
              <button className="home-button" onClick={() => navigate('/Register')}>
                Register New Teacher
              </button>
              <button className='home-button' onClick={() => navigate('/Forget')}>
                Forget Password
              </button>
            </>
          ) : (
            <button className="home-button" onClick={() => navigate('/Login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
