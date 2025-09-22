function logger(value) {
  console.log(value);
}

function calculate(num1, num2) {
  let sum = num1 + num2;
  // Call second function inside first
  //   Can't control if logger is called
  logger(sum);
  return sum;
}

calculate(5, 5);