// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing it
// by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
// to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
// will take a message and an increment amount and outputs the encoded message.
// Assume lowercase and no punctuation. Preserve spaces.
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"


const caesarCipher = (str, shift) => {
  let encoded = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  str.split("").forEach((char) => {
    if (char === " "){
      encoded += " ";
    } else {
      let offset = (shift + alpha.indexOf(char)) % 26;
      encoded += alpha[offset];
    }
  })
  return encoded;
}

console.log(caesarCipher("aaa", 2)); // => "ccc"
console.log(caesarCipher("abc", 2)) // => “cde”
console.log(caesarCipher("xyz", 1)) // => “yza"
console.log(caesarCipher("az", (26*2000))); // => "az"