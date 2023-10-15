/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let freq = new Map();   // Create Object Map to track frequency of numbers appearing
    let max = 0
    for (let num of nums){  // Loop through array in order
        if (num < k){
            if (freq.get(k - num)) {    // If (k - num) is in freq map ( freq.get() returns undefined if key does not exist )
                freq.set(k - num, freq.get(k - num) - 1) // subtract 1 from count of freq(k - num)
                max++                   // Found a match, output++
            }
            else{                       // If (k - num) is NOT in freq map
                freq.set(num, (freq.get(num) || 0) + 1) // add it to freq map
            }          // logical OR returns 2nd value if first value is falsey
        }
    }
    return max
};

let freq = new Map()
freq.set(1, "hii")


console.log(maxOperations([1,2,3,4], 5))
