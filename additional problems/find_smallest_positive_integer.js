// time complexity O(n log(n))
// mergesort is the bottleneck, other oprations are: 
//    binarySearch: O(log(n))
//    while loop:  O(n)

const findSmallestPositiveInteger = (A) => {
  A = mergeSort(A);
  let i;
  let j = 1;
  while (i !== -1) {
    if (!i){
      i = binarySearch(A, j);
    } else {
      while(A[i] === j - 1){
        i++
      }

      if (A[i] !== j) return j;
    }
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

const binarySearch = (A, target) => {
  if (A.length === 0) return -1;

  let mid = Math.floor(A.length / 2);

  if (A[mid] === target) {
    return mid;
  } else if (A[mid] > target) {
    return binarySearch(A.slice(0, mid), target);
  } else {
    let value = binarySearch(A.slice(mid + 1), target);
    return value === -1 ? -1 : (mid + 1) + value;
  }
}

console.log('Binary search for included int. Should return 4. It returns:', 
  binarySearch([1, 2, 3, 4, 5, 6], 5));

console.log('Binary search for not included int. Should return -1. It returns:', 
  binarySearch([1, 5, 3], -5));

console.log('Merge Sort should return [-2, 2, 3, 6, 15, 100000]. It returns:',
  mergeSort([2, -2, 3, 100000, 15, 6]));

console.log('findMallestPositiveInteger should return 1. It returns:',
  findSmallestPositiveInteger([2, -2, 3, 100000, 15, 6]));

console.log('findMallestPositiveInteger should return 12. It returns:',
  findSmallestPositiveInteger(
      [6, 2, -2, 3, 4, 10, 8, 9, 5, 8, 10, 11, 7, 7, 100000, 1, 15, 6]
    ));




