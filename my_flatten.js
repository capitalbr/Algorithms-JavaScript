// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]


Array.prototype.myFlatten = function (){
  let flattened = [];
  this.forEach(ele => Array.isArray(ele) ? flattened = flattened.concat(ele.myFlatten()) : flattened.push(ele));
  return flattened;
}

console.log([[1], [2,3], [4, [5]], [6, [7, [8]], [9, [10], [11, 12, [[13]]]]]].myFlatten());