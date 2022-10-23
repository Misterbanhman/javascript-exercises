const reverseString = function(string) {
    let stringList = string.split('');
    let lengthOfString = stringList.length;
    let lastIndex = lengthOfString - 1;
    let reversedString = '';

    for (let i=0;i<lengthOfString;i++) {
        reversedString += stringList[lastIndex-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
