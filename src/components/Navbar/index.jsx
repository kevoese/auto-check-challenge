import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import LogoWithName from '../LogoWithName';
import { navLinks } from '../../utils/mockData';
import Hamburger from './Hamburger';
import Dropdown from './Dropdown';
import Close from './Close';

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <header className='navbar flexed-between align-center'>
      <LogoWithName />
      <div
        className='hamburger'
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        {showDropDown ? <Close /> : <Hamburger />}
      </div>
      <div className='nav-links flexed-row'>
        {navLinks.map(({ name, path }, index) => (
          <a key={index} className='custom-text' to={path}>
            {name}
          </a>
        ))}
      </div>
      {showDropDown && <Dropdown />}
    </header>
  );
};

export default Navbar;
