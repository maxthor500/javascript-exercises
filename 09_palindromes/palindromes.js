const palindromes = function (word) {
    let punctuationless = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let spaceless = punctuationless.replace(/\s*/g,"").toLowerCase();

    let reverse = ""
    for (let i = spaceless.length - 1; i >= 0; i--) {
        reverse += spaceless[i];
    }

    if (spaceless === reverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
