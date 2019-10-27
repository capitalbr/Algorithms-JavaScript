// Write a function `median(arr)` that returns the median of elements in an array.
// If the length is even, return the average of the middle two elements.


const median = (arr) => {
  if (!arr.length) return null;
  let mid = Math.floor(arr.length / 2); 
  let sorted = arr.sort();
  if (arr.length % 2 === 0){
    return (sorted[mid] + sorted[mid-1]) / 2
  } else {
    return sorted[mid];
  }
}

console.log(median([5, 1, 3, 2, 4])) // 3
console.log(median([35, 49, 13, 45, 67, 1])) // 40