import React from 'react';
import './MentorCardComp.scss';
import ArrowLeft from '../BtnArrows/ArrowLeft';
import ArrowRight from '../BtnArrows/ArrowRight';

const MentorCardComp = ({
  img,
  name,
  handlePrev,
  handleNext,
  bio,
  classes,
}) => {
  return (
    <div className={`mentorcardcomp ${classes || ''}`}>
      <img src={img} alt='' />
      <div className='btn-wraps'>
        <div className='arrows' onClick={handlePrev}>
          <ArrowLeft greenType />
        </div>
        <div className='arrows' onClick={handleNext}>
          <ArrowRight greenType />
        </div>
      </div>
      <h3>{name}</h3>
      <p className='custom-text'>{bio}</p>
    </div>
  );
};

export default MentorCardComp;
