const removeFromArray = function(arr, ...args) {
    let result = arr.filter(element => {
        if (![...args].includes(element)) return element
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
