// Interval List Intersections
// Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
// Return the intersection of these two interval lists.

// (Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
// The intersection of two closed intervals is a set of real numbers that is either empty,
// or can be represented as a closed interval.
// For example, the intersection of [1, 3] and [2, 4] is [2, 3].)

/*
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

// Runtime: 96 ms
// Memory Usage: 42.9 MB
var intervalIntersection = function(A, B) {
    let result = [];
    let i = 0, j = 0;
    while(i < A.length && j < B.length) {
        let max = Math.max(A[i][0], B[j][0])
        let min = Math.min(A[i][1], B[j][1])
        if(max <= min) {
            result.push([max, min])
        }

        if(A[i][1] < B[j][1]) {
            i++ // A length is over go to next one
        } else {
            j++
        }
    }
    return result
};
