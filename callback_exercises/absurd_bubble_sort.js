const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  console.log(`the first number is ${el1}`);
  console.log(`the second number is ${el2}`);
  reader.question("is the first number greater than the second number?", (response) => {
    if (response === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(array, index, madeAnySwaps, outerBubbleSortLoop) {

  if (index < array.length - 1) {
    askIfGreaterThan(array[index], array[index+1], (response) => {
      if (response) {
        const first = array[index];
        const second = array[index+1];
        array[index] = second;
        array[index+1] = first;
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(array, index+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompleteionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompleteionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([4,3,2,1], (arr) => console.log(`The sorted array is ${arr}`));
