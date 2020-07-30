import React from 'react';
import './Resources.scss';
import SideTitle from '../../../components/SideTitle';
import ArticleComp from '../../../components/ArticleComp';
import { articleContents } from '../../../utils/mockData';

const Resources = () => {
  return (
    <div className='resources'>
      <SideTitle text='Resources' />
      <ArticleComp
        header='Resources for student artists'
        contents={articleContents}
        buttonName='View all resources'
      />
      <ArticleComp
        header='Resources for student artists'
        contents={articleContents}
        buttonName='View all resources'
      />
    </div>
  );
};

export default Resources;
