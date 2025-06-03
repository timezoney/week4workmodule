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

// Generator
function* range(start, end){
    while(start < end){
        // Return value and wait until next execution
        yield start;
        start += 1
    }
}

for (i of range(1, 10)){
    console.log(i)
}