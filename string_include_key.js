// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false


const stringIncludeKey = (string, key) => {
  if (!key.length) return true;
  let letter = key[0];
  let idx = string.indexOf(letter);
  if (idx !== -1) {
    return stringIncludeKey(string.slice(idx+1), key.slice(1))
  }
  return false;
}

console.log(stringIncludeKey("cadbpc", "abc")) // => true
console.log(stringIncludeKey("cba", "abc")) // => false
console.log(stringIncludeKey("abcdefg", "bcdfeg")) // => false
console.log(stringIncludeKey("zx3h/5", "x/")) // => true