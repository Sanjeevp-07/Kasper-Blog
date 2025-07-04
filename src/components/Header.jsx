import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../Style/Header.css';


const Header = () => {
  return (
    <header>
      <FiArrowLeft className="left-arrow" />
      <h1 className='Heading'>Migrating to Linear 101</h1>
    </header>
  );
};

export default Header;
