// Power of Two
// Given an integer, write a function to determine if it is a power of two.
/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n >= 1) {
        if (n === 1) {
            return true;
        }
        n /= 2;
    }
    return false;
};
