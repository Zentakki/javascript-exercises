// const removeFromArray = function(arr, ...rest) {
//     for (let arg of arguments) {
//         while (arr.includes(arg)) {
//             arr.splice(arr.indexOf(arg), 1)
//         }
//     }
//     return arr
// };

// without modifying the original array

const removeFromArray = function(arr, ...rest) {
    return arr.filter((item) => !rest.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
