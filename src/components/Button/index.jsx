import React from 'react';
import './Button.scss';

const Button = ({ Icon, name, classes, ...rest }) => {
  return (
    <button
      className={`button flexed-between align-center ${classes || ''}`}
      {...rest}
    >
      <span>{name}</span>
      {Icon && (
        <div className='icon'>
          <Icon />
        </div>
      )}
    </button>
  );
};

export default Button;
