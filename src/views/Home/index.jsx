import React from 'react';
import './Home.scss';
import Newsletter from './Newsletter';
import LandingSection from './LandingSection';
import WhatWeDo from './WhatWeDo';
import OurMentors from './OurMentors';
import Resources from './Resources';

const Home = () => {
  return (
    <div className='home'>
      <LandingSection />
      <WhatWeDo />
      <OurMentors />
      <Resources />
      <Newsletter />
    </div>
  );
};

export default Home;
