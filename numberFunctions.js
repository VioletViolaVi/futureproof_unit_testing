// code to be tested
const getLargest = (a, b, c) => {
  if (a && b && c) {
    return Math.max(a, b, c);
  } else {
    throw "ERROR: all inputs must have a value";
  }
};

const getSmallest = (a, b, c) => {
  if (a && b && c) {
    return Math.min(a, b, c);
  } else {
    throw "ERROR: all inputs must have a value";
  }
};

// needs exporting
module.exports = {
  getLargest,
  getSmallest,
  /* 
    - same as above: 
    getLargest: getLargest,
    getSmallest: getSmallest, 
  */
};
