// Two City Scheduling
// There are 2N people a company is planning to interview.
// The cost of flying the i-th person to city A is costs[i][0],
// and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

/*
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));
    console.log(costs);
    let total = 0
    for (let i = 0; i < costs.length; i++) {
        if (i < costs.length / 2) total += costs[i][1]
        else total += costs[i][0]
    }
    return total

};
