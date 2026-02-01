const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sum = arr.reduce((total, current) => {
        return total += current;
    }, 0);
    return sum
};

const multiply = function(arr) {
	const multiply = arr.reduce((total, current) => {
        return total *= current;
    }); // no initial value passed, it will be the first element of the array
    return multiply
};

const power = function(b, e) {
	return b**e;
};

const factorial = function(a) {
    if (a === 0 || a === 1) return 1;
    let total = a;
	for (let c = a - 1; c > 0; c--) {
        total *= c;
    };
    return total;
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
