import React from 'react';
import './ArticleComp.scss';
import BtnArrows from '../BtnArrows';
import GridContainer from '../GridContainer';
import Button from '../Button';
import Arrow from './Arrow';

const ArticleComp = ({
  contents,
  header,
  moreInfo,
  showArrows,
  buttonName,
}) => {
  return (
    <article className='article-comp grow'>
      <p className='custom-text'>{header}</p>
      <h5 className='custom-text'>{moreInfo}</h5>
      <GridContainer showArrows={showArrows} contents={contents} />
      {buttonName && (
        <div className='article-btn flexed-end'>
          <Button name={buttonName.toUpperCase()} Icon={Arrow} />
        </div>
      )}
    </article>
  );
};

export default ArticleComp;
