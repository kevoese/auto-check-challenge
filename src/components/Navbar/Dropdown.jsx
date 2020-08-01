import React from 'react';
import { navLinks } from '../../utils/mockData';

const Dropdown = () => {
  return (
    <div className='nav-card-links'>
      {navLinks.map(({ name, path }, index) => (
        <a key={index} className='custom-text' to={path}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;
