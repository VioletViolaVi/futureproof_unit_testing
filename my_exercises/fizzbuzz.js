const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else if (typeof num === "number") {
    return num;
  } else {
    return "Not valid, please use a number";
  }
};

console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(11)); // 11
console.log(fizzBuzz("apple")); // "Not valid, please use a number"

module.exports = {
  fizzBuzz,
};
