// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

String.prototype.mySlice = function (startIdx = 0, endIdx = this.length){
  let s = "";
  for (let i = startIdx; i < endIdx && i < this.length; i++){
    s += this[i];
  }
  return s;
}

console.log("testing".mySlice(1, 4)); // est
console.log("testing".mySlice(1)); // esting
console.log("testing".mySlice(4)); // ing
console.log("testing".mySlice()); // testing
console.log("testing".mySlice(0)); // testing
console.log("testing".mySlice(3, 5)); // ti
console.log(`abcde`.mySlice(2)); // cde
console.log(`abcde`.mySlice(1, 3)) // bc
console.log(`abcde`.mySlice(1, 40)) // bc

