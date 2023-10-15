/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let arr = [chars[0]]
    let curr = chars[0]
    let count = 0
    while(chars.length > 0){
        if (chars[0] === curr){
            count++
        }
        else {
            if (count > 1){
                arr = [...arr, ...(count.toString().split(''))]
            }
            curr = chars[0]
            arr.push(chars[0])
            count = 1
        }
        chars.shift()
    }
    if (count > 1){
        arr = [...arr, ...(count.toString().split(''))]
    }
    chars.push(...arr)      // Have to use .push() to modify inline
    return chars.length
};


console.log(compress(['a','a','a','b','b','a','a','a']))
// Currently returns ["a","5","b","2"]
// Should return ["a","3","b","2","a","2"]
