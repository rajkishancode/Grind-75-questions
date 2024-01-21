/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the modified string is the same when read forward and backward
  return s === s.split("").reverse().join("");
};