/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = ""
    for (let i = 0; i < word1.length || i < word2.length; i++){
        if (i < word1.length){ str = str + word1[i]}
        if (i < word2.length){ str = str + word2[i]}
    }
    return str
};
