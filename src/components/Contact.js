import React from 'react';
import '../App.css'; // Link to the CSS file
import Header from './Header';
import thank from '../assets/timesheet.png';
import letter from '../assets/letter.png';

const ImageDisplay = () => {
  return (
    <div className="image-display-container">
       <Header />
      <h1>Timesheet & Thank You Letter</h1>

      <div className="image-section">
        <h3>Timesheet Screenshot</h3>
        <img 
          src={thank}   
          alt="Timesheet Screenshot" 
          className="screenshot-image" 
        />
      </div>

      <div className="image-section">
        <h3>Thank You Letter Screenshot</h3>
        <img 
          src={letter}
          alt="Thank You Letter Screenshot" 
          className="screenshot-image" 
        />
      </div>
    </div>
  );
};

export default ImageDisplay;