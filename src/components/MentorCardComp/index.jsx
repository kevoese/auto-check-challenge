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
  disabled,
}) => {
  return (
    <div className={`mentorcardcomp ${classes || ''}`}>
      <img src={img} alt='' />
      <div className='btn-wraps'>
        <button disabled={disabled} className='pointers' onClick={handlePrev}>
          <ArrowLeft greenType />
        </button>
        <button disabled={disabled} className='pointers' onClick={handleNext}>
          <ArrowRight greenType />
        </button>
      </div>
      <h3>{name}</h3>
      <p className='custom-text'>{bio}</p>
    </div>
  );
};

export default MentorCardComp;
