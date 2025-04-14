import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "./SingleCard.css";
import vishnuImage from '../assets/vishnu.jpg';
const skills = ['Java', 'JavaScript', 'Node.js', 'Express.js', 'SQL'];

export default function ProfileCard() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-card-background">
        <div className="profile-image">
          <img
            src={vishnuImage}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
            className="profile-team-photo"
          />
          </div>
        </div>

        <div className="profile-info">
          <h2>Adhivishnu</h2>
          <p className="tagline">Full Stack Developer</p>
          <p className="description">
            {['Java', 'JavaScript', 'Node.js', 'Express.js', 'SQL'].slice(0, 2).join(', ')},<br />
            {['Java', 'JavaScript', 'Node.js', 'Express.js', 'SQL'].slice(2).join(', ')}
            </p>
          <div className="social-icons">
                <a href="https://www.linkedin.com/in/adhivishnu-k/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
               </a>
               <a href="vishvishnu703@gmail.com">
                <FaEnvelope/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
