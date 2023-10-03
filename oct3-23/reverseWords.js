/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    let newArr = arr.reverse().map(x => x.trim())
    arr = newArr.filter(x => x.length > 0)
    return arr.join(' ').trim()
};
