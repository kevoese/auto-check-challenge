export const mentorCarouselSizes = {
  default: {
    percent: 1,
    edge: 0.5,
  },
  tab: {
    percent: 1.5,
    edge: 0.8,
  },
  phone: {
    percent: 2,
    edge: 0.98,
  },
  smallPhone: {
    percent: 2.2,
    edge: 1.02,
  },
};

export const getGridStyles = (contents, pos, resize) => {
  const contentLength = contents.length;
  const gap = 7 / (contentLength - 1);
  const multiples = contentLength * gap;
  const percent = (resize.percent * (100 - multiples)) / contentLength;
  const edgePadding = percent * resize.edge;
  const moveVal = pos * (percent + gap) + edgePadding;
  const styleObj = {
    transform: `translateX(-${moveVal}%)`,
    width: `${contentLength * 48}%`,
    gridTemplateColumns: `repeat(${contentLength}, minmax(${percent}%, ${percent}%))`,
    gridColumnGap: `${gap}%`,
  };
  return styleObj;
};

export const patchArr = (arr, patchNum) => {
  const halfPos = Math.ceil(arr.length / 2);
  const startLength = arr.length - halfPos - Math.floor(patchNum / 2);
  const newChunk = arr.slice(startLength, startLength + patchNum);
  const modified = [...newChunk, ...arr, ...newChunk];
  return modified;
};
