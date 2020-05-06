// First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

/*
 * @param {string} s
 * @return {number}
*/

// my solution
// Runtime: 120 ms
// Memory Usage: 39.1 MB

var firstUniqChar = function(s) {
    var arr = s.split('');
    let result = s.split('').find(x => arr.indexOf(x) === arr.lastIndexOf(x));
    return arr.indexOf(result);
};

// Better solution according the time;
// Runtime: 60 ms
// Memory Usage: 38 MB
/*
* @param {string} s
* @return {number}
*/
var firstUniqChar = function(s) {
 let n = s.length;
 let count = new Array(256);
 for(let i = 0; i<count.length ; i++){
   count[i] = -1;
 };

 for(let i = 0; i<n ; i++){
     let index = s.charCodeAt(i);
     if(count[index] == -1){
         count[index] = i;
     }else{
       count[index] = -2;
     }
 };
 let res = Infinity;
 for(let i =0;i<count.length;i++){
   if(count[i]>=0){
     res = Math.min(res,count[i]);
   }
 };
 return res == Infinity? -1 : res;
};
