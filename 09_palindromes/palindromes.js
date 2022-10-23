const palindromes = function (string) {
    let stringToArray = string.split('');

    let halfIndex = Math.floor(stringToArray.length/2);
    let endIndex = stringToArray.length-1;
    let palindromesCheck = true;

    if (stringToArray.length % 2 != 0){
        for (let i=0;i<halfIndex;i++) {
            if (stringToArray[i] === stringToArray[endIndex-i]) {
                palindromesCheck = true;
            }

            else {
                return false;
            }
        }
        return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
