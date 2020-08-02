import React, { useState, useRef, useEffect } from 'react';
import MentorCardComp from '../../../components/MentorCardComp';
import './OurMentors.scss';
import { mentorContents } from '../../../utils/mockData';
import {
  patchArr,
  getGridStyles,
  mentorCarouselSizes as sizes,
} from '../../../utils/helpers';
import useCarousel from '../../../customHook/useCarousel';

const modifiedArr = patchArr(mentorContents, 3);
const OurMentors = () => {
  const mentorsRef = useRef();
  const {
    pos,
    handlePrev,
    handleNext,
    hideBtn,
    getStyles,
    noTransition,
  } = useCarousel({
    modifiedArr,
    mentorsRef,
  });
  return (
    <div className='our-mentors'>
      <h2>Our mentors</h2>

      <div
        ref={mentorsRef}
        className={`second-grid-layout ${
          noTransition?.state ? 'no-transition' : ''
        }`}
        style={{ ...getStyles() }}
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
