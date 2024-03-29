// **THIS PROBLEM WILL NOT SHOW UP ON A REAL ASSESSMENT** 
// If you are a non-native English speaker and find it difficult to understand this
// problem do not spend too much time on it and focus on other problems instead.

// Write a function `pigLatinify(sentence)` which translates a sentence into pig latin. 
// Rules for pig latin:
// In the English language, vowels are the following letters: ['a', 'e', 'i', 'o', 'u'] 
// Consonants are all other letters.
//  1. If the word begins with a vowel, simply append `ay` onto the end.
//      ex. 'apple' => 'appleay'
//  2. If the word begins with a consonant, move the starting consonants to the
//  end of the word and then append `ay`
//      ex1. 'pearl' => 'earlpay'
//      ex2. `school` => `oolschay`
//  3. Treat `qu` at the start of a word as a singular consonant.
//      ex1. `queen` => `eenquay`
//      ex2. `square` => `aresquay`


function pigLatinifyWord(word){
  let vowels = 'aeiou';
  let front = "";
  let i = 0;
  for (; i < word.length; i++){
    if (vowels.includes(word[i].toLowerCase())) break;
    if (word[i+1] === "u") {
      front += word[i] + "u";
      // +2 because you need to go past the "u" idx so it will be removed from the front as well
      i += 2;
      break;
    }
    front += word[i];
  }
  return word.slice(i) + front + "ay";
}

// TESTS FOR HELPER
// console.log(pigLatinifyWord("queen")); // => 'eenquay'
// console.log(pigLatinifyWord("square")); // => 'aresquay'
// console.log(pigLatinifyWord("apple")); // => 'appleay'
// console.log(pigLatinifyWord("school")); // => 'oolschay'
// console.log(pigLatinifyWord("zzwxxzbrizzled")); // => 'izzledzzwxxzbray'

const pigLatinify = (sentence) => {
  let converted = "";
  let sentenceArr = sentence.split(" ");
  sentenceArr.forEach((word, idx) => {
    converted += pigLatinifyWord(word);
    if (idx !== sentenceArr.length -1) converted += " ";
  })
  return converted;
}

let sentence = "Squares on a chess board with quEEns on them at school"

console.log(pigLatinify(sentence));




