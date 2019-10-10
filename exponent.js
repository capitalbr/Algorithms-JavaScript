// Write a function, `exponent(b, n)`, that calculates b^n recursively. 
// Your solution should accept negative values for n. Do NOT use ** or Math.pow


const exponent = (base, exp) => {
  if (exp === 0) return 1;

  if (exp > 0){
    return base * exponent(base, exp-1);
  } else {
    return 1/base * exponent(base, exp+1);
  }

}

console.log(exponent(5, 3));
console.log(exponent(4, -4));
console.log(exponent(2, -1));
