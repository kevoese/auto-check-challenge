import React, { useState, useRef, useEffect } from 'react';
import MentorCardComp from '../../../components/MentorCardComp';
import './OurMentors.scss';
import { mentorContents } from '../../../utils/mockData';
// import TinySlider from 'tiny-slider-react';
// import Carousel from './Carousel';

const getGridStyles = (contents, pos, noTransition) => {
  const contentLength = contents.length;
  const gap = 7 / (contentLength - 1);
  const multiples = contentLength * gap;
  const percent = (100 - multiples - gap) / contentLength;
  const moveVal = pos * (percent + gap) + percent / 2;
  const styleObj = {
    transform: `translateX(-${moveVal}%)`,
    width: `${contentLength * 48}%`,
    gridTemplateColumns: `repeat(${contentLength}, minmax(${percent}%, ${percent}%))`,
    gridColumnGap: `${gap}%`,
  };
  return styleObj;
};

const patchArr = (arr, patchNum) => {
  const halfPos = Math.ceil(arr.length / 2);
  const startLength = arr.length - halfPos - Math.floor(patchNum / 2);
  const newChunk = arr.slice(startLength, startLength + patchNum);
  const modified = [...newChunk, ...arr, ...newChunk];
  return modified;
};

const modifiedArr = patchArr(mentorContents, 3);
const OurMentors = () => {
  const homeState = Math.ceil(modifiedArr.length / 2) - 2;
  const [pos, setPos] = useState(homeState);
  const [hideBtn, setHideBtn] = useState(false);
  const [noTransition, setNoTransition] = useState({
    state: false,
    leftType: false,
  });
  const mentorsRef = useRef();

  useEffect(() => {
    if (pos === 3 || pos === 6) {
      setNoTransition({ state: false, leftType: false });
    }
    if (pos > 6) {
      setNoTransition({ state: true, leftType: false });
      setPos(3);
    }
    if (pos < 0) {
      setNoTransition({ state: true, leftType: true });
      setPos(6);
    }
    setHideBtn(true);
    setTimeout(() => {
      setHideBtn(false);
    }, 600);
  }, [pos]);

  useEffect(() => {
    if (noTransition.state) {
      noTransition.leftType ? setPos(5) : setPos(4);
    }
  }, [noTransition.state]);

  // useEffect(() => {
  //   handleResizing();
  //   window.addEventListener('resize', handleResizing);
  // }, []);

  const handleNext = () => {
    setPos((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPos((prev) => prev - 1);
  };

  const myStyles = getGridStyles(modifiedArr, pos, noTransition);

  return (
    <div className='our-mentors'>
      <h2>Our mentors</h2>

      <div
        ref={mentorsRef}
        className={`second-grid-layout ${
          noTransition?.state ? 'no-transition' : ''
        }`}
        style={{ ...myStyles }}
      >
        {modifiedArr.map((ele, i) => {
          let classes = i === pos + 1 ? 'in-view' : 'not-in-view';
          return (
            <MentorCardComp
              handleNext={handleNext}
              handlePrev={handlePrev}
              classes={classes}
              key={i}
              {...ele}
            />
          );
        })}
      </div>
      {/* <div className='overlay flexed-between'></div> */}
    </div>
  );
};

export default OurMentors;
