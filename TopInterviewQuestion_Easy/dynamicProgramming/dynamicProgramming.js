/*
Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/

/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Number.MAX_VALUE;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        }
        else if (prices[i] - minprice > profit)
            profit = prices[i] - minprice;
        }
    return profit;
};

// Climbing Stairs

/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.*/

/*
 * @param {number} n
 * @return {number}
 */
 
var climbStairs = function(n) {
    let current;
    if (n <= 2) {
        return n;
    }
    let prevPrev = 1;
    let prev = 2;

    for (let i = 3; i <= n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
        console.log(prevPrev);
    }
    return current;
};
