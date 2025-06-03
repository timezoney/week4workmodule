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

function calculateWithCallback(num1, num2, callback) {
  let sum = num1 + num2;
  // Call second function inside first
  callback(sum);
  return sum;
}

calculate(5, 5);
 // Send logger as callback
calculateWithCallback(5, 5, logger);
// Send empty function as callback to not log
 calculateWithCallback(5, 5, () => {});
