/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {}
    for (num of arr){
        if (obj[num]){
            obj[num] += 1
        }
        else {
            obj[num] = 1
        }
    }
    let vals = Object.values(obj)
    return new Set(vals).size === vals.length
};
