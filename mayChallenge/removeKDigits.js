// Given a non-negative integer num represented as a string,
// remove k digits from the number so that the new number is the smallest possible.

// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// Runtime: 84 ms
// Memory Usage: 35.9 MB

var removeKdigits = function(num, k) {
      if (k==0) return num;
      num = num.split('');
      let i=0;
      while(k>0){
        while(num[i]<=num[i+1]&&i<num.length-1) i++;
        num.splice(i,1);
        k--;
        i=0;
      }
      return num.join('').replace(/^0+/, "") || "0";
};

//Runtime: 64 ms
//Memory Usage: 35.8 MB

const removeKdigits = function(num, k) {
    let stack = [];

    for (let i = 0, len = num.length; i < len; i++) {
    let curr = num[i];

        while (stack.length > 0 && k > 0 && curr < stack[stack.length - 1] && k > 0) {
          stack.pop();
          k--;
        }
        stack.push( curr );
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    return stack.length > 0 ? stack.join( '' ) : '0';
};
