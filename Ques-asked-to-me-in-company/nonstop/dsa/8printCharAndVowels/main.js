//implement recursion function to print every character of string ,
// after that its should print "its vowel" for every vowel from string.

function printCharAndVowel(str, index = 0) {
  // Base case: if index reaches the length of the string, return
  if (index >= str.length) {
    return;
  }

  console.log(str[index]);
  if (isVowels(str[index])) {
    console.log("its a vowel");
  }

  // Recursively call the function for the next character
  printCharAndVowel(str, index + 1);
}

function isVowels(char) {
  return "aeiouAEIOU".includes(char);
}

console.log(printCharAndVowel("hello"));
