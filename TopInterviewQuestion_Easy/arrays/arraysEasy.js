//Remove Duplicates from Sorted Array
//my decision
//Because we have a sorted array, the duplicates will be in array just siblings
var removeDuplicates = function(nums) {
   for(let i = 1; i<nums.length; i++){
     if(nums[i]===nums[i-1]){
       nums.splice(i, 1);
       i--;
     }
   }
   console.log(nums);
};

//Best Time to Buy and Sell Stock II
//
var maxProfit = function(prices) {
    var maxprofit = 0;
    for(let i=1; i < prices.length; i++) {
       if (prices[i] > prices[i - 1]) {
          maxprofit += prices[i] - prices[i - 1];
       }
    }
    return maxprofit;
};

// Rotate Array
// My decision: I found other ways
var rotate = function(nums, k) {
  for (var i = 1; i <= k; i++) {
    let lastElement = nums.pop();
    nums.unshift(lastElement);
  }
  return nums;
};

//Contains Duplicate
//my decision - time complexity O(n2)
var containsDuplicate = function(nums) {
    let unique = nums.find(x => nums.indexOf(x) !== nums.lastIndexOf(x));
    if(unique!==undefined){
        return true;
    } else {
        return false;
    }
};

//decision O(nlogn)
var containsDuplicate = function(nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; ++i) {
        if (nums[i] == nums[i + 1]) return true;
    }
    return false;
}

//decision O(n) with Hashtable
var containsDuplicate = function(nums) {
    let hash = {};
    nums.forEach((item) => {
      if(!hash[item]){ hash[item] = 0; }
      hash[item]+=1;
    });

    for(let prop in hash) {
       if(hash[prop]>=2){
         return true;
       }
    }
    return false;
}

//Single Number
//O(n2)
var singleNumber = function(nums) {
    return nums.find(x => nums.indexOf(x) == nums.lastIndexOf(x));
};

//O(n)
var singleNumber = function(nums) {
    let hash = {};
    nums.forEach((item) => {
      if(!hash[item]){ hash[item] = 0; }
      hash[item]+=1;
    });
    for(let prop in hash) {
       if(hash[prop]==1){
         return prop;
       }
    }
    return false;
}

//Intersection of Two Arrays II
var intersect = function(nums1, nums2) {
  let res = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};

//Plus One
var plusOne = function(digits) {
    checkNine(digits, digits.length-1);
    return digits;
};

function checkNine(arr, num) {
    if(arr[num]==9) {
       arr[num] = 0;
       num--;
       if(num==-1) {
           return arr.unshift(1);
       }
       return checkNine(arr, num)
    } else {
       return arr[num]++;
    }
}
// cleaner solution
var plusOne = function(digits) {
    const n = BigInt(digits.join('')) + BigInt(1)
    return n.toString().split('')
};

// faster solution
var plusOne = function(digits) {
    var len = digits.length;

    for (var i = len - 1; i >= 0; i--) {
        if (digits[i]<9) {digits[i] = digits[i]+1; break;}
        else {digits[i] = 0; continue;}
    }

    if (digits.every(val => val ==0)) {
        digits.push(0);
        digits[0] = 1;
    }
    return digits;
}

//Move Zeroes
//O(n)
var moveZeroes = function(nums){
    let k = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            k++;
            nums.splice(i, 1);
            i--;
        }
    }
    for(let j=1; j<=k; j++) {
        nums.push(0);
    }
    return nums;
};

//Two Sum
//my decision O(n2);
var twoSum = function(nums, target) {
    var result =[];
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if((nums[i]+nums[j]) == target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    return result;
};


// better decision use Hashtable
var twoSum = function(nums, target) {
   let map = {};
   for (var i = 0; i < nums.length; i++) {
       let compliment = target - nums[i];

       if (compliment in map) {
           return [map[compliment], i];
       }
       map[nums[i]] = i;
   }
 }

 //Valid Sudoku
 var isValidSudoku = function(board) {
    if (!board || board.length !== 9) { return false }
      const newArray = () => []
      const col = board.map(newArray)
      const row = board.map(newArray)
      const sub = board.map(newArray)

      for (let r = 0; r < 9; r++) {
        if (board[r].length !== 9) { return false }

        for (let c = 0; c < 9; c++) {
          const num = board[r][c]
          const subOffset = 3 * (r / 3 | 0) + (c / 3 | 0)
          if (num !== '.') {
            if (!(num >= 1 && num <= 9) ||
                row[r][num] ||
                col[c][num] ||
                sub[subOffset][num]
            ) {
              return false
            }
            row[r][num] = true
            col[c][num] = true
            sub[subOffset][num] = true
          }
        }
      }

      return true
};

//Rotate image
//my solution

var rotate = function(matrix) {
    let len = matrix.length;
    for(let i=0; i<Math.floor(len/2); i++){
        for(let j=0; j<len-(2*i)-1; j++){
            let temp =  matrix[i+j][len-1-i];
            matrix[i+j][len-1-i] = matrix[i][i+j];
            matrix[i][i+j] = temp;

            temp = matrix[len-1-i][len-1-i-j];
            matrix[len-1-i][len-1-i-j] = matrix[i][i+j];
            matrix[i][i+j] = temp;

            temp = matrix[len-1-i-j][i];
            matrix[len-1-i-j][i] = matrix[i][i+j];
            matrix[i][i+j] = temp;
        }
    }
};

//best solution according time on LeetCode
var rotate = function(matrix) {
    for(let layer = 0; layer < matrix.length; layer++) {
        const endpoint = matrix.length - layer - 1;
        for (let i = layer; i < endpoint; i++) {
            const invertedI = endpoint - i + layer;
            [matrix[layer][i],
             matrix[i][endpoint],
             matrix[endpoint][invertedI],
             matrix[invertedI][layer]] =
            [matrix[invertedI][layer], matrix[layer][i], matrix[i][endpoint], matrix[endpoint][invertedI]]
        }
    }
};

//find first duplicate in the array
function findFirstDuplicateIndex(arr){
  var found = {};
  for (var a = 0; a < arr.length ; a++) {
    if (found[arr[a]]) {
      return found[arr[a]];
    }
    found[arr[a]] = a
  }
}

//find unique between two Arrays
var array3 = array1.filter(function(obj) {
  return array2.indexOf(obj) == -1;
});
