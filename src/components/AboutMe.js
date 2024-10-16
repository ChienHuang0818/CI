import React from 'react';
import '../App.css'; // 连接到您的 CSS 文件
import Header from './Header';
const InternshipReflection = () => {
  return (
    <div className="internship-reflection-container">
      <Header />
      <h1>Internship Reflection Videos</h1>

      {/* Video Reflection Section */}
      <div className="section">
        <h2>Reflection Videos</h2>
        <p>Here are my five 2-3 minute reflection video logs where I discuss the tasks I undertook during my internship and how they contributed to my employability and personal and professional development.</p>

        {/* Embedding reflection videos */}
        <div className="videos">
          <iframe 
            className="video" 
            src="https://www.youtube.com/embed/nkPhtk0XdX8" 
            title="Reflection Video 5" 
            allowFullScreen
          ></iframe>
          <iframe 
            className="video" 
            src="https://www.youtube.com/embed/gIaHZ7V358k/edit" 
            title="Reflection Video 2" 
            allowFullScreen
          ></iframe>
          <iframe 
            className="video" 
            src="https://www.youtube.com/embed/wUMhqh6dUFU"
            title="Reflection Video 3" 
            allowFullScreen
          ></iframe>
          <iframe 
            className="video" 
            src="https://www.youtube.com/embed/Hw1cc8IVhGk" 
            title="Reflection Video 4" 
            allowFullScreen
          ></iframe>
          <iframe 
            className="video" 
            src="https://www.youtube.com/embed/FEysTZrwFwQ" 
            title="Reflection Video 5" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video CV Section */}
      <div className="section">
        <h2>Video CV</h2>
        <p>This is my 5-minute video CV where I critically reflect on my internship experience and how it has shaped my personal and professional identity.</p>
        
        {/* Embedding video CV */}
        <iframe 
          className="video2" 
          src="https://www.youtube.com/embed/qdpEboyuRTo" 
          title="Video CV" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InternshipReflection;
