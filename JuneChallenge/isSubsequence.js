// Is Subsequence

// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// If there are lots of incoming S, say S1, S2, ... ,
// Sk where k >= 1B, and you want to check one by one to see if T has its subsequence.
// In this scenario, how would you change your code?

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Runtime: 68 ms
// Memory Usage: 36.2 MB

var isSubsequence = function(s, t) {
    var i = 0, j = 0;
    while(i<s.length && j<t.length){
       if(s[i] == t[j]){
          i = i+1
       }
       j = j + 1
    }
    return i == s.length;
};

// worth solution usilng recursion
// Runtime: 88 ms
// Memory Usage: 33.1 MB

var isSubsequence = function (s, t) {
    if (!s) return true;
    if (!t) return false;
    let char = s[0];
    let index = t.indexOf(char);
    if (index > -1) {
        s = s.substring(1);
        t = t.substring(index + 1);
        return isSubsequence(s, t);
    } else {
        return false;
    }
};
