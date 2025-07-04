import React from 'react';
import authorImg from '../assets/author.png'; // replace with actual image
import '../Style/AuthorInfo.css';

const AuthorInfo = () => {
  return (
    <div className="author-container">
      <img src={authorImg} alt="Author" className="author-img" />
      <div className="author-details">
        <span className="author-name">John</span>
        <span className="author-date">Jan 17, 2024</span>
      </div>
      <button className="follow-button">Follow</button>
      <span className="read-time">6 min read</span>
    </div>
  );
};

export default AuthorInfo;

