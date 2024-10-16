import React from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import '../App.css'; 

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home-content">
                <div className="introduction">
                    <h2>Hi, I am Chien Huang</h2>
                    <p>Get to know more about me and my work as a front-end developer.</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/ChienHuang0818" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://linkedin.com/in/chien-huang-sarah" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a href="https://www.instagram.com/qien_huang/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100001346677555" target="_blank" rel="noopener noreferrer" className="icon">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                </div>
            </div>  
        </div>
    );
};

export default Home;
