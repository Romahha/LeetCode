// Maximum Sum Circular Subarray

// Given a circular array C of integers represented by A,
// find the maximum possible sum of a non-empty subarray of C.

// Here, a circular array means the end of the array connects to the beginning of the array.
// (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

// Also, a subarray may only include each element of the fixed buffer A at most once.
// (Formally, for a subarray C[i], C[i+1], ..., C[j],
// there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

var maxSubarraySumCircular = function(A) {
    let maxSum = A[0];
    let prevMax = 0;
    let minSum = A[0];
    let prevMin = 0;
	  let total = 0;
    let allNegative = true;

    for(var i=0; i<A.length; i++){
        if(prevMax > 0) {
            prevMax += A[i];
        } else {
            prevMax = A[i];
        }

        if(prevMin < 0) {
            prevMin += A[i];
        } else {
            prevMin = A[i];
        }

        if(prevMax > maxSum) maxSum = prevMax;
        if(prevMin < minSum) minSum = prevMin;

        if(A[i] > 0) allNegative = false;
        total += A[i];;
    }

    if(allNegative) return maxSum;
    return Math.max(maxSum, (total - minSum))
};
