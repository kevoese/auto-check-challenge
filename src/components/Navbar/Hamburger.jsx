import React from 'react';

const Hamburger = () => {
  return (
    <svg
      width='35'
      height='30'
      viewBox='0 0 35 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='pointers'
    >
      <path d='M35 0H0V2H35V0Z' fill='white' />
      <path d='M35 14H0V16H35V14Z' fill='white' />
      <path d='M35 28H0V30H35V28Z' fill='white' />
    </svg>
  );
};

export default Hamburger;
