/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// pretty slow, dont need to calculate entire sum or divide by k every loop
var findMaxAverage = function(nums, k) {
    let arr = []
    let max = -Infinity
    if (nums.length === k){
        return nums.reduce((sum, x) => x + sum)/k
    }

    for(let i = 0; i < nums.length; i++){
        if (i < k){
            arr.push(nums[i])
        }
        else {
            max = Math.max( max, arr.reduce((sum, x) => x + sum)/k )
            arr.shift()
            arr.push(nums[i])
        }
    }
    return max = Math.max( max, arr.reduce((sum, x) => x + sum)/k )
};


// Efficient solution
var findMaxAverage2 = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += nums[i];
    }

    let max = sum;
    for (let i = k; i < nums.length; i++) {
      sum = sum - nums[i - k] + nums[i]; /*****/
      max = Math.max(max, sum);
    }

    return max / k; /*****/
  };
