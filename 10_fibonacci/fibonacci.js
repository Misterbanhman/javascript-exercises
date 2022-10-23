const fibonacci = function(number) {
    if (number === 1 || number === 2) {
        return 1;
    }

    else if (number<0) {
        return "OOPS"
    }

    else {
        let currentValue = 2;
        let previousValue = 1;
        let nextValue;

        for (let i=2;i<number;i++) {
            nextValue = currentValue + previousValue;
            previousValue = currentValue;
            currentValue = nextValue;
        }
        return previousValue;
    }

};

// Do not edit below this line
module.exports = fibonacci;
