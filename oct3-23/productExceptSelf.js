/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = []
    let suffix = []
    let arr = []
    for(let i = 0; i < nums.length; i++){
        if(i === 0)
            prefix[i] = 1
        else{
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    for(let i = nums.length - 1; i > -1; i--){
        if(i === nums.length - 1)
            suffix[i] = 1
        else{
            suffix[i] = nums[i+1] * suffix[i+1]
        }
    }
    for(let i = 0; i < nums.length; i++){
        arr[i] = prefix[i] * suffix[i]
    }
    console.log(prefix)
    console.log(suffix)
    return arr
};


productExceptSelf([1, 2, 3, 4])
