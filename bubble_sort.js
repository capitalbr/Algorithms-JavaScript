// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in Array.prototype.sort method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

// with callback on Array.prototype
Array.prototype.bubbleSort = function (callback) {
  if (typeof callback !== "function") {
    callback = (num1, num2) => {
      return num1 > num2 ? 1 : num1 === num2 ? 0 : -1
    };
  }

  let sortedArr = this.slice();
  let sorted;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < sortedArr.length -1; i++) {
      if (callback(sortedArr[i], sortedArr[i+1]) === 1) {
        sorted = false;
        [sortedArr[i], sortedArr[i+1]] = [sortedArr[i+1], sortedArr[i]];
      }
    }
  }
  return sortedArr;
};


// without callback and not on Array.prototype
const bubbleSort = (arr) => {
  let sorted;
  while(!sorted){
    sorted = true;
    for(let i = 0; i < arr.length -1; i++){
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([6, 5, 4, 6, 4, 3, 2, 2]));
console.log(bubbleSort([1,2,3,7,-55, 3, 533, 66.5, 2, -20.2]));

console.log([6, 5, 4, 6, 4, 3, 2, 2].bubbleSort());
console.log([1, 2, 3, 7, -55, 3, 533, 66.5, 2, -20.2].bubbleSort());

//reversed with callback
console.log([1, 2, 3, 7, -55, 3, 533, 66.5, 2, -20.2].bubbleSort(
  callback = (num1, num2) => {
    return num1 < num2 ? 1 : num1 === num2 ? 0 : -1
  }
));
