// Reverse String

// Write a function that reverses a string.
// The input string is given as an array of characters char[].
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


// Runtime: 96 ms
// Memory Usage: 42.9 MB

var reverseString = function(s) {
    return s.reverse();
};

// other solution
// Runtime: 100 ms
// Memory Usage: 43.4 MB

var reverseString = function(s) {
    let l = 0;
    let r = s.length-1;
    while(l<=r){
        const lTemp = s[l];
        const rTemp = s[r];
        if(lTemp && rTemp){
            s[l]=rTemp;
            s[r]=lTemp;
        }
        l++;
        r--;
    }
};
