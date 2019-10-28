// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`


Array.prototype.myEach = function (cb){
  for (let i = 0; i < this.length; i++){
    cb(this[i], i);
  }
};

[1, 4, 2, 5].myEach((ele) => {
  console.log(ele * 2)
});

[1, 4, 2, 5].myEach((ele, idx) => {
  console.log(ele * 2 + idx)
});

[1, 4, 2, 5].myEach((ele, idx) => {
  console.log(`${ele} ${idx}`)
});