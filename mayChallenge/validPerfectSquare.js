// Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.
/*
 * @param {number} num
 * @return {boolean}
 */

// my solution using for loop
// Runtime: 1116 ms
// Memory Usage: 34.7 MB
var isPerfectSquare = function(num) {
    if(num === 1) return true;

    for(let i=1; i<= num / 2; i++){
        if(i*i === num) return true;
    }
    return false;
};

// better solution
// Runtime: 56 ms
// Memory Usage: 33.6 MB
/*
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function(num) {
     if(num==1) {
         return true;
     }
     var low=0;
     var mid;
     var high=Math.floor(num/2);
     while(low<=high) {
         mid=Math.floor((low+high)/2);
         if(mid*mid<num) {
              low=mid+1;
         } else if(mid*mid > num) {
              high=mid-1;
         } else {
              return true;
         }
     }
     return false;
};
