// Should go back and look at two pointer solution at some point, this solution is very inefficient

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = [];
    let z = 0
    for (let i = 0; i < nums.length - z; i++){
        if (!nums[i]){
            nums.splice(i, 1)
            nums.push(0)    // array length stays consistent (splice -1, push +1)
            z++             // count number of zeroes
            i--             // go back one index so we dont skip an element, because we shifted array.
        }                   // ^^^ will not happen at the end of the array, because of z count
    }
    return nums // for testing, doesnt have to return technically.
};

console.log(moveZeroes([0, 1, 0, 0,0,0,0,0,0,0, 5, 6, 0, 5, 1, 1, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]))
