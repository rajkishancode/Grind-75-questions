function balancedParenthesis(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) return false;
      let last = stack.pop();
      if (
        (str[i] === ")" && last === "(") ||
        (str[i] === "}" && last === "{") ||
        (str[i] === "]" && last === "[")
      ) {
        continue;
      } else {
        return false;
      }

    }
  }
  return stack.length === 0;
}

console.log(balancedParenthesis("()"));
console.log(balancedParenthesis("()[]{}"));
console.log(balancedParenthesis("(]"));
