/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    let max = 0

    for (let i = 0; i < k; i++){
        if (vowels.includes(s[i])){
            count++
        }
    }
    max = count

    for(let i = k; i < s.length; i++){
        if ( vowels.includes(s[i]) ){
            count++
        }
        if ( vowels.includes(s[i - k]) ){
            count--
        }

        max = Math.max(max, count)
    }
    return max
};
