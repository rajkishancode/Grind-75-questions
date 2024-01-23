// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let palindromeLength = 0;
    let charCount = {};
    for(let char of s){
        charCount[char] = (charCount[char] || 0) + 1;
        if(charCount[char] % 2 === 0) palindromeLength +=2;

    }
    return s.length > palindromeLength ? palindromeLength + 1 : palindromeLength;
};