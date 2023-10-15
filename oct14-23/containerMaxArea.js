/**
 * @param {number[]} height
 * @return {number}
*/

// Brute force, exceeded time limit
var maxArea1 = function(height) {
    let max = 0
    for (let i = 0; i < height.length; i++){
        for (let j = i+1; j < height.length; j++){
            if ( (Math.min(height[i], height[j]) * (j - i)) > max){
                max = (Math.min(height[i], height[j]) * (j - i))
            }
        }
    }
    return max
};

//  Two pointer solution
/*
    left ptr starts at 0, right ptr at end of array.
    each loop, calculate area, keep track of max.
    then, check which is smaller between l and r,
    and increment the smaller one towards the center.
*/
var maxArea = function(height) {
    let max = 0
    let l = 0
    let r = height.length - 1

    while(l != r){
        if ( (Math.min(height[l], height[r]) * (r - l)) > max ){
            max = (Math.min(height[l], height[r]) * (r - l))
        }
        height[l] < height[r] ? l++ : r--
    }
    return max
};


let height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height))
