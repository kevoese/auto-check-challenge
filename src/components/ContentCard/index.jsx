import React from 'react';
import './ContentCard.scss';

const ContentCard = ({ img, title, text }) => {
  return (
    <div className='contentcard'>
      <img src={img} alt='' />
      <div className='card-info'>
        <h5>{title}</h5>
        <p className='custom-text'>{text}</p>
      </div>
    </div>
  );
};

export default ContentCard;
