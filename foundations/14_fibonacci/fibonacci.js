// recursive approach

// const fibonacci = function(n) {
//     n = Number(n);
//     if (n < 0) return 'OOPS';
//     if (n === 0) return 0;
//     if (n === 1 || n === 2) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

// iterative approach

// const fibonacci = function(n) {
//     n = Number(n);
//     if (n < 0) return 'OOPS';
//     if (n === 0) return 0;
//     const fib = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     };
//     return fib[n];
// };

// recursive with memoization approach

const fibonacci = function(n, memo = {}) {
    n = Number(n);
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Do not edit below this line
module.exports = fibonacci;
