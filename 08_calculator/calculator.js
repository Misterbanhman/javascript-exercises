const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let summedValue = 0;
  for (let i=0; i<array.length;i++){
    summedValue += array[i];
  }
  return summedValue;
};

const multiply = function(array) {
  let summedValue = 1;
  for (let i=0; i<array.length;i++){
    summedValue *= array[i];
  }
  return summedValue;
};

const power = function(number,exponent) {
	let powerFinalValue=1;
  for (let i=0; i<exponent;i++){
    powerFinalValue *= number
  }
  return powerFinalValue;
};

const factorial = function(number) {
	let product = 1;
  for (let i=1;i<=number;i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
