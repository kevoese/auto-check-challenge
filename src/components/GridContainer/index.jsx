import React, { useState } from 'react';
import './GridContainer.scss';
import ContentCard from '../ContentCard';
import BtnArrows from '../BtnArrows';
import TinySlider from 'tiny-slider-react';

const GridContainer = ({ contents, showArrows }) => {
  const [slider, setSlider] = useState();

  const [settings] = useState({
    nav: false,
    lazyload: true,
    mouseDrag: false,
    controls: false,
    center: true,
    gutter: 50,
    responsive: {
      '1000': {
        items: 3,
        edgePadding: 0,
      },
      '800': {
        items: 1,
        edgePadding: 100,
      },
      '350': {
        items: 1,
        edgePadding: 40,
      },
      '300': {
        items: 1,
        edgePadding: 20,
      },
    },
  });

  const onGoTo = (type) => {
    slider.slider.goTo(type);
  };

  return (
    <>
      {showArrows && (
        <BtnArrows
          disabled={false}
          handlePrev={() => onGoTo('prev')}
          handleNext={() => onGoTo('next')}
        />
      )}
      <div className='gridcontainer'>
        <TinySlider
          className='my-slider'
          settings={settings}
          ref={(ts) => setSlider(ts)}
        >
          {contents.map((ele, index) => (
            <ContentCard key={index} {...ele} />
          ))}
        </TinySlider>
      </div>
    </>
  );
};

export default GridContainer;
