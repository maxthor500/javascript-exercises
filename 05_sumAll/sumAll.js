const sumAll = function(num1, num2) {
    if (((typeof num1 !== "number")) || 
        (typeof num2 !== "number")) return "ERROR";

    if (num1 < 0 || num2 < 0) return "ERROR";

    let numbers = [num1, num2].sort()

    let sum  = 0;
    for (let i = numbers[0]; i <= numbers[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
