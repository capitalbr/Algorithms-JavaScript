// Write a recursive function, `baseConverter(n, b)` that takes in a base 10 
// number `n` and converts it to a base `b` number. Assume that `b` will never 
// be greater than 16. Return the new number as a string. If the number is 0, 
// your function should return "0" regardless of the base.
//
// The 'base' of a number refers to the amount of possible digits that can occupy
// one of the places in the number. We are used to base 10 numbers, which use
// the digits 0-9, however in computer science base 2 (binary) and base 16 (hexadecimal)
// numbers are often used. The digits used in base 16 are as follows (from 
// smallest to largest):
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
//
// Examples: 
// baseConverter(0, 2) => "0"
// baseConverter(5, 2) => "101"
// baseConverter(25, 16) => 19
// baseConverter(31, 16) => "1f"
//
// To get a feel for base conversion play around on this site: https://www.mathsisfun.com/numbers/convert-base.php
// For more information on base conversion refer here: https://www.purplemath.com/modules/numbbase.htm


const baseConverter = (num, base) => {
  if ([0, 1].includes(num)) return num.toString();

  const digits = '0123456789abcdef'.split("");

  return baseConverter(Math.floor(num / base), base) + digits[num % base];
}

console.log(baseConverter(0, 2))  // => "0"
console.log(baseConverter(5, 2))  // => "101"
console.log(baseConverter(25, 16)) // => 19
console.log(baseConverter(31, 16)) // => "1f"