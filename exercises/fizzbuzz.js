const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz("apple"));
console.log(typeof ("apple" % 2));

module.exports = {
  fizzBuzz,
};
