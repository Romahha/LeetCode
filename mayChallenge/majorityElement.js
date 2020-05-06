// Majority Element
// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty
// and the majority element always exist in the array.
/*
 * @param {number[]} nums
 * @return {number}
 */
// my solution
// Runtime: 60 ms
// Memory Usage: 37 MB

var majorityElement = function(nums) {
    var object = {};
    var result = 0;
    var len = nums.length/2;
    nums.forEach(function(item) {
        if(!object[item]){
            object[item] = 0;
        }
        object[item] += 1;
        if(object[item] > len) {
            result = item;
        }
    })
    return result;
};
