//Check if a string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = s.split("").reverse().join("");
  return s === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
