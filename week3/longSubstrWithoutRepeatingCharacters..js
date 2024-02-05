// Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let uniqueCharacters = new Set();
  while (end < s.length) {
    if (!uniqueCharacters.has(s[end])) {
      uniqueCharacters.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueCharacters.size);
    } else {
      uniqueCharacters.delete(s[start]);
      start++;
    }
  }
  return maxLength;
};

let res = lengthOfLongestSubstring("abcabcbb");
console.log(res);
