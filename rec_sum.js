// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.


const recSum = (numArr) => {
  if (!numArr.length) return 0;
  if (numArr.length === 1) return numArr[0];
  return numArr.pop() + recSum(numArr);
}

console.log(recSum([1, 4, 6, 199, 19]));