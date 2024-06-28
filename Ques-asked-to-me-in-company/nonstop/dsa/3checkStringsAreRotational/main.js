// check if strings are rotational of each other.

function areRotations(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let concatenatedString = str1 + str1;

  return concatenatedString.includes(str2);
}

console.log(areRotations("abcde", "cdeab")); // Output: true
console.log(areRotations("abcde", "abced")); // Output: false
