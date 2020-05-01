/*You are a product manager and currently leading
a team to develop a new product. Unfortunately,
the latest version of your product fails the quality check.
Since each version is developed based on the previous version,
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n]
and you want to find out the first bad one,
which causes all the following ones to be bad.
You are given an API bool isBadVersion(version)
which will return whether version is bad.
Implement a function to find the first bad version.
You should minimize the number of calls to the API.*/

/*Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/* @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /* @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     return function(n) {
        let start = 1, end = n
        while(start < end) {
            const result = Math.floor((end + start) / 2)
            if(isBadVersion(result)) {
                end = result
            } else {
                start = result + 1
            }
        }
        return end
    };
};

// best solution according runtime
var solution = function(isBadVersion) {

    return function(n) {
        return findFirstBad(1,n);
        function findFirstBad(firstVersion, lastVersion) {
            if (lastVersion - firstVersion < 2) {
                if (isBadVersion(firstVersion)) {
                    return firstVersion;
                }
                return lastVersion;
            }
            const middle = Math.ceil((firstVersion + lastVersion) / 2);
            if (isBadVersion(middle)) {
                //check left
                return findFirstBad(firstVersion, middle);
            }
            return findFirstBad(middle, lastVersion);
        }

    };
};

// best solution according memory
var solution = function(isBadVersion) {
    
    return function(n) {
        let left = 0;
        let right = n;
        while (right - left !== 1) {
            let mid = parseInt((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return right;
    };
};
