// Search Insert Position

// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Runtime: 68 ms
// Memory Usage: 35.9 MB

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var searchInsert = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        if (target <= nums[index]) {
          return index;
        }
      }
    return nums.length;
};
