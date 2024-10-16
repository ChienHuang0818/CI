import React from 'react';
import '../App.css'; // Link to the CSS file
import Header from './Header';

const CareerPlan = () => {
  return (
    <div className="career-plan-container">
      <h1>Career Plan</h1>
	  <Header />
      <div className="section">
        <h3>Career Vision</h3>
        <p>
          I aspire to become a professional front-end engineer, helping users promote their projects and ideas through web development. I aim to use my technical skills to solve real-world problems and provide users with friendly, intuitive experiences, especially in fields such as environmental conservation and education.
        </p>
      </div>

      <div className="section">
        <h3>Short-Term (2 Years)</h3>
        <p>
          Over the next two years, I hope to secure a graduate program that will allow me to gain practical experience, particularly in web development using React and TypeScript. This opportunity will enable me to collaborate in a professional environment and tackle real technical challenges.
        </p>
      </div>

      <div className="section">
        <h3>Long-Term (5 Years)</h3>
        <p>
          My long-term goal is to become a Senior Frontend Engineer within five years. During this time, I will focus on refining my technical skills and leadership abilities, so I can lead teams in developing large-scale applications and provide guidance on technical decisions.
        </p>
      </div>

      <div className="section">
        <h3>Technical Skill Development</h3>
        <p>
          I plan to deepen my knowledge of React and TypeScript and apply these technologies extensively in my projects. Additionally, I will stay updated with the latest front-end tools and frameworks to ensure my code is maintainable, scalable, and performs efficiently.
        </p>
      </div>

      <div className="section">
        <h3>Professional Networking</h3>
        <p>
          I will actively build and expand my professional network through platforms like LinkedIn, connecting with peers, mentors, and collaborators. I will also participate in relevant tech conferences and community events to stay connected with industry trends and gain new insights into the latest technologies.
        </p>
      </div>
    </div>
  );
};

export default CareerPlan;

