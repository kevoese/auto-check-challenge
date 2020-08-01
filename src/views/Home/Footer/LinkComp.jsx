import React from 'react';

const LinkComp = ({ title, links }) => {
  return (
    <div className='links-comp'>
      <h5 className='custom-text'>{title}</h5>
      <div className='links-wrap'>
        {links.map(({ name, path }, index) => (
          <a className='custom-text link-tag' key={index}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkComp;
