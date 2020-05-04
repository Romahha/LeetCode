//Jewels and Stones

/*You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct,
and all characters in J and S are letters.
Letters are case sensitive,
so "a" is considered a different type of stone from "A"*/

/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//my solution
//Runtime: 72 ms
//Memory Usage: 34.3 MB

var numJewelsInStones = function(J, S) {
    var map = {};
    var result = 0;
    var Sarr = S.split('');
    Sarr.forEach(function(item){
        if(!map[item]) {
            map[item] = 0;
        }
        map[item]+=1;
    });
    for(var i=0; i<J.length; i++) {
        if(map[J[i]]){
            result = result + map[J[i]];
        }
    }
    return result;
};

//better solution according time
//Runtime: 60 ms
//Memory Usage: 34 MB

var numJewelsInStones = function(J, S) {
  let count = 0
  for (let i = 0; i < S.length; i += 1) {
      count += Number(J.includes(S[i]))
  }
  return count
};
