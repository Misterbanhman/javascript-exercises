const removeFromArray = function(array) {
    let indexOfElement;
    if (arguments.length>1){
        for (let i=1;i<arguments.length;i++) {
            indexOfElement = array.indexOf(arguments[i]);
            if (indexOfElement !== -1) {
                array.splice(indexOfElement,1);
            }
        }
        return array;
    }
    else{
    return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
