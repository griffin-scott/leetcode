/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// My solution
var findDifference = function(nums1, nums2) {
    let arr1 = nums1.filter((x) => !nums2.includes(x))
    let arr2 = nums2.filter((x) => !nums1.includes(x))
    return [[...new Set(arr1)], [...new Set(arr2)]]
};

// More efficient solution, doesnt have to .filter every single element (O(n^2) vs O(n))
var findDifference2 = function(nums1, nums2) {
    let ans1=new Set(nums1)
    let ans2=new Set(nums2)
    nums2.forEach(v=>{ans1.delete(v)})
    nums1.forEach(v=>{ans2.delete(v)})


    return [[...ans1],[...ans2]]
};



let arr = [1,2,2,3,3,3,4]
console.log([...new Set(arr)])
