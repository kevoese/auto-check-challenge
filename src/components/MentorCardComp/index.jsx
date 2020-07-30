import React from 'react';
import './MentorCardComp.scss';

const MentorCardComp = ({ img, name, bio }) => {
  return (
    <div className='mentorcardcomp'>
      <img src={img} alt='' />
      <h3>{name}</h3>
      <p className='custom-text'>{bio}</p>
    </div>
  );
};

export default MentorCardComp;
