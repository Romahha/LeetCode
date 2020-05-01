//reverse the toString
// my decision
var reverseString = function(s) {
    return s.reverse();
};

//best decision according time;
var reverseString = function(s) {
    const rev = (str, i1, i2) =>{
        if (i1 > i2) return;

        let temp = str[i2]
        str[i2] = str[i1]
        str[i1] = temp;

        i1++;
        i2--;
        rev(str, i1, i2)
    }
    rev(s, 0, s.length - 1)
};

//Reverse Integer
//my decision
var reverse = function(x) {
    var reverseN = +String(Math.abs(x)).split('').reverse().join('');
    if(reverseN> Math.pow(2,31) - 1){
        return 0;
    } else if (x < 0) {
        reverseN = '-' + reverseN;
        return reverseN;
    } else {
        return reverseN;
    }
};

//better solution
var reverse = function(x) {
    let num = x.toString();
    let rev = '';
    let op = x<0 ? -1 : 1;
    for(var i=num.length -1;i>=0;i--){
        rev += num.charAt(i);
    }
    var newint = parseInt(rev) * -1;
    if (newint > Math.pow(2,31) -1 || newint < Math.pow(-2,31)){
        return 0
    }
    return parseInt(rev) * op;
};

//First Unique in the string
//my decision
var firstUniqChar = function(s) {
    var arr = s.split('');
    let result = arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x));
    result = arr.indexOf(result);
    return result;
};

// better decision
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
            return i
        }
    }
    return -1;
};

//is isAnagram
var isAnagram = function(s, t) {
    s = s.split('');
    t = t.split('');
    s.sort();
    t.sort();
    s = s.join('');
    t = t.join('');
    if(s == t) {
        return true;
    }
    return false;
};
