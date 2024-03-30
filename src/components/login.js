import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  

const navigate = useNavigate();
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form className="login-form">
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <h7>Don't yet have an account?<a href = './' onClick={ navigate('./')}>Sign in here</a></h7> 
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;