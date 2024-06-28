//Find the maximum Occurring string from an array.

function maxOccurrence(fruits) {
  let fruitFrequency = {};
  for (let fruit of fruits) {
    if (fruitFrequency[fruit]) {
      fruitFrequency[fruit]++;
    } else {
      fruitFrequency[fruit] = 1;
    }
  }
  let maxChar = "";
  let maxCount = 0;
  for (let [char, count] of Object.entries(fruitFrequency)) {
    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  }
  return { maxCount, maxChar };
}

console.log(
  maxOccurrence(["apple", "banana", "apple", "orange", "banana", "apple"])
);
