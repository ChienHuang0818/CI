import React from 'react';
import Header from './Header';
import '../App.css'; 
import chienImage from '../assets/chien.jpeg';

const Reflection = () => {
  return (
    <div className="reflection-container">
      <Header />
      <div className="reflection-content">
        <div className="about-me-section">
          <img 
            src={chienImage}  
            alt="Chien Huang" 
            className="profile-image"
          />
          <div className="about-me-text">
            <h1>About Me</h1>
            <p>
              I am a master’s student specializing in software development and support, dedicated to becoming a professional front-end engineer. Currently, I am involved in app development at New Beginnings, working on a project aimed at raising awareness among young people about marine conservation and using technology to promote environmental education. As a developer, I am responsible for designing intuitive user interfaces and ensuring the smooth functionality of the app.
            </p>
            <p>
              During my bachelor's studies, I majored in Human Development, which gave me a deep understanding of humanitarian care. I have always been passionate about the interaction and growth of individuals within society. My academic background has equipped me with excellent communication skills and empathy, which are essential in understanding user needs during app development.
            </p>
            <p>
              I believe that combining technology with humanitarian care can create valuable solutions. Therefore, I hope to merge my technical expertise with my understanding of human development to help organizations expand their business while addressing social issues through innovative digital products, ultimately contributing to human well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
