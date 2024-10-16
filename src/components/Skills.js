import React from 'react';
import Header from './Header';
import '../App.css'; 
import Image from '../assets/newbeginings.jpeg';

const Skills = () => {
  return (
    <div className="internship-container">
      <Header />
      <div className="internship-content">
        <h1>Internship Organization - New Beginnings</h1>
        <img 
          src={Image} 
          alt="Chien Huang" 
          className="newimage"
        />

        <div className="section">
          <h3>Youth Marine Conservation</h3>
          <p>
            It is important for young people to understand the context and importance of global warming, 
            and the resulting impacts on our planet. Our Marine Programs are designed to give students an 
            introduction to the marine environment. Involvement in Marine Studies can lead young people 
            to rewarding career paths and give them the ability to have a direct and positive impact on 
            our environment.
          </p>
        </div>

        <div className="section">
          <h3>Key Objectives and Achievements</h3>
          <ul>
            <li>Youth Self-Esteem & Leadership Programs</li>
            <li>Marine Conservation Programs</li>
            <li>International Aid Projects</li>
            <li>Fundraising and Research leading to further innovation of our programs</li>
          </ul>
        </div>

        <div className="section">
          <h3>Collaborative Efforts</h3>
          <p>
            Our organization is run almost entirely by highly qualified volunteers. This means that our 
            operational costs are far lower than most other charities. However, we do need funds to cover 
            minimal administration costs, insurance, equipment & supplies for youth camps, and expense 
            reimbursements for program volunteers.
          </p>
        </div>

        <div className="section">
          <h3>Core Activities and Programs</h3>
          <ul>
            <li>Youth Marine Conservation Programs Levels 1-3: 2000 - 2024</li>
            <li>Whitsunday Reef Preservation Project: July 2024 - March 2025</li>
          </ul>
        </div>

        <div className="section">
          <h3>My Internship Role</h3>
          <p>
            My goal is to help students successfully complete the Youth Marine Conservation Level 1. By designing 
            an interactive application, students can explore various aspects of marine knowledge and, ultimately, 
            earn a certification upon completion. The app includes comprehensive learning modules that cover topics 
            such as marine ecosystems, global warming, and the effects of human activities on the environment. 
            In addition, interactive quizzes will be integrated to help students assess their understanding and 
            track their progress throughout the learning journey.
          </p>
          <p>
            To further enhance the learning experience, I have also designed intuitive navigation materials that 
            guide users through the course, ensuring that students can easily find and complete each module. The 
            app encourages active engagement by offering features like achievement tracking and social sharing, 
            allowing students to share their progress and accomplishments, thus increasing their exposure to 
            marine conservation efforts. Ultimately, this app aims to spark students' interest in environmental 
            conservation while providing them with the tools to earn a recognized certificate.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
