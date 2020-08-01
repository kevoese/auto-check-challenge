import React, { useRef, useState, useEffect } from 'react';
import './GridContainer.scss';
import ContentCard from '../ContentCard';
import { modifyArr, getGridStylesNew, patchArr } from '../../utils/helpers';
import BtnArrows from '../BtnArrows';

const GridContainer = ({ contents, showArrows }) => {
  const modified = modifyArr(contents, 3);
  const containerRef = useRef();
  const [pos, setPos] = useState(0);
  const [hideBtn, setHideBtn] = useState(false);
  const [noTransition, setNoTransition] = useState({
    state: false,
    leftType: false,
  });
  const [resizeState, setResizeState] = useState({
    percent: 1,
    edge: 0.5,
  });

  useEffect(() => {
    if (pos === 3 || pos === 6) {
      setNoTransition({ state: false, leftType: false });
    }
    if (pos > 6) {
      setNoTransition({ state: true, leftType: false });
      setPos(3);
    }
    if (pos < 0) {
      setNoTransition({ state: true, leftType: true });
      setPos(6);
    }
    setHideBtn(true);
    setTimeout(() => {
      setHideBtn(false);
    }, 600);
  }, [pos]);

  useEffect(() => {
    if (noTransition.state) {
      noTransition.leftType ? setPos(5) : setPos(4);
    }
  }, [noTransition.state]);

  const handleNext = () => {
    setPos((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPos((prev) => prev - 1);
  };
  return (
    <>
      {showArrows && (
        <BtnArrows
          disabled={hideBtn}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
      <div className='gridcontainer'>
        <div
          style={{ ...getGridStylesNew(modified, pos, { percent: 1 }) }}
          ref={containerRef}
          className={`grid-layout ${
            noTransition?.state ? 'no-transition' : ''
          }`}
        >
          {modified.map((ele, index) => (
            <ContentCard key={index} {...ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GridContainer;
