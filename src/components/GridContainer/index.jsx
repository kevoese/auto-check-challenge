import React from 'react';
import './GridContainer.scss';
import ContentCard from '../ContentCard';

const GridContainer = ({ contents }) => {
  return (
    <div className='gridcontainer'>
      <div className='grid-layout'>
        {contents.map((ele, index) => (
          <ContentCard key={index} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default GridContainer;
