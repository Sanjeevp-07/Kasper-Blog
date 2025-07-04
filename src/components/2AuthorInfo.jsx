import React from 'react';
import '../Style/2AuthorInfo.css';
import authorImg2 from '../assets/AuthorImg.png';

const AuthorInfo = () => {
  return (
    <div className="author-container">
      <img 
        src={authorImg2}
        alt="Author" 
        className="author-avatar"
      />
      <div className="author-details">
        <span className="author-name">Kathy Ruth</span>
        <span className="author-date">June 2, 2024</span>
      </div>
      <button className="follow-button">Follow</button>
      <span className="read-time">5 min read</span>
    </div>
  );
};

export default AuthorInfo;
