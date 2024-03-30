import React from 'react';
import BirdSVG from '../Assets/Bird.svg';
import './WelcomeBackground.css';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to My App</h1>
      <div className="bird-container">
        <img src={BirdSVG} alt="Bird" className="bird-svg" />
      </div>
    </div>
  );
};

export default WelcomePage;