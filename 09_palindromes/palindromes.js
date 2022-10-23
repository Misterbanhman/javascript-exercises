const palindromes = function (string) {
    let stringToArray = toArray(string);
    stringToArray = removeSpecialCharacter(stringToArray);
    stringToArray = arrayToLowerCase(stringToArray);

    let halfIndex = Math.floor(stringToArray.length/2);
    let endIndex = stringToArray.length-1;
    let palindromesCheck = true;

        for (let i=0;i<halfIndex;i++) {
            if (stringToArray[i] === stringToArray[endIndex-i]) {
                palindromesCheck = true;
            }

            else {
                return false;
            }
        }
        return true;
};

function toArray(string) {
    let array = string.split('');
    return array;
}

function removeSpecialCharacter(array) {
    let toRemove = ['!',',','.',' '];
    
    let lengthOfArray = array.length;
    let lengthOfRemovedItems = toRemove.length;

    let indexOfElement

    for (let i=0;i<lengthOfArray;i++) {
        for (let j=0;j<lengthOfRemovedItems;j++) {
            indexOfElement = array.indexOf(toRemove[j]);
            if (indexOfElement !== -1) {
                array.splice(indexOfElement,1);
            }
        }
    }
    return array;   
}

function arrayToLowerCase(array) {
    let modifiedArray = '';
    let lengthOfArray = array.length;

    for (let i=0;i<lengthOfArray;i++) {
        modifiedArray += array[i].toLowerCase();
    }
    return modifiedArray;
}

// Do not edit below this line
module.exports = palindromes;
