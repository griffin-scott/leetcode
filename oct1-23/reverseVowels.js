/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = []
    for (let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){ arr.unshift(s[i]) }
    }
    let sArr = s.split('')
    for (let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){
            sArr[i] = arr[0]
            arr.shift()
        }
    }
    return sArr.join('')
};
