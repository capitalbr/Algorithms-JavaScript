// Write an `Array.prototype.mergeSort` method that merge an array. It should take 
// an optional callback that compares two elements, returning -1 if the first 
// element should appear before the second, 0 if they are equal, and 1 if the 
// first element should appear after the second. Define and use a helper method,
// `merge(left, right, comparator)`, to merge the halves. Make sure that merge is
// defined on the window. Do NOT call the built-in `Array.prototype.sort` method
// in your implementation.
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.


Array.prototype.mergeSort = function (cb){
  if (this.length <= 1) return this;

  let mid = Math.floor(this.length / 2);

  let left = this.slice(0, mid).mergeSort(cb);
  let right = this.slice(mid).mergeSort(cb);

  return merge(left, right, cb);
}

function merge(left, right, cb){
  let merged = [];
  if (!cb){
    cb = (x, y) => {
      return x > y ? 1 : y > x ? -1 : 0;
    }
  }

  while (left.length && right.length){
    switch(cb(left[0], right[0])){
      case 1:
        merged.push(right.shift());
        break;
      default:
        merged.push(left.shift());
    }
  }

  return merged.concat(left, right);
}

cb = (x, y) => { // just reverses them
  return 1;
}

console.log([500000, 0, 300, 5, 3, 5, 222, 2].mergeSort(cb)) // [ 2, 222, 5, 3, 5, 300, 0, 500000 ]
console.log([500000, 0, 300, 5, 3, 5, 222, 2].mergeSort()) // [ 0, 2, 3, 5, 5, 222, 300, 500000 ]
