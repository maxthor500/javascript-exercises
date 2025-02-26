const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
    return total * current;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (n === 0) return 1;
  let result = 1;
	for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
