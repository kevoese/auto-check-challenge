import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import LogoWithName from '../LogoWithName';

const links = [
  {
    name: 'Companies',
    path: '/',
  },
  {
    name: 'Team',
    path: '/',
  },
  {
    name: 'Resources',
    path: '/',
  },
  {
    name: 'Programs',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/',
  },
  {
    name: 'Contact',
    path: '/',
  },
];

const Navbar = () => {
  return (
    <header className='navbar flexed-between align-center'>
      <LogoWithName />
      <div className='nav-links flexed-row'>
        {links.map(({ name, path }, index) => (
          <a key={index} className='custom-text' to={path}>
            {name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
