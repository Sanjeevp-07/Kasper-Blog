import React from 'react';
import '../Style/2PostFooter.css';
import { FiThumbsUp, FiMessageCircle, FiBookmark, FiShare2, FiMoreHorizontal } from 'react-icons/fi';

const PostFooter = () => {
  return (
    <div className="post-footer2">
      <div className="left-icons">
        <span className="icon-group">
          <FiThumbsUp className="icon" />
          <span>15</span>
        </span>
        <span className="icon-group">
          <FiMessageCircle className="icon" />
          <span>07</span>
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

export default PostFooter;
