import React from 'react';
import '../Style/2SocialFooter.css';
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const SocialFooter = () => {
  return (
    <div className="social-footer">
      <FiInstagram className="social-icon" />
      <FiLinkedin className="social-icon" />
      <FiTwitter className="social-icon" />
    </div>
  );
};

export default SocialFooter;
