import React from 'react';
import './SignUpPage.css';

import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  
const navigate = useNavigate();
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form className="login-form">
        <h3>Sign Up Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm Password" />

        <h7>Don't yet have an account?<a href = './login' onClick={ navigate('./login')}>Sign in here</a></h7> 
        <button>Sign Up</button>

      </form>
    </div>
  );
};

export default SignUpPage;