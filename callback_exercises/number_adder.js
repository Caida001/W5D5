const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("input a number", (response) => {
      adder(response, sum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
}

function adder(input, sum, numsLeft, completionCallback) {
  sum += parseInt(input);
  console.log(sum);
  numsLeft--;
  addNumbers(sum, numsLeft, completionCallback);
}

addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));
