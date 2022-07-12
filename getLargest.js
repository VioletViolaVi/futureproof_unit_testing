// code to be tested
const getLargest = (a, b, c) => {
  console.log(a, b, c);
  return Math.max(a, b, c);
};

console.log(getLargest(...[1, 2, 3]));

// needs exporting
module.exports = getLargest;
