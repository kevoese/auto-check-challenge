import React from 'react';
import './BtnArrows.scss';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const BtnArrows = ({ greenType, handlePrev, handleNext, disabled }) => {
  return (
    <div className='btnarrows flexed-between align-center'>
      <button disabled={disabled} className='pointers' onClick={handlePrev}>
        <ArrowLeft greenType={greenType} />
      </button>
      <button disabled={disabled} className='pointers' onClick={handleNext}>
        <ArrowRight greenType={greenType} />
      </button>
    </div>
  );
};

export default BtnArrows;
