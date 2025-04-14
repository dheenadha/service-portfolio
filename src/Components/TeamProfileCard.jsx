import React from 'react';
import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './TeamProfileCard.css';

const TeamProfileCard = ({ image, name, role, bio, linkedin, email, portfolio,skills }) => {

  const skillChunks = [
    skills.slice(0, 2), 
    skills.slice(2, 6), 
  ];

  return (
    
    <div className="team-card">
       <div className="card-top-background">
          <div className="team-photo-wrapper">
                <img src={image} alt={name} className="team-photo" />
          </div>
        </div>
      <h2 className="team-name">{name}</h2>
      <p className="team-role">{role}</p>

      <div className="skill-list-text">
        {skillChunks.map((group, index) => (
          <p className="skills-inline" key={index}>
            {group.join(', ')}
          </p>
        ))}
      </div>

      <div className="team-icons">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <FaEnvelope />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamProfileCard;
