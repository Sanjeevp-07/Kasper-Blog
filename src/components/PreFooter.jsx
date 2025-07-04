import React from 'react';
import '../Style/PreFooter.css';
// Example using Feather icons from react-icons
import { FiThumbsUp, FiMessageCircle, FiBookmark, FiShare2, FiMoreHorizontal } from 'react-icons/fi';



const PreFooter = () => {
  return (
    <div className="post-footer">
      <div className="left-icons">
        <span className="icon-group">
          <FiThumbsUp className="icon" />
          <span className="count">15</span>
        </span>
        <span className="icon-group">
          <FiMessageCircle className="icon" />
          <span className="count">07</span>
        </span>
      </div>
      <div className="right-icons">
        <FiBookmark className="icon" />
        <FiShare2 className="icon" />
        <FiMoreHorizontal className="icon" />
      </div>
    </div>
  );
};

export default PreFooter;
