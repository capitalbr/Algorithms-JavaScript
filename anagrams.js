// Write a function, `anagrams(word1, word2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

const anagrams = (word1, word2) => {
  const frequency = {};

  word1.split("").forEach(char => {
    if (!frequency[char]) frequency[char] = 0;
    frequency[char] += 1;
  });

  word2.split("").forEach(char => {
    if (!frequency[char]) frequency[char] = 0;
    frequency[char] -= 1;
  });

  return Object.values(frequency).every(letterCount => letterCount === 0);
}

const anagrams2 = (word1, word2) => {
  let frequency = {};
  let isAnagram = true;

  for (let i = 0; i < word1.length; i++){
    let key = word1[i];
    if (!frequency[key]) frequency[key] = 0;
    frequency[key] += 1;
  }
  for (let i = 0; i < word2.length; i++) {
    let key = word2[i];
    if (!frequency[key]) frequency[key] = 0;
    frequency[key] -= 1;
  }
  
  Object.values(frequency).forEach(amount => {
    if (amount) isAnagram = false;
  })
  return isAnagram;
};
console.log("anagrams 1")
console.log(anagrams('listen', 'silent')) // => true
console.log(anagrams('listen', 'potato')) // => false
console.log(anagrams('carrace', 'racecar')) // => true
console.log(anagrams('aebfcgdh', 'abcdefgh')) // => true
console.log(anagrams('aaaaaaaaaa', 'aaaaaaaaaa')) // => true
console.log(anagrams('aaaaaaaaaa', 'aaaaaaaaaaa')) // => false
console.log("anagrams 2")
console.log(anagrams2('listen', 'silent')) // => true
console.log(anagrams2('listen', 'potato')) // => false
console.log(anagrams2('carrace', 'racecar')) // => true
console.log(anagrams2('aebfcgdh', 'abcdefgh')) // => true
console.log(anagrams2('aaaaaaaaaa', 'aaaaaaaaaa')) // => true
console.log(anagrams2('aaaaaaaaaa', 'aaaaaaaaaaa')) // => false


