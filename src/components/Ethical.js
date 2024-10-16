import React from 'react';
import Header from './Header';
import '../App.css'; 
import Image1 from '../assets/1.image.png';
import Image2 from '../assets/2.image.png';
import Image3 from '../assets/3.image.png';
import Image4 from '../assets/4.image.jpg';
import Image5 from '../assets/5.image.jpg';
import Image6 from '../assets/6.image.jpg';
import Image7 from '../assets/7.image.jpg';

const Ethical = () => {
  return (
    <div className="skills-container">
      <Header />
      <h1>Personal Skills</h1>
      
      <div className="skill">
        <h3>1. Communication</h3>
        <p>
          I consistently communicate with the CEO to ensure that the app meets the needs of our target users. It is essential to confirm that the design is appropriate for teenagers. Clear and regular communication helps ensure that the app’s features align with the organization’s goals.
        </p>
      </div>
      
      <div className="skill">
        <h3>2. Time Management</h3>
        <p>
          With weekly meetings every Friday, I stay on track with the development timeline. I effectively manage my time to make sure that the app design is adjusted according to feedback and that the timeline is followed without delays.
        </p>
      </div>

      <div className="skill">
        <h3>3. Self-Learning</h3>
        <p>
          I used AppSheet to develop the app, which was a new platform for me. To master it, I took the initiative to explore its features through additional research and tutorials, demonstrating my ability to quickly adapt to new tools and technologies.
        </p>
      </div>
      
      <div className="skill">
        <h3>4. Problem Solving</h3>
        <p>
          I faced several design challenges, such as ensuring that the system automatically sends an email to users after they complete their certification. I solved these issues by researching and implementing solutions to automate the process, ensuring the system runs smoothly.
        </p>
      </div>
      
      <div className="skill">
        <h3>5. Innovation</h3>
        <p>
          I strive to bring innovation into my design process. In addition to meeting the basic requirements, I introduced interactive elements to make learning about marine conservation more engaging and enjoyable for students. This not only enhances the educational experience but also increases user engagement.
        </p>
      </div>

      {/* Individual Project Image Sections */}
      <div className="project-section">
        <img src={Image1} alt="Project work" className="project-image" />
        <div className="project-description">
          <h3>Time Management</h3>
          <p>
            We have a meeting every Friday at 10 AM, ensuring we stay aligned with project deadlines and deliverables.
          </p>
        </div>
      </div>

      <div className="project-section">
        <img src={Image2} alt="Project work" className="project-image" />
        <div className="project-description">
          <h3>Communication</h3>
          <p>
            I maintain constant communication with stakeholders to ensure that all deliverables meet their expectations and project objectives.
          </p>
        </div>
      </div>

      <div className="project-section">
        <img src={Image3} alt="Project work" className="project-image" />
        <div className="project-description">
          <h3>Problem Solving</h3>
          <p>
            I write detailed documentation to clearly outline processes, solutions, and technical aspects for the team and stakeholders.
          </p>
        </div>
      </div>

      {/* Group of Images Displayed Side by Side */}
      <div className="project-gallery">
        <div className="project-description">
          <h3>Deliverables</h3>
          <p>We hold meetings every Friday at 10 AM to discuss the progress and ensure timely delivery of all milestones.</p>
       </div>
        <img src={Image4} alt="Project work" className="gallery-image" />
        <img src={Image5} alt="Project work" className="gallery-image" />
        <img src={Image6} alt="Project work" className="gallery-image" />
        <img src={Image7} alt="Project work" className="gallery-image" />
      </div>

    </div>
  );
};

export default Ethical;
