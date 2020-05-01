//Palindrome number
//best solution
var isPalindrome = function(x) {
    if (x < 0) return false;
    let reversed = 0, remainder, working = x;
    while (working != 0) {
        remainder = working  % 10
        reversed = reversed * 10 + remainder;
        working = parseInt(working / 10)
    }
    return x == reversed;
}
//my solution
var isPalindrome = function(x) {
    if(x<0) {
        return false;
    } else {
        let reverse = x.toString().split('').reverse().join('');
        console.log(x, reverse);
        if(x == reverse) {
          return true;
        }
        return false;
    }
}
