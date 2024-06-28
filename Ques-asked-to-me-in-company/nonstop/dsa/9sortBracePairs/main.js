// let arr = [" ( ", " } ", " ] ", " { ", " ) ", " [ "];
// output ["(", ")", "{", "}", "[", "]"]
//sort the array with pairs catch: a left brace has a high priority over right brace so in
//case of left brace "(" so we have to find it first pair ")" .

function sortBracePairs(arr) {
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let leftBraces = [];
  let rightBraces = [];

  for (let brace of arr) {
    if (pairs[brace]) {
      leftBraces.push(brace);
    } else {
      rightBraces.push(brace);
    }
  }

  let sortedArray = [];
  for (let left of leftBraces) {
    sortedArray.push(left);
    sortedArray.push(pairs[left]);
  }

  return sortedArray;
}

// console.log(sortBracePairs(["(", "}", "]", "{", ")", "["]));

function isBalancedParenthesis(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop();
      if (
        (str[i] === ")" && top === "(") ||
        (str[i] === "}" && top === "{") ||
        (str[i] === "]" && top === "[")
      ) {
        continue;
      } else {
        false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalancedParenthesis("()"));
