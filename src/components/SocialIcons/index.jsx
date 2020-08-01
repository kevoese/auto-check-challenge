import React from 'react';
import './SocialIcons.scss';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Google from './Google';
import Instagram from './Instagram';

const SocialIcons = () => {
  return (
    <div className='socialicons flexed-between'>
      <Twitter />
      <Facebook />
      <Google />
      <Instagram />
    </div>
  );
};

export default SocialIcons;
