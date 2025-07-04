import React from 'react';
import '../Style/3BlogCard.css';
import { FiArrowUpRight } from 'react-icons/fi';

import uxImage from '../assets/ux image.png';  

const BlogCard = ({
  image = uxImage,
  category = "Design",
  title = "UX Review Presentations",
  description = "How can you craft impactful presentations that engage your colleagues and leave a lasting impression on your manager?",
  author = "Kathy Ruth",
  date = "Jun 22, 2024"
}) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-image" />

      <p className="blog-card-category">{category}</p>

      <div className="blog-card-title-row">
        <h3 className="blog-card-title">{title}</h3>
        <FiArrowUpRight className="arrow-icon" />
      </div>

      <p className="blog-card-description">{description}</p>

      <div className="blog-card-author-row">
        <img
          src="https://via.placeholder.com/30"
          alt={author}
          className="author-avatar"
        />
        <div className="author-info">
          <p className="author-name">{author}</p>
          <p className="author-date">{date}</p>
        </div>
      </div>

      <button className="blog-card-button">Read Blogs...</button>
    </div>
  );
};

export default BlogCard;
