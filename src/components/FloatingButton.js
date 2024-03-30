import React, { useState } from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="float-button-container">
      <button className="float-button" onClick={handleButtonClick}>
        +
      </button>
      {showButtons && (
        <div className="floating-buttons">
          <button className="sub-button">Add tasks</button>
          <button className="sub-button">Add Category</button>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;