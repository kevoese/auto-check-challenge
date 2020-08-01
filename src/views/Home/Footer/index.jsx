import React from 'react';
import './Footer.scss';
import Logo from '../../../components/Logo';
import LinkComp from './LinkComp';
import { footerLinksMock } from '../../../utils/mockData';
import SocialIcons from '../../../components/SocialIcons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-links-container flexed-between'>
        <div className='footer-links flexed-between'>
          <LinkComp title='Store' links={footerLinksMock} />
          <LinkComp title='About' links={footerLinksMock} />
          <LinkComp title='Catalog' links={footerLinksMock} />
        </div>
        <div className='gidara-container flexed-between'>
          <Logo />
          <div className='info grow'>
            <h5 className='custom-text'>Gidara</h5>
            <p className='custom-text'>Your music career success partner</p>
          </div>
        </div>
      </div>
      <div className='copy-right-wrap flexed-between align-center'>
        <p className='custom-text'>&copy; 2018. All rights reserved</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
