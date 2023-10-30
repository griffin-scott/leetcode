/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let output = []
    for (n of nums){
        if (map.has(n)){
            map.set(n, map.get(n) + 1)
        }
        else {
            map.set(n, 1)
        }
    }
    for (let i = 0; i < k; i++){
        let max = [0, 0]
        console.log(map)
        console.log(max)
        map.forEach((value, key) => {
            if (value > max[1]){
                max[0] = key
                max[1] = value
            }
        })
        output.push(max[0])
        map.delete(max[0])
    }
    return output
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
