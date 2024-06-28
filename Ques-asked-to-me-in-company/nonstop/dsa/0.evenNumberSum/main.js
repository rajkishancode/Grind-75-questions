// Sum of digits at even places of a number

function evenSum(num) {
  let sumOfEvenNum = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sumOfEvenNum += parseInt(num[i]);
    }
  }
  return sumOfEvenNum;
}

console.log(evenSum(52342));
