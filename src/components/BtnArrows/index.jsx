import React from 'react';
import './BtnArrows.scss';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const BtnArrows = ({ greenType }) => {
  return (
    <div className='btnarrows flexed-between align-center'>
      <ArrowLeft greenType={greenType} /> <ArrowRight greenType={greenType} />
    </div>
  );
};

export default BtnArrows;
