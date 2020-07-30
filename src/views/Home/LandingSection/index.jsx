import React from 'react';
import Navbar from '../../../components/Navbar';
import './LandingSection.scss';

const LandingSection = () => {
  return (
    <section className='landing-section'>
      <Navbar />
      <div className='content-section flexed-between align-center'>
        <article className='content'>
          <p>Your music career success partner</p>
          <h2>
            We back Nigerian indie artists from around the world and help them
            do their best work
          </h2>
          <p>
            We invest between N2m - N5m in marketing, production and promotional
            fees in youbg budding Nigerian artists and help them suceed with
            design support and our network of successful Indie musicians
          </p>
        </article>
        <img
          className='background-img'
          src='https://res.cloudinary.com/dmyu8akhu/image/upload/v1596052927/Hero_image_ng8oes.png'
          alt='background img'
        />
      </div>
    </section>
  );
};

export default LandingSection;
