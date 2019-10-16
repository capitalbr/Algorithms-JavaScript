// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator.

Array.prototype.myReduce = function (cb, a) {
  let arr = this.slice();
  if (!a){
    a = arr.shift();
  }

  for (let i = 0; i < arr.length; i++){
    a = cb(a, arr[i]);
  }
  return a;
}


console.log([1, 5, 6, 7].myReduce((x, y) => {
  return x * y
})) // 210

console.log([1, 5, 6, 7].myReduce((x, y) => {
  return x * y
}, 10)) // 2100

console.log([1, 5, 6, 7].myReduce((x, y) => {
  return x - y
})) // -17

console.log([1, 5, 6, 7].myReduce((x, y) => {
  return x - y
}, 10)) // -9
