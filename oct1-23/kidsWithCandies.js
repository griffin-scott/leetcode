/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((kid) => kid + extraCandies >= Math.max(...candies))
};
