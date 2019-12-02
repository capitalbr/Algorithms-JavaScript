const findSmallestPositiveInteger = (A) => {
  A = mergeSort(A);
  let i;
  let j = 1;
  while (i !== -1) {
    i = A.binarySearch(j);
    j++
  }
  return j - 1;
}

const mergeSort = (A) => {
  if (A.length <= 1) return A;

  let mid = Math.floor(A.length / 2)
  let left = mergeSort(A.slice(0, mid));
  let right = mergeSort(A.slice(mid));

  return merge(left, right);
}

const merge = (left, right) => {
  let merged = [];

  while (left.length && right.length) {
    switch (left[0] < right[0]) {
      case true:
        merged.push(left.shift());
        break;
      default:
        merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
}



console.log('Binary search for included int. Should return 5. It returns:', 
  binarySearch([1, 2, 3, 4, 5, 6], 5));

console.log('Binary search for not included int. Should return -1. It returns:', 
  binarySearch([1, 5, 3], -5));

console.log('Merge Sort should return [-2, 2, 3, 6, 15, 100000]. It returns:',
  mergeSort([2, -2, 3, 100000, 15, 6]));

console.log('findMallestPositiveInteger should return 1. It returns:',
  findSmallestPositiveInteger([2, -2, 3, 100000, 15, 6]));

console.log('findMallestPositiveInteger should return 12. It returns:',
  findSmallestPositiveInteger(
      [2, -2, 3, 4, 8, 9, 5, 10, 11, 6, 7, 100000, 1, 2, 3, 15, 6]
    ));




