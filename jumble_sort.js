// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
// Do NOT use the built-in `Array.prototype.sort`.

// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'


function jumbleSort(string, alpha) {
  if (!alpha)[
    alpha = "abcdefghijklmnopqrstuvwxyz"
  ]

  let str = string.slice().split("");
  let sorted = false;
    while (!sorted){
      sorted = true;
      for (let i = 0; i < str.length - 1; i++){
        let first = alpha.indexOf(str[i]);
        let second = alpha.indexOf(str[i + 1])
        if (first > second){
          sorted = false;
          [str[i], str[i+1]] = [str[i+1], str[i]];
        }
    }
  }
  return str.join("");
}
console.log(jumbleSort("hello")) // ehllo
console.log(jumbleSort("hello", "zyxwvutsrqponmlkjihgfedcba")) // ollhe
