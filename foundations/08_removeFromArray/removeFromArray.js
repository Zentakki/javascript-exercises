const removeFromArray = function(arr, ...rest) {
    for (let arg of arguments) {
        while (arr.includes(arg)) {
            arr.splice(arr.indexOf(arg), 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
