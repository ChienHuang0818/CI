import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'; 
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>  
          </li>
          <li>
            <Link to="/reflection">
             About Me
            </Link>
          </li>
          <li>
            <a href="/skills">
            Internship Organisation
            </a>
          </li>
          <li>
            <a href="/ethical">
              Skills
            </a>
          </li>
          <li>
            <Link to="/about">
            Video Reflecttion & CV
            </Link>  
          </li>
          <li>
            <a href="/career">
            Career Plan
            </a>
          </li>
          <li>
            <a href="/contact">
            Timesheet & Letter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
