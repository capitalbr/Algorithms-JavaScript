// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in Array.prototype.indexOf method in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

const binarySearch = (array, target) => {
  if (array.length < 1) return -1;

  let mid = Math.floor(array.length/2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearch(array.slice(0, mid), target);
  } else{
    let right = binarySearch(array.slice(mid+1), target);
    return right === -1 ? -1 : right + mid+1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 4, 4, 5, 6, 7, 9, 10], 2)) // 1
console.log(binarySearch([1, 1, 1, 1, 1, 30, 410, 5000, 60200, 700000000], 60200)) // 8
