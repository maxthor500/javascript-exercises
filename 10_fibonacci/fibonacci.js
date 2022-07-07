const fibonacci = function(num) {
    let sequence = [0];

    if (num < 0) return "OOPS";

    for (let i = 1; i <= parseInt(num); i++) {
        if (i > 1) {
            sequence.push(sequence[i-1] + sequence[i-2]);
        } else {
            sequence.push(1);
        }
    }

    return sequence[sequence.length -1]
};

// Do not edit below this line
module.exports = fibonacci;
