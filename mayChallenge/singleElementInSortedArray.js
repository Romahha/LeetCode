// Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice,
// except for one element which appears exactly once.
// Find this single element that appears only once.

/*
 * @param {number[]} nums
 * @return {number}
 */

// my solution, we could also use for loop with the same logic and the same time
// Runtime: 52 ms
// Memory Usage: 35.1 MB


var singleNonDuplicate = function(nums) {
    let i = 0
    while(i < nums.length) {
        if(nums[i] !== nums[i+1]) return nums[i]
        i+=2
    }
};


// better solution, using the binarySearch
// Runtime: 40 ms
// Memory Usage: 34.4 MB

var singleNonDuplicate = function(nums) {

  if (nums.length === 0) {
    return 0
  }

  function binarySearch() {
    let start = 0
    let end = nums.length

    while (start <= end) {
      let middle = Math.floor((start + end) / 2)

      if (nums[middle + 1] === nums[middle]) {
        if (middle % 2 === 0) {
          start = middle + 1
        }
        else {
          end = middle
        }
      }
      else if (nums[middle - 1] === nums[middle]) {
        if (middle % 2 === 0) {
          end = middle
        }
        else {
          start = middle + 1
        }
      }
      else {
        return nums[middle]
      }
    }
    return -1
  }

  return binarySearch()
};
