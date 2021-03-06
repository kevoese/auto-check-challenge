import React, { useEffect, useState } from 'react';
import { getGridStyles, mentorCarouselSizes as sizes } from '../utils/helpers';

const useCarousel = ({ mentorsRef, modifiedArr }) => {
  const homeState = Math.ceil(modifiedArr.length / 2) - 2;
  const [pos, setPos] = useState(homeState);
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
      setNoTransition({ state: false, leftType: pos === 3 ? false : true });
    }

    if (pos > 6) {
      setNoTransition({ state: true, leftType: false });
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
      noTransition.leftType ? setPos(6) : setPos(3);
    } else {
      if (pos === 3 || pos === 6) {
        noTransition.leftType ? setPos(5) : setPos(4);
      }
    }
  }, [noTransition.state]);

  // responsive screens
  useEffect(() => {
    handleResizing();
    window.addEventListener('resize', handleResizing);
    return () => {
      window.removeEventListener('resize', handleResizing);
    };
  }, []);

  const handleResizing = () => {
    const parentWidth = mentorsRef.current.parentElement.clientWidth;
    if (parentWidth > 550 && parentWidth < 800) {
      setResizeState(sizes.tab);
    } else if (parentWidth > 400 && parentWidth < 550) {
      setResizeState(sizes.phone);
    } else if (parentWidth < 400) {
      setResizeState(sizes.smallPhone);
    } else {
      setResizeState(sizes.default);
    }
  };

  const handleNext = () => {
    setPos((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPos((prev) => prev - 1);
  };

  const getStyles = () => getGridStyles(modifiedArr, pos, resizeState);

  return { pos, handlePrev, handleNext, hideBtn, getStyles, noTransition };
};

export default useCarousel;
