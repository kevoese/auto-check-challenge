import React from 'react';
import './Newsletter.scss';
import Button from '../../../components/Button';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <p className='custom-text'>Great updates</p>
      <h2>
        Sign up to our newsletter to get updates on events, news and
        opportunities
      </h2>
      <div className='subscribe flexed-center'>
        <input
          type='email'
          name='email'
          placeholder='Username or email'
          id=''
        />
        <Button name='Subscribe' classes='newsletter-btn' />
      </div>
    </div>
  );
};

export default Newsletter;
