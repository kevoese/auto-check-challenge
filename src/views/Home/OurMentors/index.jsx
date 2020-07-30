import React from 'react';
import MentorCardComp from '../../../components/MentorCardComp';
import './OurMentors.scss';
import { mentorContents } from '../../../utils/mockData';

const OurMentors = () => {
  return (
    <div className='our-mentors'>
      <h2>Our mentors</h2>
      <div className='second-grid-layout'>
        {/* <div className='overlay flexed-between'></div> */}
        {mentorContents.map((ele, index) => (
          <MentorCardComp key={index} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default OurMentors;
