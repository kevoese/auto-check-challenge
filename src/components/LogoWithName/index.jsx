import React from 'react';
import './LogoWithName.scss';
import Logo from '../Logo';

const LogoWithName = () => {
  return (
    <div className='logowithname flexed-between align-center'>
      <Logo /> <h5>Gidara</h5>
    </div>
  );
};

export default LogoWithName;
