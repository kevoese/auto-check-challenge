import React, { useState, useRef, useEffect } from 'react';
import MentorCardComp from '../../../components/MentorCardComp';
import './OurMentors.scss';
import { mentorContents } from '../../../utils/mockData';
import {
  patchArr,
  getGridStyles,
  mentorCarouselSizes as sizes,
} from '../../../utils/helpers';

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
  const [resizeState, setResizeState] = useState({
    percent: 1,
    edge: 0.5,
  });

  useEffect(() => {
    if (pos === 3 || pos === 6) {
      setNoTransition({ state: false, leftType: pos === 3 ? false : true });
    }

    if (pos > 6) {
      setNoTransition({ state: true, leftType: false });
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
      noTransition.leftType ? setPos(6) : setPos(3);
    } else {
      if (pos === 3 || pos === 6) {
        noTransition.leftType ? setPos(5) : setPos(4);
      }
    }
  }, [noTransition.state]);

  // responsive screens
  useEffect(() => {
    handleResizing();
    window.addEventListener('resize', handleResizing);
    return () => {
      window.removeEventListener('resize', handleResizing);
    };
  }, []);

  const handleResizing = () => {
    const parentWidth = mentorsRef.current.parentElement.clientWidth;
    if (parentWidth > 550 && parentWidth < 800) {
      setResizeState(sizes.tab);
    } else if (parentWidth > 400 && parentWidth < 550) {
      setResizeState(sizes.phone);
    } else if (parentWidth < 400) {
      setResizeState(sizes.smallPhone);
    } else {
      setResizeState(sizes.default);
    }
  };

  const handleNext = () => {
    setPos((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPos((prev) => prev - 1);
  };

  return (
    <div className='our-mentors'>
      <h2>Our mentors</h2>

      <div
        ref={mentorsRef}
        className={`second-grid-layout ${
          noTransition?.state ? 'no-transition' : ''
        }`}
        style={{ ...getGridStyles(modifiedArr, pos, resizeState) }}
      >
        {modifiedArr.map((ele, i) => {
          let classes = i === pos + 1 ? 'in-view' : 'not-in-view';
          return (
            <MentorCardComp
              handleNext={handleNext}
              handlePrev={handlePrev}
              classes={classes}
              disabled={hideBtn}
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
