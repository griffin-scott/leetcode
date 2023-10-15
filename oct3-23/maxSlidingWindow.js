/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let output = []

    // Using Deque Data Structure
    let deque = [] // ***** stores indices, not values *****
    let l = 0
    let r = 0
    while (r < nums.length){ // using r to iterate, loop ends when right pointer hits end
        // pop smaller value from right side of deque if nums[r] is bigger
        while (deque && nums[deque[deque.length - 1]] < nums[r]){
            deque.pop()
        }
        deque.push(r) // add current right side index to end of deque

        // if deque[0] is out of bounds, remove it (outside window)
        if(deque[0] < l){
            deque.shift()
        }

        /*
          do not push to output or iterate l
          until the right ptr(r + 1) reaches window length
        */
        if (r + 1 >= k) {
            output.push(nums[deque[0]])
            l++
        }
        // move ONLY right pointer when r < k (window size)
        r++
    }
    return output
};


console.log(`\n Result: ${maxSlidingWindow([1, -1], 1)}`)
