var increasingTriplet = function(nums) {
    let first = Infinity              // Set first to infinity
    let second = Infinity             // Set second to infinity

    for (let current of nums) {
        if (current > second && current > first) {  // If current > first and second
            return true                             // return true
        }
        if (current > first) {  // If current > first
            second = current    // second = current
        }                       // second only modified when current is greater than first

        else {                  // else
            first = current     // first = current
        }                       // first only modified when current is smaller than first
    }
    return false
}


let ans = increasingTriplet([4,5,1,10])
console.log(ans)
