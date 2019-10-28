// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 


Array.prototype.quickSort = function (cb){
  if (this.length === 0) return [];
  if (!cb) cb = (x, y) => {
    return x < y ? -1 : x === y ? 0 : 1;
  }

  let pivot = this[0];
  let left = this.slice(1).filter(ele => cb(ele, pivot) === -1);
  let right = this.slice(1).filter(ele => cb(ele, pivot) !== -1);

  return left.quickSort(cb).concat(pivot, right.quickSort(cb))
}

let cb = (x, y) => {
  return x < y ? 1 : x > y ? -1 : 0;
}

console.log([23, 44, .37, 89.3, 100, 0, 2].quickSort())
console.log([23, 44, .37, 89.3, 100, 0, 2].quickSort(cb))

