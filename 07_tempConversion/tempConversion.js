const ctof = function(celsius) {
  if (typeof celsius !== "number") return "ERROR"
  return parseFloat((celsius * 9/5 + 32).toFixed(1));
};

const ftoc = function(fahrenheit) {
  if (typeof fahrenheit !== "number") return "ERROR"
  return parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
