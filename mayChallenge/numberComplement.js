// Number Complement
// Given a positive integer, output its complement number.
// The complement strategy is to flip the bits of its binary representation.

// my solution
// Runtime: 56 ms
// Memory Usage: 34.2 MB

var findComplement = function(num) {
    var newNum = (num).toString(2);
    for(var i=0; i<newNum.length; i++) {
        if(newNum[i]=='0'){
            newNum = newNum.substring(0, i) + '1' + newNum.substring(i + 1);
        } else {
            newNum = newNum.substring(0, i) + '0' + newNum.substring(i + 1);
        }
    }
    return parseInt(newNum, 2);
};

// I checked all other solutions from LeetCode and
// on today did not find much better according time or memory
// one more solution
// Runtime: 56 ms
// Memory Usage: 33.9 MB

var findComplement = function(num) {
    let result = ''
    const binary = num.toString(2)
    for (let i = 0; i < binary.length; i++) {
        result += binary[i] ^ 1
    }
    return parseInt(result, 2)
};
