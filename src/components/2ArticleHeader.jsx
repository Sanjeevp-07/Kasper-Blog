import React from 'react';
import '../Style/2ArticleHeader.css';
import { FiArrowLeft } from 'react-icons/fi';

const ArticleHeader = () => {
  return (
    <div className="article-header">
      <FiArrowLeft className="back-arrow" />
      <h1 className="article-title">UX Review Representation</h1>
    </div>
  );
};

export default ArticleHeader;
