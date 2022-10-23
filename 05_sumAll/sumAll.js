const sumAll = function(value1,value2) {
    //Initialize value holding the sum of values
    let summedValue = 0;
    if (typeof value1 != "number") {
        return "ERROR";
    }

    else if (typeof value2 != "number") {
        return "ERROR";
    }
    
    else if (value1>0 && value2>0) {
        if (value1<value2) {
            for (let i=value1;i<=value2;i++) {
                summedValue += i;
            }
            return summedValue;
        }

        else if (value2<value1) {
            for (let i=value2;i<=value1;i++) {
                summedValue += i;
            }
            return summedValue;
        }
        
        else {
            return "ERROR";
        }
    }

    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
