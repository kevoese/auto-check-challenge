import React from 'react';
import './WhatWeDo.scss';
import SideTitle from '../../../components/SideTitle';
import ArticleComp from '../../../components/ArticleComp';
import { articleContents } from '../../../utils/mockData';

const WhatWeDo = () => {
  return (
    <div id='whatwedo' className='what-we-do flexed-row'>
      <SideTitle text='What we do' />
      <ArticleComp
        contents={articleContents}
        header='You’re in great company'
        moreInfo={`Gidara seeks to connect young talented musicians with world class
        producers, managers etc`}
        showArrows
      />
    </div>
  );
};

export default WhatWeDo;
